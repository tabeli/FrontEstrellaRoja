<template>
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}">
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <br>
            <TipoBoletosAgregar :idTicket_type="idTicket_type"/>
          </div>
      </div>
      <div class="footer" :style="{'background-image': `url(${require('@/static/back4.png')})`}"></div>
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
      ::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
  </style>