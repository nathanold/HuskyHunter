(function () {
    angular
        .module('huskyhunt')
        .controller('fieldController', fieldController);

    function fieldController($routeParams, $scope) {
        var model = this;
        model.sets = "OK";
        $scope.sets = ['A','B','C'];

    }
})();