<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--Path-->
        <br>
            <div class="form-group col-md-12">
              <center>
                <label for="title" class="letrabonita">Path de la Imagen</label>
              </center>
              
              <input type="text" class="form-control sombra" id="path" placeholder="" v-model="image.image_path">
            </div>
        
        <!--Descripcion-->
             <div class="form-group col-md-12">
              <center>
                <label for="description" class="letrabonita">Descripción</label>
              </center>
              
              <input type="text" class="form-control sombra" id="desc" placeholder="" v-model="image.description">
            </div>
            <br>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <center>
            <button type="submit" class="btn btn-success shadow" @click.stop.prevent="imageFunction()">
                <div v-if="image.id == undefined">Crea Imagen</div>
                <div v-else>Actualiza Imagen</div>
            </button>
        </center>
        <br><br><br><br><br><br><br><br><br><br><br>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idImage"],
  data: function() {
    return {
      image: {}
    };
  },
  methods: {
    imageFunction() {
      if (this.image.id != undefined) {
        this.editImage();
      } else {
        this.createImage();
      }
    },
    async createImage() {
      //alert(JSON.stringify(this.user))
      await axios({
        method: "post",
        url: "https://adsoft-01.appspot.com/api/image",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          image_path: this.image.image_path,
          description: this.image.description
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "imagen" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editImage() {
      await axios({
        method: "put",
        url:
          "https://adsoft-01.appspot.com/api/image/" + this.idImage,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          image_path: this.image.image_path,
          description: this.image.description
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "imagen" });
            //alert("https://adsoft-01.appspot.com/api/image/" + this.idImage)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getImage(id) {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/image/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.image = response.data;
            console.log(this.image);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea imagen");
    if (this.idImage != undefined) {
      console.log("idImage is defined");
      this.getImage(this.idImage);
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


