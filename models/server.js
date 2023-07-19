
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        //Invoca a express
        this.app = express();
        //El puerto queda como variable de entorno
        this.port = process.env.PORT || 8080;
        this.authPath = '/api/auth';
        this.usuariosPath = '/api/usuarios';
        //Conectar base de datos
        this.conectarDB();
        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //Siempre es importante configurar el cross
        this.app.use( cors() );
        //Lectura y parseo del body
        this.app.use( express.json() );
        //Servir la carpeta publica
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        this.app.use(this.authPath, require('../routes/auth'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port );
        });
    }

}

module.exports = Server;