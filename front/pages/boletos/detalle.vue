    <template>
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}">
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
          <Detalle :idPurchase="idPurchase"/>
          </div>
      </div>
      <div class="footer" :style="{'background-image': `url(${require('@/static/back4.png')})`}"></div>
    </div>
  </template>
  <script>

  import Sidebar from "@/components/Sidebar"
  import Header from "@/components/Header"
  import Detalle from "@/components/Boleto/Detalle"

  export default {
    data: function(){
      return {
        idPurchase: this.$route.params.idPurchase
      }
    },
    components: {
      Sidebar,
      Detalle,
      Header
    },
    created: function(){
      console.log(this.idPurchase)
    }
  }
  </script>

  <style>
.background-image{
background-image:('~/static/back4.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
    height:100%;
}
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