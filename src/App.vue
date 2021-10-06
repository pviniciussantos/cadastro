<template>

  <Cadastro/>
  
  <HelloWorld msg=""/>
  <Consulta/>
  
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Consulta from './views/Consulta.vue'
import Cadastro from './views/Cadastro.vue'



export default {
  name: 'App',
  components: {
    HelloWorld,
    Cadastro,
    Consulta
  }
}
</script>

<style>
#app {
  background-color: rgb(250, 222, 186);
  padding-top: 80px;
  max-width: 100%;
  margin: auto;
  
  font-family: Comfortaa, Open sans-serif, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
