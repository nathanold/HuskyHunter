var mongoose = require('mongoose');
var controlSchema = require('./control.schema.server');
var controlModel = mongoose.model('ControlModel', controlSchema);

controlModel.submitClue = submitClue;
controlModel.getClues = getClues;
module.exports = controlModel;
function submitClue(clue) {
    console.log('model, creating clue: '+clue);
    return controlModel.create(clue);
}

function getClues(){
    console.log('finding all clues');
    return controlModel.find();
}