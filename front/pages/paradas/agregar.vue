<template>

    <div>


      <div class ="row">
          <div class="col-sm-1 mt-5">
              <Sidebar/>
          </div>
          <div class="col-sm-11">
             <Header/>
              <Agregar :idStop="idStop"/>
          </div>
      </div>

    </div>
  
  </template>

<script>
  import Sidebar from '@/components/Sidebar'
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