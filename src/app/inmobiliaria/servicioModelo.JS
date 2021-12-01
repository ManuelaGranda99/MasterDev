const express = require("express");
const { createReadStream } = require('fs')
var modelo = require('./usuarios')
var modeloUbicacion = require('./ubicacion');
var modeloInmueble = require('./Inmuebles');
var cors = require('cors');

const app = new express();
const HTML_CONTENT_TYPE = 'text/html'
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("public")); // direccion de los archivos a los cuales 

const path = require("path");

require('./conexion_bd') // solicita la conexion a la base de datos en Mongo


app.put("/registrarInmueble", (req, res) => {
    console.log("inmuebele registrado");
    const respuesta = {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        barrio: req.body.barrio,
        transaccion: req.body.transaccion,
        area: req.body.area,
        banios: req.body.banios,
        habitaciones: req.body.habitaciones,
        estrato: req.body.estrato,
        precio: req.body.precio
    }
    modeloInmueble.collection.insertOne(respuesta, function(err, res) {
        if (err) throw err;
    })
    res.send(JSON.stringify(respuesta))
});

app.put("/registrarUsuario", (req, res) => {
    console.log("usuario registrado");
    const respuesta = {
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        celular: req.body.celular,
        user: req.body.user,
        clave: req.body.clave
    }
    modelo.collection.insertOne(respuesta, function(err, res) {
        if (err) throw err;
    })
    res.send(JSON.stringify(respuesta))
});

app.put("/registrarUbicacion", (req, res) => {
    console.log("Ubicacion registrada");
    const respuesta = {
        zona: req.body.Zona,
        barrio: req.body.Barrio
    }
    modeloUbicacion.collection.insertOne(respuesta, function(err, res) {
        if (err) throw err;
    })
    res.send(JSON.stringify(respuesta))
});

//////////////////////////////////////////////////////////////////////////

app.post("/upload", (req, res) => {
        var myobj = {
            cedula: req.body.cedula,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            celular: req.body.celular,
            user: req.body.user,
            clave: req.body.clave
        };
        modelo.collection.insertOne(myobj, function(err, res) {
            if (err) throw err;

        })
        res.send("upload documento guardado con exito")
    })
    ///////insertar ubicacion

app.post("/insertarUbicacion", (req, res) => {

    var myobj = { zona: req.body.Zona, barrio: req.body.Barrio };
    modeloUbicacion.collection.insertOne(myobj, function(err, res) {
        if (err) throw err;

    });
    res.send("ubicacion guardada con exito");
});

app.post("/insertarInmueble", (req, res) => {

    modeloUbicacion.find({ barrio: req.body.Barrio }, (err, docs) => {
        var myobj = {
            nombre: req.body.Nombre,
            tipo: req.body.Tipo,
            imagen: 'req.body.Imagen  va una imagen',
            ubicacion: docs[0]._id,
            Transaccion: req.body.Transaccion,
            Area: req.body.Area,
            Banios: req.body.Banios,
            habitaciones: req.body.habitaciones,
            Estrato: req.body.Estrato,
            Precio: req.body.Precio,
            Descripcion: 'req.body.Descripcion va la descrip.'
        };
        modeloInmueble.collection.insertOne(myobj, function(err, res) {
            if (err) throw err;
        });
        console.log(docs[0]._id)
    });

    res.send("inmueble documento guardado con exito")

});

app.get("/consulta", (req, res) => {
    console.log("econectado -----S");
    // res.send("ubicacion guardada con exito");
    const datos = {
        nombre: "Peter",
        apellido: "Perea"
    }
    res.end(JSON.stringify(datos));
    console.log(JSON.stringify(datos))
});

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
    createReadStream('./index.html').pipe(res)
        //res.end("hola mundo");
});

app.listen(900, () => {

    console.log("aplicacion corriendo en el puerto 900");

});