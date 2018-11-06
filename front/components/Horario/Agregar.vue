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
            <br>
        <!--Boton de agregar intervalos-->

    <div>
        <label>Añadir intervalo</label>
        <br>
     <!--Botones de intervalos-->
         <b-btn :pressed="false" variant="btn btn-success" v-b-toggle.collapse2 class="m-1">Fecha</b-btn>
         <b-btn :pressed="false" variant="btn btn-success" v-b-toggle="'collapse3'" class="m-1">Hora</b-btn>
<br>
     <!-- element to collapse -->
     <br>
        <b-collapse  id="collapse2">
            <b-card>
               <div class="row">
                   <div class="col"></div>
                   <div class="col-md-2 ">
                       <label>Fecha inicial</label>
                       <date-picker v-model="date" :config="options"></date-picker>
                    </div>
                    <div class="col-md-2">
                        <label>Fecha final</label>
                        <date-picker v-model="date" :config="options"></date-picker>
                    </div>
                    <div class="col"></div>
                 </div>
                 <br>
                 <div class="row">
                     <div class="col"></div>
                     <div class="col"></div>
                     <button type="button" class="btn btn-warning">Añadir</button>
                     <div class="col"></div>
                     <div class="col"></div>
                 </div>
         </b-card>
    </b-collapse>
<br>
     <b-collapse id="collapse3">
         <b-card>
            <div class="row">
            <div class="col"></div>
             <div class="col-md-2">
                <label>Tiempo Inicial</label>
               

    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="10.5"><b-form-input :id="`type-${type}`" :type="type"></b-form-input></b-col>
    </b-row>

             </div>
             <div class="col-md-2 ">
                <label class="">Tiempo Final</label>
            
        <b-row class="my-1" v-for="type in types" :key="type">
             <b-col sm="10.5"><b-form-input :id="`type-${type}`" :type="type"></b-form-input></b-col>
        </b-row>
                
             </div>
             <div class="col"></div>
            </div>
            <br>
            <!--hola-->
                 <div class="row">
                     <div class="col"></div>
                     <div class="col"></div>
                     <button type="button" class="btn btn-warning">Añadir</button>
                     <div class="col"></div>
                     <div class="col"></div>
                 </div>
        </b-card>
    </b-collapse>
    </div>
    <!--Termina la form-->
    </form>
    <!--Boton Agregar-->
        <br/>
        <button type="button" class="btn btn-primary mt-3">Agregar</button>
    </div>   
</template>

<script>
  // Import required dependencies 
  import 'bootstrap/dist/css/bootstrap.css';
  
  // Import this component
  import datePicker from 'vue-bootstrap-datetimepicker';
  
  // Import date picker css
  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
   

export default {
  data () {
    return {
      types: [
        'time'
      ]
    }
  }
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


