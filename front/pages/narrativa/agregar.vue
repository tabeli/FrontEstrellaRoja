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
              <Agregar :idNarrative="idNarrative"/>
          </div>
      </div>

    </div>
  
  </template>
  

<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Agregar from "@/components/Narrativa/Agregar";

export default {
  data: function() {
    return {
      idNarrative: this.$route.params.idNarrative
    };
  },
  components: {
    Sidebar,
    Header,
    Agregar
  },
  created: function() {
    console.log("id of narrative");
    console.log(this.idNarrative);
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


