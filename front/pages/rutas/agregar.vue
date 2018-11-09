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
              <Agregar :idTour="idTour"/>
          </div>
      </div>

    <div class="Footer mt-5">
      <Footer/>
    </div>

    </div>
  
  </template>
    
    <script>
      import Sidebar from '@/components/Sidebar'
      import Agregar from '@/components/Ruta/Agregar'
      import Footer from '@/components/Footer'
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
          Footer,
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