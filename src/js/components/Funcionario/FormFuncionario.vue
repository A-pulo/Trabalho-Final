<template>
    <div>
        <h1>Formulario de Funcionario</h1>
        <form id="form-funcionarios" v-on:submit.prevent="onSubmit">
            <p>
                <label for="nome">Nome:</label><br>
                <input name="nome" v-model="nome"/>
            <p>
            <p>
                <label for="salario">Salario:</label><br>
                <input name="salario" v-model="salario" type="number"/>
            <p>
            <p>
                <label for="idade">Idade:</label><br>
                <input name="idade" v-model="idade" type="number"/>
            <p>
            <p>
                <label for="imagem">Imagem:</label><br>
                <input name="imagem" v-model="imagem"/>
            <p>
            <p>
                <div class="error">{{errorMessage}}</div>
                <input type="submit" value="Salvar"/>
            <p>
        </form>
    </div>
</template>

<script>
import Funcionario from '../../models/Funcionario'
export default {
    data(){
        return {
            errorMessage: "",
            id: "",
            nome: "",
            salario: "",
            idade: "",
            imagem: ""
        };
    },
    methods: {  
        carregar(funcionario) {
            this.id = funcionario.id;
            this.nome = funcionario.nome;
            this.salario = funcionario.salario;
            this.idade = funcionario.idade;
            this.imagem = funcionario.imagem;
            this.errorMessage = '';
        },
        onSubmit() {
            this.errorMessage = '';
            if (!this.nome || !this.salario || !this.idade) {
                this.errorMessage = 'Campo obrigatório não preenchido';
                return;
            }
            const funcionario = new Funcionario(this.id, this.nome, this.salario, this.idade, this.imagem);
            //Chamar post
            this.$parent.salvar(funcionario);
            this.id = '';
            this.nome = '';
            this.salario = '';
            this.idade = '';
            this.imagem = '';
        }
    }
}   
</script>

<style>
    .error {
        color: red;
    }
</style>