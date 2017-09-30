(function () {
    angular
        .module('huskyhunter')
        .controller('uploadController', uploadController);

    function uploadController($routeParams, $location, $scope) {
        var model = this;
        model.setNumber = $routeParams.setNumber;
        model.clueNumber = $routeParams.clueNumber;


    }
})();