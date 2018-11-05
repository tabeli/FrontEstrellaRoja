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
        <!--Intervalo de horario-->
            <div class="form-group">
                <label for="tickets">Intervalo de horas</label>
                <select class="form-control mt-3" id="tipoTickets">
                    <option>10:00-22:00</option>
                    <option>18:00-23:00</option>
                    <option>9:00-21:00</option>
                </select>
            </div>
        <!--Intervalo de fechas-->
            <div class="form-group">
                <label for="tickets">Intervalo de fechas</label>
                <select class="form-control mt-3" id="tipoTickets">
                    <option>05/11/2018-20/01/2019</option>
                    <option>29/09/2018-20/01/2019</option>
                    <option>10/03/2019-31/12/2019</option>
                </select>
            </div>
        <!--Boton de agregar intervalos-->
        <div>
            <b-btn v-b-toggle.collapse1 variant="success">Añadir intervalos</b-btn>
            <b-collapse id="collapse1" class="mt-2">
            <b-card>
                <p class="card-text">Collapse contents Here</p>
            </b-card>
            </b-collapse>
        </div>
        <!--Intervalo horas y fechas-->
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div>
    <!--Termina la form-->
        </form>
    <!--Boton Agregar-->
        <button type="button" class="btn btn-primary mt-3">Agregar</button>
    </div>   
</template>

<script>

</script>
export default {

};
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


