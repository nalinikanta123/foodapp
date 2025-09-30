const express = require('express');
const {testController }= require('../controllers/testController.js');  

const router = express.Router();

router.get('/test', testController);

module.exports = router;