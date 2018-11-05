<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--Tour-->
            <div class="form-group">
                <label for="usuario">Tour</label>
                <select class="form-control" id="usuarioOpciones">
                    <option>Puebla fascinante</option>
                    <option>Cholula luminosa</option>
                </select>
            </div>
        <!--Capacidad-->
            <div class="form-group">
                <label for="tickets">Capacidad</label>
                <select class="form-control" id="tipoTickets">
                    <option>50</option>
                    <option>60</option>
                    <option>70</option>
                </select>
            </div>
        <!--Vendidos-->
            <div class="form-group">
                <label for="Tickets venidos">Tickets Vendidos:</label>
                <label for="mostrar tickets vendidos"> 5</label>
            </div>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <button type="button" class="btn btn-primary mt-3">Agregar</button>
    </div>   
</template>