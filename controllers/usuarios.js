
const { response,request } = require('express'); 

const usuariosGet = ( req = request, res = response ) => {
    const { q, nombre = 'No name', apikey} = req.query;
    res.json({
        msg: 'Get API - Controlador',
        q,
        nombre, 
        apikey
    });
};
const usuariosPost = (req = request, res = response ) => {
    //se debe limpiar para que no se ejecuten otro tipo de cosas como scripts, etc
    const { nombre, edad } = req.body;
    res.json({
        msg: 'Post API - Controlador',
        nombre,
        edad
    });
};
const usuariosPut = ( req = request, res = response ) => {
    const { id } = req.params;
    res.json({
        msg: 'Put API - Controlador',
        id
    });
};
const usuariosPatch = ( req = request, res = response ) => {
    res.json({
        msg: 'Patch API - Controlador'
    });
};
const usuariosDelete = ( req = request, res = response ) => {
    res.json({
        msg: 'Delete API - Controlador'
    });
};


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}