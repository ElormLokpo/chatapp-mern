const express = require('express');
const Router = express.Router();
const {registerUserController,loginUserController} = require('../controllers/user.controller');

Router.route('/register').post(registerUserController);
Router.route('/login').post(loginUserController);


module.exports = Router;
