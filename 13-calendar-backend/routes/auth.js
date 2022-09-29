/* 
    Auth routes
    host + /api/auth
 */
const { Router } = require('express');
const { createUser, loginUser, renewUser } = require('../controllers/auth');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJwt } = require('../middlewares/validate-jwt');
const router = Router();

router.post(
    '/new',
    [
        check('name', 'The name is mandatory').not().isEmpty(),
        check('email', 'The email is mandatory').isEmail().not().isEmpty(),
        check('password', 'The password is mandatory and be at least 6 characters').isLength({ min: 6 }).not().isEmpty(),
        validateFields
    ],
    createUser);

router.post('/login',
    [
        check('email', 'The email is mandatory').isEmail().not().isEmpty(),
        check('password', 'The password is mandatory and be at least 6 characters').isLength({ min: 6 }).not().isEmpty(),
        validateFields
    ],
    loginUser);

router.get('/renew', validateJwt, renewUser);


module.exports = router;