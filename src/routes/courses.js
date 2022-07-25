const express = require('express');
const router = express.Router();
const CoursesControlles = require('../app/controllers/CoursesControlles');

router.get('/create', CoursesControlles.create);
router.post('/store', CoursesControlles.store);
router.get('/:slug', CoursesControlles.show);

module.exports = router;
