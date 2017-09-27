(function () {
    angular
        .module('huskyhunt')
        .controller('controlController', controlController);

    function controlController($routeParams, $scope) {
        var model = this;
        model.sets = "OK";
        $scope.sets = ['A','B','C'];

    }
})();