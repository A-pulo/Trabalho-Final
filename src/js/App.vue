<template>
    <div>
        <Funcionario>
    </div>
</template>

<script>
    import Vue from "vue";
    import Funcionario from './components/Funcionario/Funcionario'
    export default Vue.extend({
        components: {
            Funcionario
        }
    });
</script>

<style>
html,
body,
* {
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}
</style>