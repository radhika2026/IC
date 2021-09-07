const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controller')
route.get('/', services.homeRoutes);
route.get('/regStudent', services.regStudent);
route.get('/regParents', services.regParents);
route.get('/loginStudent', services.loginStudent);
route.get('/loginParents', services.loginParents);

route.post('/api/student', controller.createStudent);
route.post('/api/parents', controller.createParents);
route.post('/api/loginStudent', controller.loginStudent);
route.post('/api/loginParents', controller.loginParents);
route.get('api/findParents', controller.findParents);
module.exports = route
