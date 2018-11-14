  <template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Imagenes/>
          </div>
      </div>
    </div>
    
  </template>

  <script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Imagenes from "@/components/Imagen/Imagenes";

export default {
  components: {
    Sidebar,
    Header,
    Imagenes
  }
};
</script>

  <style>
</style>


