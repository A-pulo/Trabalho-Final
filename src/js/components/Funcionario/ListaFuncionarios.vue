<template>
    <div>
        <h1>Listagem de Funcionario</h1>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Salario</th>
                    <th>Idade</th>
                    <th>Imagem</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="funcionario in funcionarios" v-bind:key="funcionario.id">
                    <td>{{funcionario.id}}</td>
                    <td>{{funcionario.nome}}</td>
                    <td>{{funcionario.salario}}</td>
                    <td>{{funcionario.idade}}</td>
                    <td>{{funcionario.imagem}}</td>
                    <td>
                        <a href="#" v-on:click.prevent="editar(funcionario)">Editar</a>
                        <a href="#" v-on:click.prevent="excluir(funcionario.id)">Excluir</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    methods: {
        excluir(id){
            if (confirm("Deseja excluir o funcionario"))
            this.$parent.excluir(id);
        }, 
        editar(funcionario) {
            this.$parent.editar(funcionario);
        }
    },
    props: { funcionarios: Array } 
}
</script>

<style>

</style>