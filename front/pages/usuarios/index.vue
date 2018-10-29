<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-sm-11">
              <Usuarios/>
          </div>
      </div>
      
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import Usuarios from '@/components/Usuario/Usuarios'
  
    export default {
      components: {
        Sidebar,
        Usuarios
      }
    }
  </script>
  
  <style>
  
  </style>