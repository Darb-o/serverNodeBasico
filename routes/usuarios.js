
const { Router } = require('express');
const { check } = require('express-validator');

const { usuariosGet,usuariosPost,usuariosPatch, 
    usuariosPut, usuariosDelete } = require('../controllers/usuarios');

const { validarCampos, validarJwt, 
    estadoAdmin, tieneRole} = require('../middlewares');    

const { rolValido,emailExiste,usuarioExistePorId } = require('../helpers/db_validators');


//Donde se configuran las rutas
const router = Router();

router.get('/', usuariosGet);

router.put('/:id', [
    check('id','No es un ID válido').isMongoId(),
    check('id').custom( usuarioExistePorId ),
    check('rol').custom( rolValido ),
    validarCampos
] ,usuariosPut);

router.post('/',[
    check('correo','El correo no es valido').isEmail().custom( emailExiste ),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','La contraseña debe ser más de 6 letras').isLength({min:6}),
    check('rol').custom( rolValido ),
    validarCampos
],usuariosPost);

router.delete('/:id',[
    validarJwt,
    tieneRole('ADMIN_ROLE','VENTAS_ROLE'),
    check('id','No es un ID válido').isMongoId(),
    check('id').custom( usuarioExistePorId ),
    validarCampos
], usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;
