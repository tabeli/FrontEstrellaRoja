  <template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Narrativas/>
            <Footer/>
          </div>
      </div>
    </div>
    
  </template>

  <script>
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Narrativas from "@/components/Narrativa/Narrativas";

export default {
  components: {
    Sidebar,
    Header,
    Footer,
    Narrativas
  }
};
</script>

  <style>
</style>


