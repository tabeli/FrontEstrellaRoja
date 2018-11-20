<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--Nombre-->
            <div class="form-group">
                <center>
                    <label for="name" class="letrabonita">Nombre de la parada</label>
                </center>
                
                <input type="text" class="form-control sombra" id="name" placeholder="" v-model="stop.name">
            </div>
        <!--Longitud-->
            <div class="form-group">
                <center>
                    <label for="longitude" class="letrabonita">Longitud</label>
                </center>
                
                <input type="text" class="form-control sombra" id="longitude" placeholder="" v-model="stop.longitude">
            </div>
        <!--Latitud-->
            <div class="form-group">
                <center>
                    <label for="latitude" class="letrabonita">Latitud</label>
                </center>
                
                <input type="text" class="form-control sombra" id="latitude" placeholder="" v-model="stop.latitude">
            </div>
        <!--Descripcion-->
            <div class="form-group">
                <center>
                    <label for="description" class="letrabonita">Descripción</label>
                </center>
                
                <input type="text" class="form-control sombra" id="description" placeholder="" v-model="stop.description">
            </div>
        <!--Imagen-->
            <div class="form-group">
                <center>
                    <label for="image" class="letrabonita">Imágen</label>
                </center>
                
                <input type="text" class="form-control sombra" id="image" placeholder="" v-model="stop.image_path">
            </div>
        </form>
        <br>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <center>
            <button type="submit" class="btn btn-success shadow" @click.stop.prevent="stopFunction()">
                <div v-if="stop.id == undefined">Crea Parada</div>
                <div v-else>Actualiza Parada</div>
            </button>
          </center>
          <br><br><br><br><br>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idStop"],
  data: function() {
    return {
      stop: {}
    };
  },
  methods: {
    stopFunction() {
      if (this.stop.id != undefined) {
        this.editStop();
      } else {
        this.createStop();
      }
    },
    async createStop() {
      //alert(JSON.stringify(this.stop))
      await axios({
        method: "post",
        url: "http://principal-arena-219118.appspot.com/api/stop",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name: this.stop.name,
          longitude: this.stop.longitude,
          latitude: this.stop.latitude,
          description: this.stop.description,
          image_path: this.stop.image_path
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "paradas" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editStop() {
      await axios({
        method: "put",
        url:
          "http://principal-arena-219118.appspot.com/api/stop/" + this.idStop,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name: this.stop.name,
          longitude: this.stop.longitude,
          latitude: this.stop.latitude,
          description: this.stop.description,
          image_path: this.stop.image_path
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "paradas" });
            //alert("http://principal-arena-219118.appspot.com/api/stop/" + this.idStop)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getStop(id) {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/stop/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.stop = response.data;
            console.log(this.stop);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea paradas");
    if (this.idStop != undefined) {
      console.log("idStop is defined");
      this.getStop(this.idStop)
    }
  }
};
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
.letrabonita {
  font-size: 22px;
  font: bold;
}
.sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
</style>