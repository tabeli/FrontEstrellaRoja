<template>

    <div>

      <div class ="row">
          <div class="col-sm-1 mt-5">
              <Sidebar/>
          </div>
          <div class="col-sm-11">
             <Header/>
              <Agregar :idHour_interval="idHour_interval"/>
          </div>
      </div>

    </div>
  
  </template>
  

<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Agregar from "@/components/Horario/Agregar";

export default {
  data: function() {
    return {
      idHour_interval: this.$route.params.idHour_interval
    };
  },
  components: {
    Sidebar,
    Header,
    Agregar
  },
  created: function() {
    console.log("id of hour interval");
    console.log(this.idHour_interval);
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


