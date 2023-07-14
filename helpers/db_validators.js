const Role = require('../models/role');
const usuario = require('../models/usuario');

const rolValido = async( rol = '' ) => {
    const existeRol = await Role.findOne({ rol:rol });
    if( !existeRol ){
        throw new Error(`El rol ${ rol } no esta registrado en la BD`);
    }
}

const emailExiste = async( correo = '' ) => {
    const existeEmail = await usuario.findOne( { correo:correo } );
    if( existeEmail ){
        throw new Error(`El correo ${ correo} ya esta registrado`);
    }
}

const usuarioExistePorId = async( id ) => {
    const existeId = await usuario.findById( id );
    if( !existeId ){
        throw new Error(`El id ${ id } no existe en la BD`);
    }
}

module.exports = {
    rolValido,
    emailExiste,
    usuarioExistePorId
}