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
        function submitClue(number, setNo, mapData, locationName, additionalNotes) {
            var url = "/api/submitClue";
            var clueData = {
                number: number,
                setNo: setNo,
                mapData: mapData,
                locationName: locationName,
                additionalNotes: additionalNotes
            };
            console.log('request: '+ JSON.stringify(clueData));
            return $http.post(url, clueData)
                .then(function (response) {
                    console.log('client response: '+response.data);
                    return response.data;
                },function(err){
                    return err.data;
                });
        }

        function getClues(){
            var url = '/api/getClues';
            return $http.get(url)
                .then(function(response){
                    return response.data;
                })

        }
    }
})();