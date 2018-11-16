<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Compras/>
          </div>
      </div>
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import Compras from '@/components/Compra/Compras'
    import Header from '@/components/Header'
  
    export default {
      components: {
        Sidebar,
        Compras,
        Header,
      }
    }
  </script>
  
  <style>
  
  </style>