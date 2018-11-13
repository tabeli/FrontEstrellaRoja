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
              <Agregar :idSchedule="idSchedule"/>
          </div>
      </div>

    <div class="Footer mt-5">
      <Footer/>
    </div>

    </div>
  </template>
<script>

  import Sidebar from "@/components/Sidebar"
  import Footer from "@/components/Footer"
  import Header from "@/components/Header"
  import Agregar from "@/components/Itinerario/Agregar"

  export default {
    data: function(){
      return{
        idSchedule: this.$route.params.idSchedule
      };
    },
    components: {
      Sidebar,
      Footer,
      Header,
      Agregar
    },
    created: function(){
      console.log("id of schedule");
      console.log(this.idSchedule);
    }
  }
</script>

<style>
  .content {
    display: inline-block; /* Same as the width of the sidenav */
    font-size: 15px; /* Increased text to enable scrolling */
    padding: 0px 10px;
    width: 90%;
    text-align:center;
  }
</style>


