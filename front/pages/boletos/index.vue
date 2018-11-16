  <template>
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}">>
      <div class ="row">
          <div class="col-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <div class="row">
              <div class="col-12">
                <Header/>
              </div>
              <div class="col-12">
                <Boletos/>
              </div>
            </div>
          </div>
           
      </div>
    </div>
    
  </template>

  <script>

  import Sidebar from "@/components/Sidebar"
  import Header from "@/components/Header"
  import Boletos from "@/components/Boleto/Boletos"

  export default {
    components: {
      Sidebar,
      Header,
      Boletos
    }
  }
  </script>

  <style>

  </style>


