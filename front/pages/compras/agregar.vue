<template>
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}">
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <br>
            <Agregar :idTicket="idTicket"/>
          </div>
      </div>
      <div class="footer" :style="{'background-image': `url(${require('@/static/back4.png')})`}"></div>
    </div>
  </template>

  <script>

  import Sidebar from "@/components/Sidebar"
  import Header from "@/components/Header"
  import Agregar from "@/components/Boleto/Agregar"

  export default {
    data: function(){
      return {
        idTicket: this.$route.params.idTicket
      }
    },
    components: {
      Sidebar,
      Agregar,
      Header,
    },
    created: function(){
      console.log("id of ticket")
      console.log(this.idTicket)
    }
  }
  </script>

  <style>

  </style>