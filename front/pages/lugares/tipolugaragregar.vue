<template>
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}">
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <br>
            <TipoLugarAgregar :idPlace_type="idPlace_type"/>
          </div>
      </div>
      <div class="footer" :style="{'background-image': `url(${require('@/static/back4.png')})`}"></div>
    </div>
  </template>

<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TipoLugarAgregar from "@/components/Lugares/TipoLugarAgregar";

export default {
  data: function() {
    return {
      idPlace_type: this.$route.params.idPlace_type
    };
  },
  components: {
    Sidebar,
    Header,
    TipoLugarAgregar
  },
  created: function() {
    console.log("id of place type");
    console.log(this.idPlace_type);
  }
};
</script>

<style>
.content {
  display: inline-block; /* Same as the width of the sidenav */
  font-size: 15px; /* Increased text to enable scrolling */
  padding: 0px 10px;
  width: 90%;
  text-align: center;
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


