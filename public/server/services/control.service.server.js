var app = require('../../../express');
var controlModel = require('../models/control.model.server');
app.post('/api/submitClue', submitClue);

function submitClue(req, res) {
    var clue = req.clue;
    console.log(clue);
    controlModel
        .submitClue(clue)
        .then(function (clue) {
            res.send(clue);
        }, function (err) {
            res.send(err);
        });
}