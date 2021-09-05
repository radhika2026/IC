const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controller')
route.get('/', services.homeRoutes);
route.get('/regStudent', services.regStudent);
route.get('/regParents', services.regParents);
route.get('/login', services.login);


route.post('/api/student', controller.createStudent);
route.post('/api/parents', controller.createParents);

module.exports = route
