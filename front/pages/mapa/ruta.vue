  <template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Ruta/>
          </div>
      </div>
    </div>
    
  </template>

  <script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Ruta from "@/components/Mapa/Ruta";

export default {
  components: {
    Sidebar,
    Header,
    Ruta
  }
};
</script>

  <style>
</style>