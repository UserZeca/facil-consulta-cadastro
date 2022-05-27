<template>
  
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <CardBody src="https://res.cloudinary.com/dyie6o63u/image/upload/v1653663257/desktop-pagina-1_1_dvtzjh.png" backgroundColor=""/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CardBody from './components/CardBody.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CardBody
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
