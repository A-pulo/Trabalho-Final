<template>
    <div>
        <FormFuncionario ref="FormFuncionario"></FormFuncionario>
        <ListaFuncionarios v-bind:funcionarios="funcionarios"></ListaFuncionarios>
    </div>
</template>

<script>
import FormFuncionario from './FormFuncionario';
import ListaFuncionarios from './ListaFuncionarios';
import Funcionario from '../../models/Funcionario';
import Request from '../../services/Requests'

export default {
    data() {
        return {
            proxId: 3,
            funcionarios: [
                new Funcionario(1, "Paulo", 2750.50, 21, ""),
                new Funcionario(2, "Marcelo", 3100, 20, "")
            ]
        }
    },
    methods: {
        salvar(funcionario) {
            if (funcionario.id) {
                const index = this.funcionarios.findIndex(x => x.id == funcionario.id);
                const funcionarios = [...this.funcionarios];
                funcionarios[index] = funcionario;
                this.funcionarios = funcionarios;
            } else {
                funcionario.id = this.proxId;
                this.proxId++;
                this.funcionarios.push(funcionario);
            }
        },
        excluir(id){
            const index = this.funcionarios.findIndex(x => x.id == id);
            this.funcionarios.splice(index, 1);
        }, 
        editar(funcionario){
            this.$refs.FormFuncionario.carregar(funcionario);
        }
    },
    components: {
        FormFuncionario,
        ListaFuncionarios
    }
}
</script>

<style>

</style>