<template>
    <div class="container mt-5">
    <!--Empieza la form-->
        <form>
        <!-- Tipo de ticket -->
        <!-- Narrativa -->
        <!--Nombre-->
            <div class="form-group">
                <center>
                    <label for="name" class="letrabonita">Nombre</label>
                </center>
                
                <input type="text" class="form-control" id="name" v-model="place.name">
            </div>
        <!--Longitud-->
            <div class="form-group">
                <center>
                    <label for="longitude" class="letrabonita">Longitud</label>
                </center>
                
                <input type="text" class="form-control" id="longitude" v-model="place.longitude">
            </div>
        <!--Latitud-->
            <div class="form-group">
                <center>
                    <label for="latitude" class="letrabonita">Latitud</label>
                </center>
                
                <input type="text" class="form-control" id="latitude" v-model="place.latitude">
            </div>
        
        <!--Descripcion-->
            <div class="form-group">
                <center>
                    <label for="description" class="letrabonita">Descripción</label>
                </center>
                
                <input type="text" class="form-control" id="description" v-model="place.description">
            </div>
        <!--Imagen-->
             <div class="form-group">
                <label for="imagen">Imagen</label>
                <textarea class="form-control" id="inputPrecio" rows="1"></textarea>
            </div>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <center>
            <button type="submit" class="btn btn-danger" @click.stop.prevent="priceFunction()">
                <div v-if="price.id == undefined">Crea Precio</div>
                <div v-else>Actualiza Precio</div>
            </button>
        </center>
    </div>   
</template>

<script>
export default {
    
}
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
</style>