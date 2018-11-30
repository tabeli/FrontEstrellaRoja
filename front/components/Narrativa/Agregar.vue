<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
          <br><br>
        <!--Path-->
            <div class="form-group col-md-12">
              <center>
                <label for="audio_path" class="letrabonita">Path del audio</label>
              </center>
              
              <input type="text" class="form-control sombra" id="audio_path" placeholder="" v-model="narrative.audio_path">
            </div>
        
        <!--Descripcion-->
             <div class="form-group col-md-12">
              <center>
                <label for="description" class="letrabonita">Descripción</label>
              </center>
              <b-form-textarea class="sombra" id="desc" v-model="narrative.description" placeholder="" :rows="7.5">
              </b-form-textarea>
              
            </div>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <center>
            <button type="submit" class="btn btn-success shadow" @click.stop.prevent="narrativeFunction()">
                <div v-if="narrative.id == undefined">Crea Narrativa</div>
                <div v-else>Actualiza Narrativa</div>
            </button>
        </center>
         <br><br> <br><br> <br><br>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idNarrative"],
  data: function() {
    return {
      narrative: {}
    };
  },
  methods: {
    //funcion de narrative
    narrativeFunction() {
      if (this.narrative.id != undefined) {
        this.editNarrative();
      } else {
        this.createNarrative();
      }
    },
    //crear narrative
    async createNarrative() {
      //alert(JSON.stringify(this.user))
      await axios({
        method: "post",
        url: "https://adsoft-01.appspot.com/api/narrative",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          audio_path: this.narrative.audio_path,
          description: this.narrative.description
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "narrativa" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    //editar narrativa
    async editNarrative() {
      await axios({
        method: "put",
        url:
          "https://adsoft-01.appspot.com/api/narrative/" +
          this.idNarrative,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          audio_path: this.narrative.audio_path,
          description: this.narrative.description
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "narrativa" });
            //alert("https://adsoft-01.appspot.com/api/narrative/" + this.idNarrative)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    //obtener narrative
    async getNarrative(id) {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/narrative/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.narrative = response.data;
            console.log(this.narrative);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea narrativa");
    if (this.idNarrative != undefined) {
      console.log("idNarrative is defined");
      this.getNarrative(this.idNarrative);
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


