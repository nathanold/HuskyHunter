(function () {
    angular
        .module('huskyhunter')
        .controller('uploadController', uploadController);

    function uploadController($routeParams, $location, $scope) {
        var model = this;
        model.setNumber = $routeParams.setNumber;
        model.clueNumber = $routeParams.clueNumber;
        model.apiUrl = "/api/upload/" + model.setNumber + "/" + model.clueNumber;
        console.log("set number" + model.setNumber);
        console.log("clue number" + model.clueNumber);
        console.log("submit " + model.apiUrl);

        model.uploadFile = function () {
            console.log('uploading file');
            var ACCESS_TOKEN = document.getElementById('access-token').value;
            var dbx = new Dropbox({accessToken: ACCESS_TOKEN});
            var fileInput = document.getElementById('file-upload');
            var file = fileInput.files[0];
            var originalExtension = file.name.split(".")[1];
            console.log(originalExtension);
            var fileName = model.setNumber + model.clueNumber + "." + originalExtension;
            console.log(fileName);
            file.name = fileName;
            console.log(file);
            dbx.filesUpload({path: '/' + fileName, contents: file})
                .then(function (response) {
                    var results = document.getElementById('results');
                    results.appendChild(document.createTextNode('File uploaded!'));
                    console.log(response);
                })
                .catch(function (error) {
                    console.error(error);
                });
            return false;
        }
    }
})();