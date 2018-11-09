<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--Nombre-->
            <div class="form-group">
                <center>
                    <label for="name" class="letrabonita">Nombre de la parada</label>
                </center>
                
                <input type="text" class="form-control" id="name" placeholder="" v-model="stop.name">
            </div>
        <!--Longitud-->
            <div class="form-group">
                <center>
                    <label for="longitude" class="letrabonita">Longitud</label>
                </center>
                
                <input type="text" class="form-control" id="longitude" placeholder="" v-model="stop.longitude">
            </div>
        <!--Latitud-->
            <div class="form-group">
                <center>
                    <label for="latitude" class="letrabonita">Latitud</label>
                </center>
                
                <input type="text" class="form-control" id="latitude" placeholder="" v-model="stop.latitude">
            </div>
        <!--Descripcion-->
            <div class="form-group">
                <center>
                    <label for="description" class="letrabonita">Descripción</label>
                </center>
                
                <input type="text" class="form-control" id="description" placeholder="" v-model="stop.description">
            </div>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <center>
            <button type="submit" class="btn btn-danger" @click.stop.prevent="stopFunction()">
                <div v-if="stop.id == undefined">Crea Parada</div>
                <div v-else>Actualiza Parada</div>
            </button>
          </center>
    </div>   
</template>

<script>
</script>

<style>
.container {
  margin-left: 160px;
  margin-right: 0px; /* Same as the width of the sidenav */
  display: inline-block;
  font-size: 20px; /* Increased text to enable scrolling */
  text-align: center;
  align-content: center;
}
.letrabonita {
  font-size: 22px;
  font: bold;
}
</style>