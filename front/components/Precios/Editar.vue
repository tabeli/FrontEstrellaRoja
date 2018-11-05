<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--Tours-->
            <div class="form-group">
                <label for="tours">Tours</label>
                <select class="form-control" id="toursOpciones">
                    <option>Puebla Fascinante</option>
                    <option>Cholula Magico</option>
                </select>
            </div>
        <!--Tipo de ticket-->
            <div class="form-group">
                <label for="tickets">Tipo de tickets</label>
                <select class="form-control" id="tipoTickets">
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
    display: inline-block; /* Same as the width of the sidenav */
    font-size: 15px; /* Increased text to enable scrolling */
    padding: 0px 10px;
    width: 90%;
    text-align:center;
}
</style>


