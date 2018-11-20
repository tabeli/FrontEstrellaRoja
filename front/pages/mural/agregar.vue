<template>
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}">
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Agregar :idMural="idMural"/>
          </div>
      </div>
      <div class="footer" :style="{'background-image': `url(${require('@/static/back4.png')})`}"></div>
    </div>
  </template>

  <script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Agregar from "@/components/Mural/Agregar";

export default {
  data: function() {
    return {
      idMural: this.$route.params.idMural
    };
  },
  components: {
    Sidebar,
    Header,
    Agregar
  },
  created: function() {
    console.log("id of mural");
    console.log(this.idMural);
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


