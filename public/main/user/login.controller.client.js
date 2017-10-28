(function () {
    angular
        .module('huskyhunter')
        .controller('userController', userController);

    function userController($routeParams, userService, $location, $scope) {

        var model = this;
        $scope.firstName = "person";

        model.login = function (username, password) {

            $scope.firstName = username;

            if (!username) {
                model.message = "Username is required, please try again";
                return;
            }
            if (!password) {
                model.message = "Password is required, please try again";
                return;
            }
            userService
                .login(username, password)
                .then(login, handleError);

            function handleError(error) {
                model.message = "Username " + username + " not found, please try again";
            }

            function login(found) {
                console.log("loggin in login controller client")
                if (found !== null) {
                    console.log("this was found: "+found);
                    $location.url('/home');
                } else {
                    model.message = "Username " + username + " not found, please try again";
                }
            }
        };

    }
})();