var mongoose = require('mongoose');
var controlSchema = require('./control.schema.server');
var controlModel = mongoose.model('ControlModel', controlSchema);

controlModel.submitClue = submitClue;
controlModel.getClues = getClues;
controlModel.deleteClue = deleteClue;
controlModel.updateClue = updateClue;
module.exports = controlModel;
function submitClue(clue) {
    console.log('model, creating clue: '+clue);
    return controlModel.create(clue);
}

function getClues(){
    console.log('finding all clues');
    return controlModel.find();
}

function deleteClue(clueId){
    console.log('deleting clue with id: '+clueId);
    return controlModel.remove({_id: clueId});
}

function updateClue(clue){
    return controlModel.update({_id: clue._id}, {$set: clue});
}