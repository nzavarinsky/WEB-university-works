var app = angular.module('plunker', ['ngRoute']);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "admin.html",
            controller: "MainCtrl"
        })
        .when("/page2", {
            templateUrl: "news.html",
            controller: "SecondCtrl"
        })
        // .otherwise({ redirectTo: '/'})
    ;
}]);

app.controller('MainCtrl', function($scope, srvShareData, $location) {

    $scope.dataToShare = [];
    $scope.dataToShare1 = [];
    $scope.dataToShare2 = [];

    $scope.shareMyData = function(myValue, myValue1, myValue2) {

        $scope.dataToShare = myValue;
        $scope.dataToShare1 = myValue1;
        $scope.dataToShare2 = myValue2;
        srvShareData.addData($scope.dataToShare);
        srvShareData.addData($scope.dataToShare1);
        srvShareData.addData($scope.dataToShare2);

        window.location.href = "news.html";
    }
});

app.controller('SecondCtrl', function($scope, srvShareData) {

    $scope.sharedData = srvShareData.getData();

});

app.service('srvShareData', function($window) {
    var KEY = 'SelectedValue';

    var addData = function(newObj) {
        var mydata = $window.sessionStorage.getItem(KEY);
        if (mydata) {
            mydata = JSON.parse(mydata);
        } else {
            mydata = [];
        }
        mydata.push(newObj);
        $window.sessionStorage.setItem(KEY, JSON.stringify(mydata));
    };

    var getData = function() {
        var mydata = $window.sessionStorage.getItem(KEY);
        if (mydata) {
            mydata = JSON.parse(mydata);
        }
        return mydata || [];
    };

    return {
        addData: addData,
        getData: getData
    };
});