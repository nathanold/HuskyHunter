(function () {
    angular
        .module('huskyhunter')
        .controller('controlController', controlController);

    function controlController($routeParams, controlService, $location, $scope, userService, currentUser) {
        var model = this;
        model.sets = "OK";
        model.selectedRole = currentUser.roles[0];
        model.roles = ["TEAM1", "TEAM2", "TEAM3", "HQ"];
        model.user = currentUser;
        function init() {
            console.log('finding all clues');
            controlService
                .getClues()
                .then(renderClues);
        }

        function renderClues(clues) {
            model.clues = clues;
            console.log(model.clues);
        }

        init();

        model.submitClue = function (number, setNo, mapData, locationName, additionalNotes, assignedTo) {
            var clue = {
                number: number,
                setNo: setNo,
                mapData: mapData,
                locationName: locationName,
                additionalNotes: additionalNotes,
                completed: false,
                assignedTo: assignedTo
            };

            console.log("clue: " + clue);
            controlService
                .submitClue(clue)
                .then(function () {
                        $location.url('/home');
                    },
                    function (err) {
                        console.log(err);
                    });

            model.result = clue;
            //$scope.arr.push(clue);
        };

        model.deleteClue = function (clueId) {
            console.log('delete clue');
            controlService.deleteClue(clueId)
                .then(function () {
                    location.reload();
                })
        };

        model.updateClue = function (clue) {
            controlService.updateClue(clue)
                .then(function () {
                    location.reload();
                })
        };

        model.markComplete = function (clue) {
            console.log('marking ' + clue._id + " complete");
            controlService.markComplete(clue)
                .then(function () {
                    location.reload();
                })
        };

        model.changeRole = function (user) {
            var e = document.getElementById("changeTeam");
            var strUser = e.options[e.selectedIndex].text;
            console.log("controller user: " + user);
            userService
                .changeRole(user, strUser)
                .then(function () {
                    $location.url('/home')
                });
        }

    }
})();