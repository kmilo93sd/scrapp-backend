const router = require('express').Router();

const securityController = require('./controllers/securityController');

router.get('/status', securityController.status);

router.post('/signup', securityController.signUp);

module.exports = router;