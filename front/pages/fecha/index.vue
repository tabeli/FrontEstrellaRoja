  <template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Fechas/>
            <Footer/>
          </div>
      </div>
    </div>
    
  </template>

  <script>
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Fechas from "@/components/Fecha/Fechas";

export default {
  components: {
    Sidebar,
    Header,
    Footer,
    Fechas
  }
};
</script>

  <style>
</style>


