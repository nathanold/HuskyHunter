(function () {
    angular
        .module('huskyhunter')
        .controller('teamController', teamController);

    function teamController($routeParams, userService, currentUser) {
        var model = this;

        function init() {
            userService
                .findAllUsers()
                .then(renderClues);
        }

        function renderClues(clues) {
            model.teams = clues;
            console.log(model.teams);
        }

        init();
    }
})();