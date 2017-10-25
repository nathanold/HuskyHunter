var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);

userModel.findUserById = findUserById;
userModel.findAllUsers = findAllUsers;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
module.exports = userModel;
function findUserById(userId){
    return userModel.findById(userId);
}

function findAllUsers(){
    return userModel.find();
}

function findUserByUsername(username) {
    console.log('find by username in model: '+username);
    return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
}
