<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <TipoBoletosAgregar/>
            <Footer/>
          </div>
      </div>
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import TipoBoletosAgregar from '@/components/Boleto/TipoBoletosAgregar'
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
  
    export default {
      components: {
        Sidebar,
        TipoBoletosAgregar,
        Header,
        Footer,
      }
    }
  </script>
  
  <style>
  
  </style>