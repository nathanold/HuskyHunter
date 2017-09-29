(function () {
    angular
        .module('huskyhunter')
        .factory('controlService', controlService);

    function controlService($http) {
        var api = {
            submitClue: submitClue
        };
        return api;
        function submitClue(number, setNo, locationName, additionalNotes) {
            var url = "/api/submitClue";
            var clueData = {
                number: number,
                setNo: setNo,
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