  <template>
     <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Mapa/>
            <Footer/>
          </div>
      </div>
    </div>
  </template>
  
  <script>
import Sidebar from "@/components/Sidebar";
//import Mapa from "@/components/Mapa/Mapa";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  components: {
    Sidebar,
    //Mapa,
    Footer,
    Header
  }
};
</script>
  
  <style>
#content {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}
.bg-success{
  color:#FFFFFF;
}
</style>