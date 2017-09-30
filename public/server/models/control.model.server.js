var mongoose = require('mongoose');
var controlSchema = require('./control.schema.server');
var controlModel = mongoose.model('ControlModel', controlSchema);

controlModel.submitClue = submitClue;
controlModel.getClues = getClues;
controlModel.deleteClue = deleteClue;
controlModel.updateClue = updateClue;
controlModel.markComplete = markComplete;
module.exports = controlModel;

function submitClue(clue) {
    return controlModel.create(clue);
}

function getClues(){
    return controlModel.find();
}

function deleteClue(clueId){
    return controlModel.remove({_id: clueId});
}

function updateClue(clue){
    return controlModel.update({_id: clue._id}, {$set: clue});
}

function markComplete(clueId,clue){
    var updatedClue = clue;
    updatedClue.completed = true;
    return controlModel.update({_id: clueId}, {$set: updatedClue});
}