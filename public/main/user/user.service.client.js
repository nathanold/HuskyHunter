(function () {
    angular
        .module('huskyhunter')
        .factory('userService', userService);

    function userService($http) {
        var api = {
            findUserById: findUserById,
            changeRole: changeRole,
            findUserByCredentials: findUserByCredentials,
            findUserByUsername: findUserByUsername,
            findAllUsers: findAllUsers,
            login: login,
            logout: logout,
            checkLoggedIn: checkLoggedIn,
            checkAdmin: checkAdmin
        };
        return api;

        function logout() {
            var url = "/api/logout";
            return $http.post(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function checkLoggedIn() {
            var url = "/api/checkLoggedIn";
            console.log('is the user logged in?');
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }


        function checkAdmin() {
            var url = "/api/checkAdmin";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function changeRole(user, role){
            var url = "/api/user/" + role;
            console.log(url);
            return $http.put(url, user)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserByUsername(username) {
            var url = '/api/user/username/' + username;
            console.log(url);
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllUsers() {
            var url = '/api/users';
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserById(userId) {
            var url = "/api/user/" + userId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserByCredentials(username, password) {
            var url = "/api/user/username/" + username + "/password/" + password;
            console.log(url);
            return $http.get(url)
                .then(function (response) {
                    console.log('response:' + response.data);
                    return response.data;
                });
        }

        function login(username, password) {
            var url = "/api/login";


            var credentials = {
                username: username,
                password: password
            };
            console.log('user client side service loggin in');
            return $http.post(url, credentials)
                .then(function (response) {
                    console.log('response from server: '+JSON.stringify(response.data));
                    return response.data;
                });
        }
    }
})();