
const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const validarJwt = async ( req = request, res = response, next ) => {
    const token = req.header('x-token');
    if( !token ){
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        });
    }
    try{
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        const usuario = await Usuario.findById( uid );
        //verifica si usuario existe en la bd
        if( !usuario ){
            return res.status(401).json({
                msg: 'Token no valido'
            });
        }
        //verifica si el usuario que ejecuta esta invalido
        if( !usuario.estado ){
            return res.status(401).json({
                msg: 'Token no valido'
            });
        }
        req.usuario = usuario;
        next();
    }catch( error ){
        console.log( error );
        res.status(401).json({
            msg: 'Token no válido'
        });
    }
}

module.exports = {
    validarJwt
}