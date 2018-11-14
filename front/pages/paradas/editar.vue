<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
              <Agregar/>
          </div>
      </div> 
    </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import Header from '@/components/Header'
  import Agregar from '@/components/Paradas/Agregar'
  export default {
    components: {
      Sidebar,
      Header,
      Agregar
    }
  }
</script>

<style>

</style>