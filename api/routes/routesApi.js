const express = require('express');
const router = express.Router();
const { ListResources } = require('../resources');

router.use('/notes', ListResources);

module.exports = router;