<template>
   <div>


      <div class ="row">
          <div class="col-sm-1 mt-5">
              <Sidebar/>
          </div>
          <div class="col-sm-11">
             <Header/>
              <Agregar :idTour_place="idTour_place"/>
          </div>
      </div>

    </div>
  </template>
<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Agregar from "@/components/Mapa/Agregar";

export default {
  data: function() {
    return {
      idTour_place: this.$route.params.idTour_place
    };
  },
  components: {
    Sidebar,
    Header,
    Agregar
  },
  created: function() {
    console.log("id of tour place");
    console.log(this.idTour_place);
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


