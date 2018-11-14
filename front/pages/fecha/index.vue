  <template>
    <div>
      <div class ="row">
          <div class="col-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <div class="row">
              <div class="col-12">
                <Header/>
              </div>
              <div class="col-12">
                <Fechas/>
              </div>
            </div>
          </div>
           
      </div>
    </div>
    
  </template>

  <script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Fechas from "@/components/Fecha/Fechas";

export default {
  components: {
    Sidebar,
    Header,
    Fechas
  }
};
</script>

  <style>
</style>


