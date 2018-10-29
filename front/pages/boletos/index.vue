<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-sm-11">
              <Boletos/>
          </div>
      </div>
      
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import Boletos from '@/components/Boleto/Boletos'
  
    export default {
      components: {
        Sidebar,
        Boletos
      }
    }
  </script>
  
  <style>
  
  </style>