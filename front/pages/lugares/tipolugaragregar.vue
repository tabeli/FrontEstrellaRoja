<template>
    <div>

      <div class ="row">
          <div class="col-sm-1 mt-5">
              <Sidebar/>
          </div>
          <div class="col-sm-11">
            <Header/>
              <TipoLugarAgregar :idPlace_type="idPlace_type"/>
          </div>
      </div>


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
    Footer,
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
</style>


