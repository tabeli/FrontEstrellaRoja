<template>
    <div class="container mt-5">
    <!--Empieza la form-->
        <form>
        <!--Nombre-->
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <textarea class="form-control" id="inputPrecio" rows="1"></textarea>
            </div>
        <!--Tipo de lugar-->
            <div class="form-group">
                <label for="tipoDeLugar">Tipo de Lugar</label>
                <select class="form-control">
                    <option>Punto de interes</option>
                    <option>Parada</option>
                </select>
            </div>
        <!--Longitud-->
            <div class="form-group">
                <label for="longitud">Longitud</label>
                <textarea class="form-control" id="inputPrecio" rows="1"></textarea>
            </div>
        <!--Latitud-->
            <div class="Latitud">
                <label for="latitud">Latitud</label>
                <textarea class="form-control" id="inputPrecio" rows="1"></textarea>
            </div>
        <!--Narrativa-->
            <div class="form-group">
                <label for="narrativa">Narrativa</label>
                <textarea class="form-control" id="inputPrecio" rows="1"></textarea>
            </div>
        <!--Descripcion-->
            <div class="form-group">
                <label for="descripcion">Descripcion</label>
                <textarea class="form-control" id="inputPrecio" rows="10"></textarea>
            </div>
        <!--Imagen-->
             <div class="form-group">
                <label for="imagen">Imagen</label>
                <textarea class="form-control" id="inputPrecio" rows="1"></textarea>
            </div>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <button type="button" class="btn btn-primary mt-3">Agregar</button>
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