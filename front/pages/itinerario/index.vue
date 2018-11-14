  <template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Itinerarios/>
            <Footer/>
          </div>
      </div>
    </div>
    
  </template>

  <script>
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Itinerarios from "@/components/Itinerario/Itinerarios";

export default {
  components: {
    Sidebar,
    Header,
    Footer,
    Itinerarios
  }
};
</script>

  <style>
</style>


