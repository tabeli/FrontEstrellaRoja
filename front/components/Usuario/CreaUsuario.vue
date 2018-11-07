<template>

  <div>
      <p>-----------------------------------------{{this.user}}</p>
    <form class="container setform">
          
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="name">Nombre</label>
              <input type="text" class="form-control" id="name" placeholder="" v-model="user.name">
            </div>
            <div class="form-group col-md-6">
              <label for="last_name">Apellido</label>
              <input type="text" class="form-control" id="last_name" placeholder="" v-model="user.last_name">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="" v-model="user.email">
            </div>
            <div class="form-group col-md-6">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="" v-model="user.password">
            </div>
          </div>
          <div class="form-row">
            <div>
              <label for="start">Cumpleaños</label>
              <input class="date" type="date" id="start" name="birthdate"
                    value="2018-07-22"
                    min="1970-01-01" max="2018-12-31" 
                    v-model="user.birthdate"/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-5">
              <label for="phone_number">Celular</label>
              <input type="text" class="form-control" id="phone_number" v-model="user.phone_number">
            </div>
            <div class="form-group col-md-3">
              <label for="postal_code">Código Postal</label>
              <input type="text" class="form-control" id="postal_code" v-model="user.postal_code">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Tipo de Usuario</label>
              <select id="inputState" class="form-control" v-model="user.user_type">
                <option v-if="user.user_type == client" value="client" selected>Cliente</option>
                <option v-else value="client">Cliente</option>
                <option v-if="user.user_type == administrator" value="administrator" selected>Administrador</option>
                <option v-else value="administrator">Administrador</option>
              </select>
            </div>
          </div>
          <center>
            <button type="submit" class="btn btn-danger" @click.stop.prevent="userFunction()">
                <div v-if="user.id == undefined">Crea Usuario!</div>
                <div v-else>Actualiza Usuario!</div>
            </button>
          </center>
        </form>
  </div>
  
</template>

<script>
  import axios from 'axios'

  export default {
    //props is the parameter it receives
    props: ['idUser'],
    data: function(){
      return {
        user: {},
        client: "client",
        administrator: "administrator"
      }
    },
    methods: {
      userFunction(){
        if(this.user.id != undefined){
          this.editUser()
        }
        else{
          this.createUser()
        }
      },
      async createUser() {  
        //console.log(this.user)
        //alert("hola!")
        //alert(JSON.stringify(this.user))
        await axios({
          method:"post",
          url:"http://principal-arena-219118.appspot.com/api/user",
          /**/
          headers: { 
            'Content-Type': 'application/json'
          },
          //url:"http://localhost:8080/hola",
          data:{
            "user_type":this.user.user_type,
            "name": this.user.name,
            "last_name": this.user.last_name,
            "email": this.user.email,
            "birthdate": this.user.birthdate,
            "password": this.user.password,
            "postal_code": this.user.postal_code,
            "phone_number": this.user.phone_number,
          }
        })
        .then(function(response){
          console.log("response")
          console.log("response")
          //alert(JSON.stringify(response))
          this.$router.push({ name: 'usuarios' })
        }.bind(this))
        .catch(function(error){
          /*alert("error")
          alert(JSON.stringify(error))
          console.log("alskdjalskdj")*/
          console.log("error")
          console.log(error)
        })
      },
      async editUser() {
        await axios({
          method:"put",
          url:"http://principal-arena-219118.appspot.com/api/user/" + this.idUser,
          headers: { 
            'Content-Type': 'application/json'
          },
          data:{
            "user_type": this.user.user_type,
            "name": this.user.name,
            "last_name": this.user.last_name,
            "email": this.user.email,
            "birthdate": this.user.birthdate,
            "password": this.user.password,
            "postal_code": this.user.postal_code,
            "phone_number": this.user.phone_number,
          }
        })
        .then(function(response){
          this.$router.push({ name: 'usuarios' })
          //alert("http://principal-arena-219118.appspot.com/api/user/" + this.idUser)
          console.log("response")
          console.log(response)
          /*alert("response")
          alert(JSON.stringify(response))*/
          this.$router.push({ name: 'usuarios' })
        }.bind(this))
        .catch(function(error){
          console.log("error")
          console.log(error)
          /*alert("error")
          alert(JSON.stringify(error))*/
        })
      },
      async getUser(id){
        await axios({
          method:"get",
          url:"http://principal-arena-219118.appspot.com/api/user/" + id,
          headers: { 
            'Content-Type': 'application/json'
          }
        })
        .then(function(response){
          this.user = response.data
          console.log(this.user)
        }.bind(this))
        .catch(function(error){
          console.log("error")
          console.log(error)
        })
      }
    },
   
    created: function(){
      console.log("starrt crea usuario")
      if(this.idUser != undefined){
        console.log("idUser is not defined lol")
        this.getUser(this.idUser)
      }
      

    }
  }
</script>
  
<style>
  .setform {
  justify-content: center;
  max-width: 90%;
  border: 10px solid #353535;
  padding: 5%;
}
</style>