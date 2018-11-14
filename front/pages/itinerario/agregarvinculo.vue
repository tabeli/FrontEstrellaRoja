<template>
    <div>


      <div class ="row">
          <div class="col-sm-1 mt-5">
              <Sidebar/>
          </div>
          <div class="col-sm-11">
            <Header/>
              <AgregarVinculo :idTour_schedule="idTour_schedule"/>
          </div>
      </div>


    </div>
  </template>

  <script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import AgregarVinculo from "@/components/Itinerario/AgregarVinculo";

export default {
  data: function() {
    return {
      idTour_schedule: this.$route.params.idTour_schedule
    };
  },
  components: {
    Sidebar,
    Header,
    AgregarVinculo
  },
  created: function() {
    console.log("id of tour schedule");
    console.log(this.idTour_schedule);
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


