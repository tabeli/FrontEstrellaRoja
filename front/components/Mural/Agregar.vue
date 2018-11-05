<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--Titulo-->
            <div class="form-group">
                <label for="titulo">Titulo del mural</label>
                <textarea class="form-control" id="inputPrecio" rows="1"></textarea>
            </div>
        <!--Nombre del autor-->
            <div class="form-group">
                <label for="nombre">Nombre del autor</label>
                <textarea class="form-control" id="inputPrecio" rows="1"></textarea>
            </div>
        <!--Apellido del autor-->
            <div class="form-group">
                <label for="apellido">Apellido del autor</label>
                <textarea class="form-control" id="inputPrecio" rows="1"></textarea>
            </div>
        <!--Descripcion-->
            <div class="form-group">
                <label for="descripcion">Descripcion</label>
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


