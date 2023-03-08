const express = require('express');
const Router = express.Router();
const {registerUserController,loginUserController} = require('../controllers/user.controller');
const {getUsersController} = require('../controllers/getusers.controller');

Router.route('/register').post(registerUserController);
Router.route('/login').post(loginUserController);
Router.route('/users').get(getUsersController);


module.exports = Router;
