(function () {
    angular
        .module('huskyhunter')
        .controller('uploadController', uploadController);

    function uploadController($routeParams, $location, $scope) {
        var model = this;
        model.setNumber = $routeParams.setNumber;
        model.clueNumber = $routeParams.clueNumber;
        model.apiUrl = "/api/upload/" + model.setNumber + "/" + model.clueNumber;
        console.log("set number" + model.setNumber);
        console.log("clue number" + model.clueNumber);
        console.log("submit " + model.apiUrl);
    }
})();