  <template>
  <div>

    <div class="row">
      <div class="col-sm-1">
        <sidebar/>
      </div>
      <div class ="content col-sm-11">
      
      <div class="Header">
        <Header/>
      </div>

        <form class="content">
            <div class="form-group my-5">
              <label for="Nombre de ruta">Nombre de ruta</label>
              <input class="form-control" type="text"> 
              <br/>
              <label for="Descripcion">Descripcion</label>
              <textarea class="form-control" id="" rows="7"></textarea>
              <br/>
              <label for="Nombre de ruta">Introduzca path de la imagen</label>
              <input class="form-control" type="text"> 
              
              <button type="button" class=" btn btn-info my-3">Aceptar</button>
            </div>
        </form>


      </div>

      </div>
      </div>
    </template>
    
    <script>
      import Sidebar from '@/components/Sidebar'
      import Rutas from '@/components/Ruta/Rutas'
      import Header from '@/components/Header'
    
      export default {
        components: {
          Sidebar,
          Rutas,
          Header,
        }
      }
    </script>
    
    <style>
    .content {
      display: inline-block; /* Same as the width of the sidenav */
      font-size: 15px; /* Increased text to enable scrolling */
      padding: 0px 10px;
      width: 90%;
      text-align:center;
  }
    </style>