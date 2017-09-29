var mongoose = require('mongoose');
var controlSchema = require('./control.schema.server');
var controlModel = mongoose.model('ControlModel', controlSchema);

controlModel.submitClue = submitClue;

module.exports = controlModel;
function submitClue(clue) {
    return controlModel.create(clue);
}