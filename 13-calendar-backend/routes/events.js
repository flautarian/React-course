/* 
    Event routes
    host + /api/event
 */

const { Router } = require('express');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJwt } = require('../middlewares/validate-jwt');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { isDate } = require('../helpers/isDate');
const router = Router();

// validate all requests by middleware
router.use(validateJwt);

router.get('/', getEvents);
router.post('/', [
    check('title', 'Title is mandatory').not().isEmpty(),
    check('start', 'start is mandatory').custom(isDate),
    check('end', 'start is mandatory').custom(isDate),
    validateFields
],
    createEvent);
router.put('/:id', validateJwt, updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;