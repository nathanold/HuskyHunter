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
            .when('/field1', {
                templateUrl: 'field/templates/field-team-1.html',
                controller: 'controlController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/field2', {
                templateUrl: 'field/templates/field-team-2.html',
                controller: 'controlController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/field3', {
                templateUrl: 'field/templates/field-team-3.html',
                controller: 'controlController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/unassigned', {
                templateUrl: 'field/templates/unassigned.html',
                controller: 'controlController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/rawClues', {
                templateUrl: 'field/templates/rawClues.html',
                controller: 'controlController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/completedTasks', {
                templateUrl: 'field/templates/completedTasks.html',
                controller: 'controlController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/download', {
                templateUrl: 'field/templates/field-team-1.html',
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

            .when('/faq', {
                templateUrl: 'headquarters/templates/FAQ.html',
                controller: 'userController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/discord', {
                templateUrl: 'headquarters/templates/discord.html',
                controller: 'controlController',
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