<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <TipoLugar/>
            <Footer/>
          </div>
      </div>
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import TipoLugar from '@/components/Lugares/TipoLugar'
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
  
    export default {
      components: {
        Sidebar,
        TipoLugar,
        Header,
        Footer,
      }
    }
  </script>
  
  <style>
  
  </style>