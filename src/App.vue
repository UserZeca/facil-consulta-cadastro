<template>
     <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="max-width: 60%;">
        <SobreProfissional v-if="page == 1" />
        <SobreAtendimento v-else-if="page == 2" />
        <RevisaoCadastro v-else-if="page == 3" />
      
      
      <!--
      <CardBody src="https://res.cloudinary.com/dyie6o63u/image/upload/v1653663257/desktop-pagina-1_1_dvtzjh.png" backgroundColor=""/>
      -->

    </div>
  
</template>

<script>

//import CardBody from './components/CardBody.vue'
  import SobreProfissional from './pages/SobreProfissional.vue'
  import SobreAtendimento from './pages/SobreAtendimento.vue'
  import RevisaoCadastro from './pages/RevisaoCadastro.vue'
  export default {
    name: 'App',
    components: {
      SobreProfissional,
      SobreAtendimento,
      RevisaoCadastro
    },
    data(){

      return {
        page: 1 
      }

    }


  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

#app {
  font-family: 'Comfortaa', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FFE766;
  color: #483698;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>
