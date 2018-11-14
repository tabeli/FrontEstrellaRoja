<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Camiones/>
          </div>
      </div>
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import Camiones from '@/components/Camion/Camiones'
    import Header from '@/components/Header'
  
    export default {
      components: {
        Sidebar,
        Camiones,
        Header,
      }
    }
  </script>
  
  <style>
  
  </style>