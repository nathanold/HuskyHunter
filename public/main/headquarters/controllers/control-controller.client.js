(function () {
    angular
        .module('huskyhunter')
        .controller('controlController', controlController);

    function controlController($routeParams, controlService, $location) {
        var model = this;
        model.sets = "OK";

        model.submitClue = function(number, setNo, mapData, locationName, additionalNotes){
            var clue = {
                number: number,
                setNo: setNo,
                mapData: mapData,
                locationName: locationName,
                additionalNotes: additionalNotes

            };

            console.log(clue);
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

        model.getClues = function(){
            controlService
                .getClues()
                .then(function(response){
                    console.log('this is the data: '+response.data);
                    return response.data;
                })
        }
    }
})();