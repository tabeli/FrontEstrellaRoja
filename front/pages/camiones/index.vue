<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Camiones/>
            <Footer/>
          </div>
      </div>
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import Camiones from '@/components/Camion/Camiones'
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
  
    export default {
      components: {
        Sidebar,
        Camiones,
        Header,
        Footer
      }
    }
  </script>
  
  <style>
  
  </style>