  <template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Lugar/>
          </div>
      </div>
    </div>
    
  </template>

  <script>

  import Sidebar from "@/components/Sidebar"
  import Header from "@/components/Header"
  import Lugar from "@/components/Lugares/Lugar"

  export default {
    components: {
      Sidebar,
      Header,
      Lugar
    }
  }
  </script>

  <style>

  </style>


