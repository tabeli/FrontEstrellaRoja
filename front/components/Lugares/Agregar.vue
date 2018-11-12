<template>
    <div class="container mt-5">
    <!--Empieza la form-->
        <form>
        <!-- Tipo de lugar -->
            <div class="form-group ">
              <center>
                <label for="place_type" class="letrabonita" >Visualiza el ID del tipo de Lugar deseado</label>
              </center>
              <select class="form-control">
                <option v-for="place_type in this.$store.state.place_types" :key='place_type.id' >{{place_type.name}} -->  ID:{{place_type.id}}</option>
              </select>
              <br>
              <center>
                <label for="option">No lo encuentras ? Puedes crear uno nuevo</label>
                <nuxt-link :to="{ name: 'lugares-tipolugaragregar' }" replace>
                <button type="button" class="btn btn-info text-right">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="place_type" class="letrabonita">Escoge el ID del tipo de Lugar</label>
              </center>
                
                <select class="form-control" id="place_type" v-model="place.place_type_id">
                    <option v-for="place_type in this.$store.state.place_types"  :key='place_type.id' >{{place_type.id}}</option>
                </select>
            </div>
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