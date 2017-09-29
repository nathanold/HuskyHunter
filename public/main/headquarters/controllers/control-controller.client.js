(function () {
    angular
        .module('huskyhunter')
        .controller('controlController', controlController);

    function controlController($routeParams, controlService) {
        var model = this;
        model.sets = "OK";

        model.submitClue = function(number, setNo, locationName, additionalNotes){
            var clue = {
                number: number,
                setNo: setNo,
                locationName: locationName,
                additionalNotes: additionalNotes
            };
            console.log(clue);
            controlService
                .submitClue(clue)
                .then(function(user){
                    $location.url('/#!');
                });
        }
    }
})();