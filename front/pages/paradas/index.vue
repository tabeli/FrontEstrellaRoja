<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
              <Parada/>
          </div>
      </div> 
    </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import Header from '@/components/Header'
  import Parada from '@/components/Paradas/Parada'
  export default {
    components: {
      Sidebar,
      Header,
      Parada
    }
  }
</script>

<style>

</style>