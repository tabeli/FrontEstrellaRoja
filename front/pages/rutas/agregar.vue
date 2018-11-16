<template>
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}">
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <br>
            <Agregar :idTour="idTour"/>
          </div>
      </div>
    </div>

  </template>
    
    <script>
      import Sidebar from '@/components/Sidebar'
      import Agregar from '@/components/Ruta/Agregar'
      import Header from '@/components/Header'
    
      export default {
        data: function(){
          return{
            idTour: this.$route.params.idTour
          }
        },
        components: {
          Sidebar,
          Agregar,
          Header
        },
        create: function(){
          console.log("id of tour");
          console.log(this.idTour);
        }
      }
    </script>
    
    <style>
    
    </style>