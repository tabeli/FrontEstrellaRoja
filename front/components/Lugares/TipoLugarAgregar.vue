<template>

    <div class="container setform">
      <br>
    <!--Empieza la form-->
        <form>
        <!--Nombre-->
            <div class="form-group">
                <label for="name" class="letrabonita">Tipo de lugar</label>
                <input type="text" class="form-control sombra" id="name" v-model="place_type.name">
            </div>
        </form>
        <br>
    <!--Termina la form-->

    <!--Boton Agregar-->
    <center>
        <button type="submit" class="btn btn-success shadow" @click.stop.prevent="place_typeFunction()">
            <div v-if="place_type.id == undefined">Crea Tipo de Lugar</div>
            <div v-else>Actualiza Tipo de Lugar</div>
        </button>
    </center>
       <br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idPlace_type"],
  data: function() {
    return {
      place_type: {}
    };
  },
  methods: {
    place_typeFunction() {
      if (this.place_type.id != undefined) {
        this.editPlace_type();
      } else {
        this.createPlace_type();
      }
    },
    async createPlace_type() {
      //alert(JSON.stringify(this.place_type))
      await axios({
        method: "post",
        url: "https://adsoft-01.appspot.com/api/place_type",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name: this.place_type.name
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "lugares" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editPlace_type() {
      await axios({
        method: "put",
        url:
          "https://adsoft-01.appspot.com/api/place_type/" +
          this.idPlace_type,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name: this.place_type.name
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "lugares" });
            //alert("https://adsoft-01.appspot.com/api/place_type/" + this.idPlace_type)
            console.log("response");
            console.log(response);
            this.$router.push({ name: "lugares" });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getPlace_type(id) {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/place_type/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.place_type = response.data;
            console.log(this.place_type);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea tipo de tiket");
    if (this.idPlace_type != undefined) {
      console.log("idPlace_type is not defined");
      this.getPlace_type(this.idPlace_type);
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
