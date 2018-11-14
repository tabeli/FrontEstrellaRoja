<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Usuarios/>
          </div>
      </div>
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import Usuarios from '@/components/Usuario/Usuarios'
    import Header from '@/components/Header'
    export default {
      components: {
        Sidebar,
        Usuarios,
        Header
      }
    }
  </script>
  
  <style>
  
  </style>