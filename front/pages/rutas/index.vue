<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-sm-11">
              <Rutas/>
          </div>
      </div>
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import Rutas from '@/components/Ruta/Rutas'
  
    export default {
      components: {
        Sidebar,
        Rutas
      }
    }
  </script>
  
  <style>
  
  </style>