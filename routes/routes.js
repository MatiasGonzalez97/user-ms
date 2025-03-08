const { Router } = require("express");
const route = Router();
const healthController = require('../controller/health')
const userController = require('../controller/user')
route.use('/health', healthController)
route.use('/user', userController)
module.exports = route;
