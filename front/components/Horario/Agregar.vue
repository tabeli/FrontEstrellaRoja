<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--Tours-->
            <div class="form-group">
                <label for="tours">Tours</label>
                <select class="form-control mt-3" id="toursOpciones">
                    <option>Puebla Fascinante</option>
                    <option>Cholula Magico</option>
                </select>
            </div>
        <!--Tipo de ticket-->
            <div class="form-group">
                <label for="tickets">Tipo de tickets</label>
                <select class="form-control mt-3" id="tipoTickets">
                    <option>Adulto</option>
                    <option>Niño</option>
                    <option>INAPAM</option>
                </select>
            </div>
        <!--Precio-->
            <div class="form-group">
                <label for="precios">Precio</label>
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


