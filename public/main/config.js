(function () {
    angular
        .module('huskyhunter')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html'
            })
            .when('/addClue', {
                templateUrl: 'headquarters/templates/addClue.html',
                controller: 'controlController',
                controllerAs: 'model'
            })
            .when('/list',{
                templateUrl: 'headquarters/templates/listOfClues.html',
                controller: 'controlController',
                controllerAs: 'model'
            })
            .when('/settings', {
                templateUrl: 'headquarters/templates/settings.html',
                controller: 'controlController',
                controllerAs: 'model'
            })

            .when('/field', {
                templateUrl: 'field/templates/field-main.html',
                controller: 'controlController',
                controllerAs: 'model'
            })

            .when('/submit/:setNumber/:clueNumber', {
                templateUrl: 'field/templates/submit.html',
                controller: 'uploadController',
                controllerAs: 'model'
            })
    }
})();