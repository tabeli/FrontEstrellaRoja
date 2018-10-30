<template>
  <div>
    <div class ="row">
        <div class="col-sm-1">
            <Sidebar/>
        </div>
        <div class="col-sm-11">
            <Header/>
        </div>
        <div class="container text-center mt-5">
         <div class="form-group">
           <h2>Iniciar sesion</h2>
           <br>
           <br>
                <label for="usr">Usuario:</label>
                <input type="text" class="form-control" id="usr">
            </div>
            <br>
            <div class="form-group">
                <label for="contr">Contraseña:</label>
                <input type="password" class="form-control" id="contr">
            </div>
            <br>
            <button type="button" class=" btn btn-info">Ingresar</button>
          
         <div class="sm-11 mt-5">
           <Footer/>
         </div>
         
          </div>
          <br>
    </div>

  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  export default {
    components: {
      Sidebar,
      Footer,
      Header
    }
  }
</script>

<style>

</style>