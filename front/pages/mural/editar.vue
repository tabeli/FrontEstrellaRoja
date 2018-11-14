<template>
  <div>
    <div class="row">
    <!--Sidebar-->
      <div class="col-sm-1">
        <Sidebar/>
      </div>

  <!--Header-->
    <div class="col-sm-11">
      <Header/>
    </div>

  <!--Editar.vue-->
    <div class="container mt-5">
      <Editar/>
    </div>

    </div>
  </div>
    
</template>

<script>

  import Sidebar from "@/components/Sidebar"
  import Header from "@/components/Header"
  import Editar from "@/components/Mural/Editar"

  export default {
    components: {
      Sidebar,
      Header,
      Editar
    }
  }
</script>

<style>

</style>


