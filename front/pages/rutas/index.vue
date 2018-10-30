  <template>
      <div>
        <div class ="row">
            <div class="col-sm-1">
                <Sidebar/>
            </div>
            <div class="col-sm-11">
                <Header/>
            </div>
            <!--Buscador-->      
          <div class="container text-center mt-5 ">
            <div class="row">
              <div class="col">
        <form class="form-inline my-5 my-lg-1">
        <input class="form-control mr-sm-2" type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit"><img src="@/static/magnifier.png" width="20" height="20"></button> 
      </form>
          </div>
  <div class="col">

  </div>
  <!--Agregar-->
  <div class="col text-right">
  <nuxt-link :to = "{name:'rutas-agregar'}" replace>
  <button type="button" class="btn btn-info text-right">Agregar</button> 
  </nuxt-link> 
  </div>
          </div>
        

 
<!--Tabla contenido-->
      <table class="table mt-3">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Imagen</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Editar</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Puebla fascinante</th>
            <td><img src=""></td>
            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, libero?</td>
            <nuxt-link :to = "{name:'rutas-agregar'}" replace>
            <td><img src="@/static/pencil.png"></td>
            </nuxt-link>
            <td><img src="@/static/basurero.png"></td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
            <div class="sm-11">
            <Footer/>
          </div>
    </div>
  </template>
  
  <script>
import Sidebar from "@/components/Sidebar";
import Rutas from "@/components/Ruta/Rutas";
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default {
  components: {
    Sidebar,
    Rutas,
    Footer,
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
</style>