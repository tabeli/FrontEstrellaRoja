<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--Titulo-->
            <div class="form-group">
                <label for="titulo">Tipo de boleto</label>
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