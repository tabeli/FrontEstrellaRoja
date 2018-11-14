  <template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Itinerarios/>
          </div>
      </div>
    </div>
    
  </template>

  <script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Itinerarios from "@/components/Itinerario/Itinerarios";

export default {
  components: {
    Sidebar,
    Header,
    Itinerarios
  }
};
</script>

  <style>
</style>


