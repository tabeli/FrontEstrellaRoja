<template >
    <div class="container">
      <br>
    <!--Empieza la form-->
        <form>
        <!--Primera fecha-->
            <div class="form-group col-md-12">
              <center>
                <label for="start_date" class="letrabonita">Primera fecha de disponibilidad</label>
              </center>
              <input class="date" type="date" id="start" name="birthdate"
                    value="2000-01-01"
                    min="1900-01-01" max="(currdate)" 
                    v-model="date_interval.start_date"/>
              
            </div>
        <!--Ultima fecha-->
        <br>
            <div class="form-group col-md-12">
              <center>
                <label for="end_date" class="letrabonita">Última fecha de disponibilidad</label>
              </center>
              
              <input class="date " type="date" id="end" name="birthdate"
                    value="2000-01-01"
                    min="1900-01-01" max="(currdate)" 
                    v-model="date_interval.end_date"/>

            </div>
            <br>
        <!--status-->
            <div class="form-group">
              <center>
                <label for="status" class="letrabonita">Estatus</label>
              </center>
                
                <select class="form-control sombra" id="status" v-model="date_interval.status">
                    <option v-if="date_interval.status == in_service" value="in_service" selected>En servicio</option>
                    <option v-else value="in_service">En servicio</option>
                    <option v-if="date_interval.status == out_of_service" value="out_of_service" selected>Fuera de servicio</option>
                    <option v-else value="out_of_service">Fuera de servicio</option>
                </select>
            </div>
             <br>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <center>
          <br> 
            <button type="submit" class="btn btn-success shadow" @click.stop.prevent="date_intervalFunction()">
                <div v-if="date_interval.id == undefined">Crea Intervalo de Fechas</div>
                <div v-else>Actualiza Intervalo de Fechas</div>
            </button>
        </center>
            <br><br><br><br><br><br><br><br><br>

    </div>   

</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receivess
  props: ["idDate_interval"],
  data: function() {
    return {
      date_interval: {}
    };
  },
  methods: {
    //funcion del date interval
    date_intervalFunction() {
      if (this.date_interval.id != undefined) {
        this.editDate_interval();
      } else {
        this.createDate_interval();
      }
    },
    async createDate_interval() {
      //alert(JSON.stringify(this.user))
      await axios({
        method: "post",
        url: "https://adsoft-01.appspot.com/api/date_interval",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          start_date: this.date_interval.start_date,
          end_date: this.date_interval.end_date,
          status: this.date_interval.status
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "fecha" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editDate_interval() {
      await axios({
        method: "put",
        url:
          "https://adsoft-01.appspot.com/api/date_interval/" +
          this.idDate_interval,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          start_date: this.date_interval.start_date,
          end_date: this.date_interval.end_date,
          status: this.date_interval.status
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "fecha" });
            //alert("https://adsoft-01.appspot.com/api/date_interval/" + this.idDate_interval)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getDate_interval(id) {
      await axios({
        method: "get",
        url:
          "https://adsoft-01.appspot.com/api/date_interval/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.date_interval = response.data;
            console.log(this.date_interval);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea intervalo de fechas");
    if (this.idDate_interval != undefined) {
      console.log("idDate_interval is defined");
      this.getDate_interval(this.idDate_interval);
    }
  }
};
</script>

<style>
.container {
  margin-left: 160px; /* Same as the width of the sidenav */
  display: inline-block;
  font-size: 20px; /* Increased text to enable scrolling */
  text-align: center;
  align-content: center;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
}
.letrabonita {
  font-size: 22px;
  font: bold;
}
.sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
</style>


