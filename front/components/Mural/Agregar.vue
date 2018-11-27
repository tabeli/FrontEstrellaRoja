<template>
    <div class="container">
      <br>
    <!--Empieza la form-->
        <form>
        <!--Titulo-->
            <div class="form-group col-md-12">
              <center>
                <label for="title" class="letrabonita">Título</label>
              </center>
              
              <input type="text" class="form-control sombra" id="title" placeholder="" v-model="mural.title">
            </div>
        <!--Nombre del autor-->
            <div class="form-group col-md-12">
              <center>
                <label for="author_name" class="letrabonita">Nombre del Autor</label>
              </center>
              
              <input type="text" class="form-control sombra" id="author_name" placeholder="" v-model="mural.author_name">
            </div>
        <!--Apellido del autor-->
            <div class="form-group col-md-12">
              <center>
                <label for="author_last_name" class="letrabonita">Apellido del Autor</label>
              </center>
              
              <input type="text" class="form-control sombra" id="author_last_name" placeholder="" v-model="mural.author_last_name">
            </div>
        <!--Descripcion-->
             <div class="form-group col-md-12">
              <center>
                <label for="description" class="letrabonita">Descripción</label>
              </center>
              
              <b-form-textarea class="sombra" id="desc"  v-model="mural.description"  placeholder="" :rows="7.5" >
              </b-form-textarea>
            </div>
          <!--Imagen-->
             <div class="form-group col-md-12">
              <center>
                <label for="image" class="letrabonita">Imágen</label>
              </center>
              
              <input type="text" class="form-control" id="image" placeholder="" v-model="mural.image_path">
            </div>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <center>
            <button type="submit" class="btn btn-success shadow" @click.stop.prevent="muralFunction()">
                <div v-if="mural.id == undefined">Crea Mural</div>
                <div v-else>Actualiza Mural</div>
            </button>
        </center>
        <br>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idMural"],
  data: function() {
    return {
      mural: {}
    };
  },
  methods: {
    muralFunction() {
      if (this.mural.id != undefined) {
        this.editMural();
      } else {
        this.createMural();
      }
    },
    async createMural() {
      //alert(JSON.stringify(this.user))
      await axios({
        method: "post",
        url: "https://adsoft-01.appspot.com/api/mural",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          title: this.mural.title,
          author_name: this.mural.author_name,
          author_last_name: this.mural.author_last_name,
          description: this.mural.description,
          image_path: this.mural.image_path
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "mural" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editMural() {
      await axios({
        method: "put",
        url:
          "https://adsoft-01.appspot.com/api/mural/" + this.idMural,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          title: this.mural.title,
          author_name: this.mural.author_name,
          author_last_name: this.mural.author_last_name,
          description: this.mural.description,
          image_path: this.mural.image_path
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "mural" });
            //alert("https://adsoft-01.appspot.com/api/mural/" + this.idMural)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getMural(id) {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/mural/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.mural = response.data;
            console.log(this.mural);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea mural");
    if (this.idMural != undefined) {
      console.log("idMural is defined");
      this.getMural(this.idMural);
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


