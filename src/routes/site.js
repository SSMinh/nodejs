const express = require('express');
const router = express.Router();
const SiteControllers = require('../app/controllers/SiteControlles');

router.use('/search', SiteControllers.search);
 router.use('/', SiteControllers.index);

module.exports = router;
