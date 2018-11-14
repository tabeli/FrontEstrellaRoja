  <template>
     <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <GoogleMap/>
          </div>
      </div>
    </div>
  </template>
  
  <script>
import Sidebar from "@/components/Sidebar";
import GoogleMap from "@/components/Mapa/GoogleMap";
import Header from "@/components/Header";


export default {
  components: {
    Sidebar,
    GoogleMap,
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