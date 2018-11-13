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
              <Agregar :idImage="idImage"/>
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
import Agregar from "@/components/Imagen/Agregar";

export default {
  data: function() {
    return {
      idImage: this.$route.params.idImage
    };
  },
  components: {
    Sidebar,
    Footer,
    Header,
    Agregar
  },
  created: function() {
    console.log("id of mural");
    console.log(this.idImage);
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


