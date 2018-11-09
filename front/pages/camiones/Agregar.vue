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
              <Agregar :idBus="idBus"/>
          </div>
      </div>

    <div class="Footer mt-5">
      <Footer/>
    </div>

    </div>
  </template>
  
  <script>
import Sidebar from "@/components/Sidebar";
import Agregar from "@/components/Camion/Agregar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  data: function() {
    return {
      idBus: this.$route.params.idBus
    };
  },
  components: {
    Sidebar,
    Agregar,
    Header,
    Footer
  },
  created: function() {
    console.log("id of bus: ");
    console.log(this.idBus);
  }
};
</script>
  
  <style>
</style>