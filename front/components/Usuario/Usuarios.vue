<template>
  <div id="principal" class="container">

      <br>
    <div>
    <!--Buscador-->
     <div class="mt-5">
      <div class="row">
      <div class="col">
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
          <button class="btn btn-outline-danger my-2 my-sm-0" type="submit"><img src="@/static/magnifier.png" width="20" height="20"></button> 
        </form>
      </div>

      <div class="derecha">
        <nuxt-link :to="{ name: 'usuarios-create' }" replace>
          <button class="btn btn-info" type="button">Añadir usuario</button>
        </nuxt-link>
      </div>
      </div>
    </div>
    <div>
    <table class="table mt-3 col-11">
      <thead class="bg-success">
        <tr>
          <th scope="col">Tipo de usuario</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Cumpleaños</th>
          <th scope="col">CP</th>
          <th scope="col">Celular</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="user in this.$store.state.users" :key='user.id'>
            <td>{{ user.user_type }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.last_name}}</td>
            <td>{{ user.email}}</td>
            <td>{{ user.birthdate}}</td>
            <td>{{ user.postal_code}}</td>
            <td>{{ user.phone_number}}</td>
            <td><button class="btn btn-info" type="button" @click="editUserAction(user.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-info" type="button" @click="deleteUserAction(user.id)"><img src="@/static/basurero.png"></button></td>
          </tr>
        </tbody>
      
      
    <!--  <tbody>
        <tr v-for="user in this.$store.state.users" :key='user.id'>
          <td>{{ user.name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.birthdate }}</td>
          <td>{{ user.postal_code }}</td>
          <td>{{ user.phone_number }}</td>
          <td>
            <button class="btn btn-info" type="button" @click="editUserAction(user.id)" >Editar</button>
          </td>
          <td>
            <button class="btn btn-danger" type="button" @click="deleteUserAction(user.id)" >Eliminar</button>
          </td>
        </tr>
      </tbody>
    -->
    </table>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async getUsers() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/user"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeUsers",
              users: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async deleteUser(id) {
      console.log("Delete user");
      await axios({
        method: "delete",
        url: "http://principal-arena-219118.appspot.com/api/user/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            this.getUsers();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editUserAction(id) {
      //send to create view
      this.$router.push({ name: "usuarios-create", params: { idUser: id } });
    },
    deleteUserAction(id) {
      this.deleteUser(id);
    }
  },
  created: function() {
    this.getUsers();
  }
};
</script>

<style>
.content {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 15px; /* Increased text to enable scrolling */
  padding: 0px 10px;
  text-align: center;
  align-content: center;
}
.derecha{
  padding-right: 110px;
  margin-left:  160px;
}
.bg-success {
  color:#FFFFFF
}

.buttons {
  border: solid 1px #ffffff;
}
</style>