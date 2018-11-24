<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <TipoBoletos/>
            <Footer/>
          </div>
      </div>
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import TipoBoletos from '@/components/Boleto/TipoBoletos'
    import Header from '@/components/Header'
  
    export default {
      components: {
        Sidebar,
        TipoBoletos,
        Header,
      }
    }
  </script>
  
  <style>
  
  </style>