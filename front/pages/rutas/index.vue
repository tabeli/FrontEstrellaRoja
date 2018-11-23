  <template>
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}">
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Rutas/>
          </div>
      </div>
      <div class="footer" :style="{'background-image': `url(${require('@/static/back4.png')})`}"></div>
    </div>
  </template>
  
  <script>
import Sidebar from "@/components/Sidebar";
import Rutas from "@/components/Ruta/Rutas";
import Header from "@/components/Header";

export default {
  components: {
    Sidebar,
    Rutas,
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