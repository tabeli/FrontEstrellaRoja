    <template>
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}">
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Agregar :idTicket="idTicket"/>
          </div>
      </div>
      <div class="footer" :style="{'background-image': `url(${require('@/static/back4.png')})`}"></div>
    </div>
  </template>

  <script>

  import Sidebar from "@/components/Sidebar"
  import Header from "@/components/Header"
  import Agregar from "@/components/Boleto/Agregar"

  export default {
    data: function(){
      return {
        idTicket: this.$route.params.idTicket
      }
    },
    components: {
      Sidebar,
      Agregar,
      Header,
    },
    created: function(){
      console.log("id of ticket")
      console.log(this.idTicket)
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