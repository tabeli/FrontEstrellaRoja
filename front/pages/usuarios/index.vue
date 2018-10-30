<template>
    <div>
      <div class="sm-11">
        <Header/>
      </div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>

          <div class="col-sm-11">
              <Usuarios/>
          </div>
      </div>
      <div class="sm-11">
        <Footer/>
      </div>
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import Usuarios from '@/components/Usuario/Usuarios'
    import Footer from '@/components/Footer'
    import Header from '@/components/Header'
    export default {
      components: {
        Sidebar,
        Usuarios,
        Footer,
        Header
      }
    }
  </script>
  
  <style>
  
  </style>