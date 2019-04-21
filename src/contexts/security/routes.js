const router = require('express').Router();

const securityController = require('./controllers/securityController');

router.get('/status', securityController.status);

module.exports = router;