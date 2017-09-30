(function () {
    angular
        .module('huskyhunter')
        .factory('controlService', controlService);

    function controlService($http) {
        var api = {
            submitClue: submitClue,
            getClues: getClues,
            deleteClue: deleteClue,
            updateClue: updateClue,
            markComplete: markComplete
        };
        return api;
        function submitClue(clue) {
            var url = "/api/submitClue";

            console.log('request: ' + JSON.stringify(clue));
            return $http.post(url, clue)
                .then(function (response) {
                    console.log('client response: ' + response.data);
                    return response.data;
                }, function (err) {
                    return err.data;
                });
        }

        function getClues() {
            var url = '/api/getClues';
            console.log(url);
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })

        }

        function deleteClue(clueId) {
            var url = '/api/' + clueId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function updateClue(clue) {
            var url = '/api/update';
            return $http.put(url, clue)
                .then(function (response) {
                    return response.data;
                });
        }

        function markComplete(clue){
            var url = '/api/complete/'+clue._id;
            console.log(url);
            return $http.put(url, clue)
                .then(function(response){
                    return response.data;
                })
        }
    }
})();