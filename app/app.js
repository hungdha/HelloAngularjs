var myApp = angular.module("myApp", []);

myApp.controller('MessageController', function( $scope, $rootScope ){

    $scope.message = "Hello angular js";
    $scope.showMessage = function(){
        alert("hello angular js");
    }
    //$rootScope.messageCommon = "Message Social";

});

