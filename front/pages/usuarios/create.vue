<template>
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}">
      <div class ="row">
          <div class="col-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <div class="row">
              <div class="col-12">
                <Header/>
              </div>
              <div class="col-12">
                <br>
                <CreaUsuario :idUser="idUser"/>
              </div>
            </div>
          </div>
  </div>
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import CreaUsuario from '@/components/Usuario/CreaUsuario'
    import Header from '@/components/Header'
  
    export default {
      data: function(){
        return {
          idUser: this.$route.params.idUser
        }
      },
      components: {
        Sidebar,
        CreaUsuario,
        Header,
      },
      created: function(){
        console.log("id of user :D");
        console.log(this.idUser);
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
    template{
      overflow: auto;
    }
  </style>