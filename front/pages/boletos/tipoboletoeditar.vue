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
              <TipoBoletosAgregar :idTicket_type="idTicket_type"/>
          </div>
      </div>


    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import TipoBoletosAgregar from '@/components/Boleto/TipoBoletosAgregar'
    import Header from '@/components/Header'
  
    export default {
      data: function(){
        return {
          idTicket_type: this.$route.params.idTicket_type
        }
      },
      components: {
        Sidebar,
        TipoBoletosAgregar,
        Header,
      },
      created: function(){
        console.log("id of ticket type")
        console.log(this.idTicket_type)
      }
    }
  </script>
  
  <style>
  
  </style>