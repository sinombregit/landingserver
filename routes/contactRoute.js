const {Router} =require('express')
const {check} =require('express-validator')
const { createContact} =require('../controllers/contactService')
const {validator} =require('../middleware/validator')

const router=Router()


router.post('/',
    [
        check('namePerson', 'nombre es obligatorio').not().isEmpty(),
        check('namePerson', 'nombre no debe exceder los 85 caracteres').isLength({max:85}),
        check('email', 'el email es obligatorio').isEmail(),
        check('email', 'email no debe exceder los 45 caracteres').isLength({max:45}),
        check('comment', 'nombre es obligatorio').isLength({max:250}),
        validator 
    ]
    , createContact)

module.exports=router