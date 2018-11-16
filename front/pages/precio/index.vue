  <template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Precios/>
          </div>
      </div>
    </div>
    
  </template>

  <script>

  import Sidebar from "@/components/Sidebar"
  import Header from "@/components/Header"
  import Precios from "@/components/Precios/Precios"

  export default {
    components: {
      Sidebar,
      Header,
      Precios
    }
  }
  </script>

  <style>
  ::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
  </style>


