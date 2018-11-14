<template>
    <div>

      <div class="Header">
        <Header/>
      </div>

      <div class ="row">
          <div class="col-sm-1 mt-5">
              <Sidebar/>
          </div>
          <div class="col-sm-11">
              <AgregarVinculo :idTour_stop="idTour_stop"/>
          </div>
      </div>

    <div class="Footer mt-5">
      <Footer/>
    </div>

    </div>
  </template>

  <script>
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AgregarVinculo from "@/components/Paradas/AgregarVinculo";

export default {
  data: function() {
    return {
      idTour_stop: this.$route.params.idTour_stop
    };
  },
  components: {
    Sidebar,
    Header,
    Footer,
    AgregarVinculo
  },
  created: function() {
    console.log("id of tour stop");
    console.log(this.idTour_stop);
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


