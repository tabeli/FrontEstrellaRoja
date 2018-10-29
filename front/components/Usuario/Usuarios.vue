<template>
  <div class="content">

        <div>
          <h2>Usuarios</h2>
        </div>
        <div class="one"> 
            <nuxt-link :to="{ name: 'usuarios-create'}" replace>
                <button class="btn btn-info" type="button">Añadir usuario</button>
            </nuxt-link>
        </div>
        <br>
        <table class="table col-12">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col">Cumpleaños</th>
              <th scope="col">CP</th>
              <th scope="col">Celular</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
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
        </table>
  </div>
</template>

<script>
        import axios from 'axios'
      
        export default {
          methods: {
            async getUsers() {
              await axios({
                method:"get",
                url:"http://localhost:8080/user",
              })
              .then(function(response){
                console.log("response")
                console.log(response)
                this.$store.commit({
                  type:'storeUsers',
                  users: response.data
                })
              }.bind(this))
              .catch(function(error){
                console.log("error")
                console.log(error)
              })
            },
            async deleteUser(id) {
              console.log("Hola")
              await axios({
                method:"delete",
                url:"http://localhost:8080/user",
                data:{
                    "id":id
                }
              })
              .then(function(response){
                    console.log("response")
                    console.log(response)
                    this.getUsers()
              }.bind(this))
              .catch(function(error){
                    console.log("error")
                    console.log(error)
              })
            },
            editUserAction(id){
                //send to create view
                this.$router.push({ name: 'usuarios-create', params: { idUser: id } })
            },
            deleteUserAction(id){
                this.deleteUser(id)
            }
          },
          created: function(){
            this.getUsers()
          }
        }
      </script>

<style>
#content {
    margin-left: 160px; /* Same as the width of the sidenav */
    font-size: 28px; /* Increased text to enable scrolling */
    padding: 0px 10px;
}

</style>