    <template>
  

        <form class="form" @submit.prevent="login()">
            <div class="container text-center mt-5">
                <div class="form-group">
                <h2>Iniciar sesion</h2>
                <br>
                <br>
                    <label for="usr">Email:</label>
                    <input type="text" class="form-control" id="usr" v-model="email">
                </div>
                <br>
                <div class="form-group">
                    <label for="contr">Contraseña:</label>
                    <input type="password" class="form-control" id="contr" v-model="password">
                </div>
                <br>
                <button type="submit" class="btn btn-link btn-primary btn-lg">Ingresar</button>
            </div>
        </form>
    </template>

    <script>

    import axios from "axios"
    const alertService = require('~/static/js/alertService.js')

    export default {
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            login() {
                axios.post('http://principal-arena-219118.appspot.com/api/auth/login', {
                    email: this.email,
                    password: this.password
                })
                .then(function (response) {
                    this.$router.push({ name: "mapa"});
                }.bind(this))
                .catch(function (error) {
                    alertService.error("Verifique su email o contraseña")
                    console.log(error);
                });
                /*
                let postData = {
                    email: this.email,
                    password: this.password
                }
                axios.post('http://localhost:8081/api/auth/login', postData)
                    .then(user => {
                        alertService.succes("Si hizo login! :)")
                    })
                    .catch(err => {
                        alertService.error("Asegurate de escribir bien tu email o contraseña")
                    })
                */
            }
        }
    }
    
    </script>
    
    <style>
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

    body,html {
    margin: 0;
    padding: 0;
    
    }

    .body {
    font-family: 'Source Sans Pro', sans-serif;
    background: url("/static/back.png");
    }
    </style>