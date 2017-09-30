var app = require('../../../express');
var controlModel = require('../models/control.model.server');
app.post('/api/submitClue', submitClue);
app.get('/api/getClues', getClues);
app.delete('/api/:clueId', deleteClue);
app.put('/api/update', updateClue);
console.log('control server');
function submitClue(req, res) {
    var clue = req.body;
    console.log('server ' + req.body);
    controlModel
        .submitClue(clue)
        .then(function (clue) {
            res.send(clue);
        }, function (err) {
            res.send(err);
        });
}

function getClues(req, res) {
    console.log('server service getting clues');
    controlModel
        .getClues()
        .then(function (clues) {
                res.json(clues);
            },
            function (err) {
                res.send(err);
            })
}

function deleteClue(req, res) {
    var clueId = req.params.clueId;
    controlModel
        .deleteClue(clueId)
        .then(function () {
            res.sendStatus(200);
        }, function (err) {
            res.send(err);
        });
}

function updateClue(req, res){
    var clue = req.body;
    controlModel
        .updateClue(clue)
        .then(function (clue) {
            res.json(clue);
        }, function (err) {
            res.send(err);
        });
}