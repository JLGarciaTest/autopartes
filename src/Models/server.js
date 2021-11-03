//const { findRenderedDOMComponentWithClass } = require("react-dom/test-utils");
import { Express } from 'express';
import {response} from  'express'; 
const express = require('express');
const cors = require('cors');

class Server {
    constructor (){
        this.app = express();
        this.port=process.env.port;
        this.usuariospath='/api/usuarios'

        //middlewares
        this.middlewares()
        //this.app.use(express.json())
        
        //routes
        this.routes();


        
    }
    routes(){
        this.app.use(this.usuariospath, require('../Routes/Usuarios'));
    }
    middlewares(){
        //CORS
        this.app(cors());
        //lectura y parseo
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }
    listen (){
        this.app.listen(this.port,()=>{
            console.log("Servidor conectado");
        })
    }
}
module.exports = Server;