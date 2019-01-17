const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/test', controller.test);
router.post('/create',controller.create);
router.get('/find',controller.read);
router.put('/update',controller.update);
router.delete('/delete',controller.delete);
module.exports = router;