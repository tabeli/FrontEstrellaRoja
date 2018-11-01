<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Agregar/>
            <Footer/>
          </div>
      </div>
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import Agregar from '@/components/Camion/Agregar'
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
  
    export default {
      components: {
        Sidebar,
        Agregar,
        Header,
        Footer
      }
    }
  </script>
  
  <style>
  
  </style>