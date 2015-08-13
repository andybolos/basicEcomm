app.controller('mainCtrl', function($scope, dataService) {

    $scope.getItems = function() {
        dataService.getItems().then(function(response) {
            $scope.items = response
        })
    };
    $scope.getItems();





    console.log("I am here.... I am waiting... I am the mainCtrl");



});
