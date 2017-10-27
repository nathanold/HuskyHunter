(function () {
    angular
        .module('huskyhunter')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'login.html',
                controller: 'userController',
                controllerAs: 'model'
            })
            .when('/addClue', {
                templateUrl: 'headquarters/templates/addClue.html',
                controller: 'controlController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/list',{
                templateUrl: 'headquarters/templates/listOfClues.html',
                controller: 'controlController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkAdmin
                }
            })
            .when('/settings', {
                templateUrl: 'headquarters/templates/settings.html',
                controller: 'controlController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/home', {
                templateUrl: 'home.html',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/field', {
                templateUrl: 'field/templates/field-main.html',
                controller: 'controlController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/download', {
                templateUrl: 'field/templates/field-main.html',
                controller: 'controlController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/submit/:setNumber/:clueNumber', {
                templateUrl: 'field/templates/submit.html',
                controller: 'uploadController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
    }

    function checkLoggedIn($q, $location, userService) {
        var deferred = $q.defer();
        userService.checkLoggedIn()
            .then(function (currentUser) {
                console.log('current user ' + JSON.stringify(currentUser));
                if (currentUser === '0') {
                    deferred.reject();
                    $location.url('/')
                } else {
                    deferred.resolve(currentUser);
                }
            });
        return deferred.promise;
    }

    function checkCurrentUser($q, $location, userService) {
        var deferred = $q.defer();
        userService.checkLoggedIn()
            .then(function (currentUser) {
                console.log('current user ' + currentUser);

                if (currentUser === '0') {
                    deferred.resolve({});
                } else {
                    deferred.resolve(currentUser);
                }
            });
        return deferred.promise;
    }

    function checkAdmin($q, $location, userService) {
        var deferred = $q.defer();
        userService.checkAdmin()
            .then(function (currentUser) {
                console.log('current user ' + currentUser);
                if (currentUser === '0') {
                    deferred.resolve({});
                    $location.url('/');
                } else {
                    deferred.resolve(currentUser);
                }
            });
        return deferred.promise;
    }


})();