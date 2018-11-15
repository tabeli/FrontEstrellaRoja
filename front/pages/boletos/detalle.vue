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
              <Agregar :idTicket="idTicket"/>
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
        idTicket: this.$route.params.idTicket
      }
    },
    components: {
      Sidebar,
      Agregar,
      Header
    },
    created: function(){
      console.log("id of ticket")
      console.log(this.idTicket)
    }
  }
  </script>

  <style>

  </style>