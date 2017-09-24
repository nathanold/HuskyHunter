(function () {
    angular
        .module('huskyhunter')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html'
            })
            .when('/control', {
                templateUrl: 'control/templates/control-main.html',
                controller: 'controlController',
                controllerAs: 'model'
            })
            .when('/field', {
                templateUrl: 'field/templates/field-main.html'
            })
    }
})();