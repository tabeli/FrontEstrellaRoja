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

    <!--Precios.vue-->
    <div class="container mt-5">
      <Precios/>
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
  import Precios from "@/components/Precios/Precios"

  export default {
    components: {
      Sidebar,
      Header,
      Footer,
      Precios
    }
  }
  </script>

  <style>

  </style>


