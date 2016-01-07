var app = angular.module('quoteBook');

app.controller('mainCtrl', function ($scope, dataService) {

    //$scope.quotes = dataService.getData();
    
    $scope.findQuotes = function() {
        $scope.quotes = dataService.getData();
        console.log($scope.quotes);
    }
    $scope.findQuotes();
    
    $scope.addQuotes = function() {
        dataService.addData($scope.newQuote);
        $scope.newQuote = {};
        $scope.findQuotes();
    }

    $scope.removeQuotes = function() {
        dataService.removeData($scope.newQuote.text);
        $scope.newQuote = {};
    }
    $scope.test = "test"
    $scope.custom = true;
    $scope.toggleCustom = function() {
        $scope.custom = $scope.custom === true;
    };

});