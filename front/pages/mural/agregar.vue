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
    <!--Agregar.vue-->
      <div class="container mt-5">
        <Agregar/>
      </div>
    </div>

    <div class="Footer sm-11 mt-5">
      <Footer/>
    </div>

  </div>
    
</template>

<script>

  import Sidebar from "@/components/Sidebar"
  import Footer from "@/components/Footer"
  import Header from "@/components/Header"
  import Agregar from "@/components/Mural/Agregar"

  export default {
    components: {
      Sidebar,
      Footer,
      Header,
      Agregar
    }
  }
</script>

<style>
  .content {
    display: inline-block; /* Same as the width of the sidenav */
    font-size: 15px; /* Increased text to enable scrolling */
    padding: 0px 10px;
    width: 90%;
    text-align:center;
  }
</style>


