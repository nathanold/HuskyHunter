var app = require('../../../express');
var controlModel = require('../models/control.model.server');
app.post('/api/submitClue', submitClue);
app.get('/api/getClues', getClues);
function submitClue(req, res) {
    var clue = req.clue;
    console.log('server '+clue);
    controlModel
        .submitClue(clue)
        .then(function (clue) {
            res.send(clue);
        }, function (err) {
            res.send(err);
        });
}

function getClues(req, res){
    controlModel
        .getClues()
        .then(function(response){
            res.send(response);
        },
        function(err){
            res.send(err);
        })
}