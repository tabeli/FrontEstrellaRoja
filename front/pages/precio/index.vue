  <template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Precios/>
            <Footer/>
          </div>
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


