const {Router} =require('express');
const {usuariosGet,
usuariosPost,
usuariosDelete,
usuariosPut
}=require('../Controllers/usuarios')

const router =Router();
router.get('/',usuariosGet)
router.post('/',usuariosPost)
router.delete('/:id',usuariosDelete) //actualizar
router.put('/:id',usuariosPut)
module.exports=router;
