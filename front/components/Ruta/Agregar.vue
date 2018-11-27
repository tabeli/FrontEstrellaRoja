<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--Nombre-->
        <br>
            <div class="form-group col-md-12">
              <center>
                <label for="name" class="letrabonita">Nombre</label>
              </center>
              
              <input type="text" class="form-control sombra" id="name" placeholder="" v-model="tour.name">
            </div>
        <!--Path de la imagen-->
            <div class="form-group col-md-12">
              <center>
                <label for="image_path" class="letrabonita">Path de la Imagen</label>
              </center>
              
              <input type="text" class="form-control sombra" id="image_path" placeholder="" v-model="tour.image_path">
            </div>
        <!--Descripciòn-->
            <div class="form-group col-md-12">
              <center>
                <label for="author_last_name" class="letrabonita ">Descripción de la ruta</label>
              </center>
              
              <b-form-textarea class="sombra" id="desc" v-model="tour.description" placeholder="" :rows="7.5">

              </b-form-textarea>
            </div>
            <br>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <center>
          <br>
            <button type="submit" class="btn btn-success shadow" @click.stop.prevent="tourFunction()">
                <div v-if="tour.id == undefined">Crea Tour</div>
                <div v-else>Actualiza Tour</div>
            </button>
        </center>
        <br>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idTour"],
  data: function() {
    return {
      tour: {}
    };
  },
  methods: {
    tourFunction() {
      if (this.tour.id != undefined) {
        this.editTour();
      } else {
        this.createTour();
      }
    },
    async createTour() {
      //alert(JSON.stringify(this.user))
      await axios({
        method: "post",
        url: "https://adsoft-01.appspot.com/api/tour",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name: this.tour.name,
          image_path: this.tour.image_path,
          description: this.tour.description
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "rutas" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editTour() {
      await axios({
        method: "put",
        url:
          "https://adsoft-01.appspot.com/api/tour/" + this.idTour,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name: this.tour.name,
          image_path: this.tour.image_path,
          description: this.tour.description
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "rutas" });
            //alert("https://adsoft-01.appspot.com/api/tour/" + this.idTour)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getTour(id) {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/tour/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.tour = response.data;
            console.log(this.tour);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea tour");
    if (this.idTour != undefined) {
      console.log("idTour is defined");
      this.getTour(this.idTour);
    }
  }
};
</script>

<style>
  .sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
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
</style>


