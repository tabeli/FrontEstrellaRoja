var express = require('express'); //Librería que te permite montar el server en js
var bodyParser = require('body-parser'); //Librería que te permite parsear datos a json
var Sequelize = require('sequelize'); //Permite hacer una conexión a la base de datos
//var bcrypt = require('bcryptjs'); //Para los tokens
var cors = require('cors');

//Parametros para conexion con base de datos
var database = 'er';
var user = 'root';
var password = 'mysql';
var host = 'localhost';
var dbType = 'mysql';

//Creacion de instancia que se va a conectar a la base de datos
var sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: dbType,
    dialectOptions: {
        multipleStatements: true
    }
})

// Conexion a la base de datos
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexion establecida exitosamente');
    }).catch(err => {
        console.error('No se pudo realizar la conexión', err);
    });

//Instancia del server
var app = express();
//Configura el server para que pueda parsear json's
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    console.log("called /")
    return res.json({
        "response": "Hola Equipo azul"
    });
})

//Definicion de rutas
app.get('/user', function (req, res) {
    console.log("called /user man users")
    return sequelize.query("select * from user").spread((results, metadata) => {
        res.json(results);
    })
})

app.get('/user/:id', function (req, res) {
    console.log("called /one user")
    return sequelize.query("select * from user where id =" + req.params.id).spread((results, metadata) => {
        res.json(results);
    })
})


app.delete('/user', function (req, res) {
    console.log("called / delete user")
    return sequelize.query("delete from user where user.id = " + req.body.id, { type: sequelize.QueryTypes.DELETE })
        .then(resultado => res.status(201).send({ "result": "ok" }))
        .catch(error => res.status(400).send(error))
})

app.put('/user', function (req, res) {
    console.log("called / edit user")
    var identificador = req.body.id;
    var tipo = req.body.user_type;
    var nombre = req.body.name;
    var apellido = req.body.last_name;
    var correo = req.body.email;
    var cumple = req.body.birthdate;
    var pwd = req.body.password;
    var cp = req.body.postal_code;
    var cel = req.body.phone_number;

    var sql = "update user set user_type = ('" + tipo + "'), name = ('" + nombre + "'), last_name = ('" + apellido + "'), email = ('" + correo + "'), birthdate = ('" + cumple + "'), password = ('" + pwd + "'), postal_code = ('" + cp + "'), phone_number = ('" + cel + "') where user.id =" + identificador;

    return sequelize.query(sql, { type: sequelize.QueryTypes.UPDATE })
        .then(resultado => res.status(201).send(resultado))
        .catch(error => res.status(400).send(error))
})

app.post('/user', function (req, res) {
    console.log("called / create user")
    var tipo = req.body.user_type;
    var nombre = req.body.name;
    var apellido = req.body.last_name;
    var correo = req.body.email;
    var cumple = req.body.birthdate;
    var pwd = req.body.password;
    var cp = req.body.postal_code;
    var cel = req.body.phone_number;

    var sql = "insert into user(user_type,name,last_name,email,birthdate,password,postal_code,phone_number) values ('" + tipo + "',  '" + nombre + "', '" + apellido + "', '" + correo + "', '" + cumple + "', '" + pwd + "', '" + cp + "', '" + cel + "')";

    return sequelize.query(sql, { type: sequelize.QueryTypes.INSERT })
        .then(resultado => res.status(201).send(resultado))
        .catch(error => res.status(400).send(error))
})

app.listen(8080);
console.log('Escuchando en puerto 8080')