<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-sm-11">
              <Camiones/>
          </div>
      </div>
      
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import Camiones from '@/components/Camion/Camiones'
  
    export default {
      components: {
        Sidebar,
        Camiones
      }
    }
  </script>
  
  <style>
  
  </style>