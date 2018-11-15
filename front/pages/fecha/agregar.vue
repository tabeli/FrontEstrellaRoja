<template>
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}">
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
                <br>
                <Agregar :idDate_interval="idDate_interval"/>
              </div>
            </div>
          </div>
           
      </div>
      <br>
      <br>
      <br>
      <br>
      <div :style="{'background-image': `url(${require('@/static/back4.png')})`}" class="footer"></div>
    </div>

  
  </template>
  

<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Agregar from "@/components/Fecha/Agregar";

export default {
  data: function() {
    return {
      idDate_interval: this.$route.params.idDate_interval
    };
  },
  components: {
    Sidebar,
    Header,
    Agregar
  },
  created: function() {
    console.log("id of date interval");
    console.log(this.idDate_interval);
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

</style>


