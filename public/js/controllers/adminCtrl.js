'use strict'

app.controller('adminCtrl', function($scope, dataService) {

    $scope.postData = function(newPost) {
        console.log(newPost);
        dataService.postData(newPost);
        $scope.getItems();
        $scope.newPost = "";
    };

    $scope.getItems = function() {
        dataService.getItems().then(function(response) {
            $scope.items = response
        })
    };
    $scope.getItems();

    $scope.deletePost = function(post) {
        console.log(post);
        dataService.deletePost(post);
        $scope.getItems();
        $scope.filterStuff = "";
    };

    $scope.updatePost = function(post) {
        console.log(post);
    }

});
