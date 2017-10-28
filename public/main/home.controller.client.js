(function () {
    angular
        .module('huskyhunter')
        .controller('homeController', homeController);

    function homeController(currentUser) {
        var model = this;
        model.currentUser = currentUser;
        model.isHQ = function(){
            return currentUser.roles.indexOf('HQ') > -1 ;
        }
        model.isTeam1 = function(){
            return currentUser.roles.indexOf('TEAM1') > -1 ;
        }
        model.isTeam2 = function(){
            return currentUser.roles.indexOf('TEAM2') > -1 ;
        }
        model.isTeam3 = function(){
            return currentUser.roles.indexOf('TEAM3') > -1 ;
        }
        model.isAdmin = function(){
            return currentUser.roles.indexOf('ADMIN') > -1 ;
        }
    }
})();