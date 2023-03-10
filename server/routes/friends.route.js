const express = require('express');
const Router = express.Router();
const { addFriendsController, getFriendsController} = require('../controllers/friends.controller');

Router.route('/addfriend').post(addFriendsController);
Router.route('/getfriends/:id').get(getFriendsController);


module.exports = Router;