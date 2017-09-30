(function () {
    angular
        .module('huskyhunter')
        .controller('controlController', controlController);

    function controlController($routeParams, controlService, $location, $scope) {

        var model = this;
        model.sets = "OK";

        function init() {
            console.log('finding all clues');
            controlService
                .getClues()
                .then(renderClues);
        }




        function renderClues(clues) {
            model.clues = clues;
            console.log(model.clues);
        }

        init();

        model.submitClue = function(number, setNo, mapData, locationName, additionalNotes, assignedTo){
            var clue = {
                number: number,
                setNo: setNo,
                mapData: mapData,
                locationName: locationName,
                additionalNotes: additionalNotes,
                completed: false,
                assignedTo: assignedTo
            };

            console.log("clue: " + clue);
            controlService
                .submitClue(clue)
                .then(function(){
                    $location.url('/#!');
                },
                function(err){
                    console.log(err);
                });

            model.result = clue;
            //$scope.arr.push(clue);
        };

        model.deleteClue = function(clueId){
            console.log('delet clue');
            controlService.deleteClue(clueId)
                .then(function () {
                    location.reload();
                })
        };

        model.updateClue = function(clue){
            controlService.updateClue(clue)
                .then(function(){
                    location.reload();
                })
        };

        model.markComplete = function(clue){
            console.log('marking '+clue._id+ " complete");
            controlService.markComplete(clue)
                .then(function(){
                    location.reload();
                })
        }
    }
})();