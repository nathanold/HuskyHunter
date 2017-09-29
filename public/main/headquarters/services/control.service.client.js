(function () {
    angular
        .module('huskyhunter')
        .factory('controlService', controlService);

    function controlService($http) {
        var api = {
            submitClue: submitClue
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
            return $http.post(url, clueData)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();