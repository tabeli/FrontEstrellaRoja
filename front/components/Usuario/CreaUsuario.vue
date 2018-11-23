<template>

  <div> 
    <form class="container">
         
            <div class="form-group col-md-12">
              <center>
                <label for="name" class="letrabonita">Nombre</label>
              </center>
              
              <input type="text" class="form-control sombra" id="name" placeholder="" v-model="user.name">
            </div>

            <div class="form-group col-md-12">
              <center>
                <label for="last_name" class="letrabonita">Apellido</label>
              </center>
              
              <input type="text" class="form-control sombra" id="last_name" placeholder="" v-model="user.last_name">
            </div>
        
            <div class="form-group col-md-12">
              <center>
                <label for="email" class="letrabonita">Email</label>
              </center>
              
              <input type="email" class="form-control sombra" id="email" placeholder="" v-model="user.email">
            </div>
            <div class="form-group col-md-12">
              <center>
                <label for="password" class="letrabonita">Password</label>
              </center>
              
              <input type="password" class="form-control sombra" id="password" placeholder="" v-model="user.password">
            </div>
          
            <div>
              <center>
                <label for="start" class="letrabonita">Fecha de nacimiento</label>
                <br>
              <input class="date" type="date" id="start" name="birthdate"
                    value="2000-01-01"
                    min="1900-01-01" max="(currdate)" 
                    v-model="user.birthdate"/>
              </center>
              <br>
            </div>

          
            <div class="form-group col-md-12">
              <center>
                 <label for="phone_number" class="letrabonita">Celular</label>
              </center>
             
              <input type="text" class="form-control sombra" id="phone_number" v-model="user.phone_number">
            </div>
            <div class="form-group col-md-12">
              <center>
                 <label for="postal_code" class="letrabonita">Código Postal</label>
              </center>
             
              <input type="text" class="form-control sombra" id="postal_code" v-model="user.postal_code">
            </div>
            <div class="form-group col-md-12">
              <center>
                <label for="inputState" class="letrabonita">Tipo de Usuario</label>
              </center>
              
              <select id="inputState" class="form-control sombra" v-model="user.user_type">
                <option v-if="user.user_type == client" value="client" selected>Cliente</option>
                <option v-else value="client">Cliente</option>
                <option v-if="user.user_type == administrator" value="administrator" selected>Administrador</option>
                <option v-else value="administrator">Administrador</option>
              </select>
            </div>
          
          <center>
            <button type="submit" class="btn btn-success sombra" @click.stop.prevent="userFunction()">
                <div v-if="user.id == undefined">Crea Usuario</div>
                <div v-else>Actualiza Usuario</div>
            </button>
          </center>
          <br>
        </form>
  </div>
  
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idUser"],
  data: function() {
    return {
      user: {},
      client: "client",
      administrator: "administrator"
    };
  },
  methods: {
    userFunction() {
      if (this.user.id != undefined) {
        this.editUser();
      } else {
        this.createUser();
      }
    },
    async createUser() {
      //alert(JSON.stringify(this.user))
      await axios({
        method: "post",
        url: "http://principal-arena-219118.appspot.com/api/user",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          user_type: this.user.user_type,
          name: this.user.name,
          last_name: this.user.last_name,
          email: this.user.email,
          birthdate: this.user.birthdate,
          password: this.user.password,
          postal_code: this.user.postal_code,
          phone_number: this.user.phone_number
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "usuarios" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editUser() {
      await axios({
        method: "put",
        url:
          "http://principal-arena-219118.appspot.com/api/user/" + this.idUser,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          user_type: this.user.user_type,
          name: this.user.name,
          last_name: this.user.last_name,
          email: this.user.email,
          birthdate: this.user.birthdate,
          password: this.user.password,
          postal_code: this.user.postal_code,
          phone_number: this.user.phone_number
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "usuarios" });
            //alert("http://principal-arena-219118.appspot.com/api/user/" + this.idUser)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getUser(id) {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/user/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.user = response.data;
            console.log(this.user);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea usuario");
    if (this.idUser != undefined) {
      console.log("idUser is defined");
      this.getUser(this.idUser);
    }
  }
};
</script>
  
<style>
.letrabonita {
  font-size: 22px;
  font: bold;
}
.sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
</style>