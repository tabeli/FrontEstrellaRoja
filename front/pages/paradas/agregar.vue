<template>

    <div>

      <div class="Header">
        <Header/>
      </div>

      <div class ="row">
          <div class="col-sm-1 mt-5">
              <Sidebar/>
          </div>
          <div class="col-sm-11">
              <Agregar :idStop="idStop"/>
          </div>
      </div>

    <div class="Footer mt-5">
      <Footer/>
    </div>

    </div>
  
  </template>

<script>
  import Sidebar from '@/components/Sidebar'
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  import Agregar from '@/components/Paradas/Agregar'
  export default {
    data: function(){
      return {
        idStop: this.$route.params.idStop
      }
    },
    components: {
      Sidebar,
      Footer,
      Header,
      Agregar
    },
    created: function(){
      console.log("id of stop");
      console.log(this.idStop); 
    }
  }
</script>

<style>

</style>