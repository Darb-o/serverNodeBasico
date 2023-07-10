
const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        //Invoca a express
        this.app = express();
        //El puerto queda como variable de entorno
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';
        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
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
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port );
        });
    }

}

module.exports = Server;
