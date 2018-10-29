<template>
  <div>
    <div class ="row">
        <div class="col-sm-1">
            <Sidebar/>
        </div>
        <div class="col-sm-11">
            <h1>Inicio de sesion</h1>
        </div>
        <div class="container text-center mt-5">
         <div class="form-group">
                <label for="usr">Usuario:</label>
                <input type="text" class="form-control" id="usr">
            </div>
            <div class="form-group">
                <label for="contr">Contraseña:</label>
                <input type="password" class="form-control" id="contr">
            </div>
            <button type="button" class=" btn btn-info">Ingresar</button>
          </div>
    </div>
    <div>
      <footer class = "mt-3 pt-auto sticky-bottom" style="background-color:#686c71">
        <div class="text-center">
          <a>
            <img src="@/assets/er.png" width="80" height="60">
          </a>
          </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'

  export default {
    components: {
      Sidebar
    }
  }
</script>

<style>

</style>