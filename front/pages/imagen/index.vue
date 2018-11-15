  <template >
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}" >  
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
.background-image{
background-image:('~/static/back4.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
    height:100%;
}

</style>


