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

  <!--Footer-->
    <div class="Footer sm-11 mt-5">
      <Footer/>
    </div>

  </div>
    
</template>

<script>

  import Sidebar from "@/components/Sidebar"
  import Footer from "@/components/Footer"
  import Header from "@/components/Header"
  import Editar from "@/components/Mural/Editar"

  export default {
    components: {
      Sidebar,
      Footer,
      Header,
      Editar
    }
  }
</script>

<style>

</style>


