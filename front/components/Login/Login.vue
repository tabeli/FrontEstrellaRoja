    <template>
        <form class="form" @submit.prevent="login()">
            <div class="container text-center mt-5">
                <div class="form-group">
                <h2>Iniciar sesion</h2>
                <br>
                <br>
                    <label for="usr">Email:</label>
                    <input type="text" class="form-control" id="email" v-model="email" placeholder="Admin Users Only">
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
        //funcion de data
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            //funcion de tour
            login() {
                axios.post('https://adsoft-01.appspot.com/api/auth/login', {
                    email: this.email,
                    password: this.password
                })
                .then(function (response) {
                    //if(response.user_type == 'administrator')
                        this.$router.push({ name: "mapa"});
                   // else
                     //   alertService.error("Verifique su email o contraseña")
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