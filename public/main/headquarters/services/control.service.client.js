(function () {
    angular
        .module('huskyhunter')
        .factory('controlService', controlService);

    function controlService($http) {
        var api = {
            submitClue: submitClue,
            getClues: getClues
        };
        return api;
        function submitClue(clue) {
            var url = "/api/submitClue";

            console.log('request: '+ JSON.stringify(clue));
            return $http.post(url, clue)
                .then(function (response) {
                    console.log('client response: '+response.data);
                    return response.data;
                },function(err){
                    return err.data;
                });
        }

        function getClues(){
            var url = '/api/getClues';
            console.log(url);
            return $http.get(url)
                .then(function(response){
                    return response.data;
                })

        }
    }
})();