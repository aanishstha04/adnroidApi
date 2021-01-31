
const express = require('express');
const {getStudent} = require("../controllers/student");
const {createStudent} = require("../controllers/student");


const router = express.Router();


router.post('/student/create', createStudent);

// router.get('/student/get', getStudent);
module.exports = router;