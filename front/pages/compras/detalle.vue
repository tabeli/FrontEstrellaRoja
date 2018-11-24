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
              <Agregar :idPurchase="idPurchase"/>
          </div>
      </div>


    </div>
  
  </template>

  <script>

  import Sidebar from "@/components/Sidebar"
  import Header from "@/components/Header"
  import Agregar from "@/components/Boleto/Detalle"

  export default {
    data: function(){
      return {
        idPurchase: this.$route.params.idPurchase
      }
    },
    components: {
      Sidebar,
      Agregar,
      Header
    },
    created: function(){
      console.log("id of ticket")
      console.log(this.idPurchase)
    }
  }
  </script>

  <style>

  </style>