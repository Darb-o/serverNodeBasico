
const { Router } = require('express');
const { usuariosGet,usuariosPost,usuariosPatch, 
    usuariosPut, usuariosDelete } = require('../controllers/usuarios');

//Donde se configuran las rutas
const router = Router();

router.get('/', usuariosGet);
router.put('/:id', usuariosPut);
router.post('/', usuariosPost);
router.patch('/', usuariosPatch);
router.delete('/', usuariosDelete);

module.exports = router;
