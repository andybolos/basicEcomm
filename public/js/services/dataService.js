app.service('dataService', function($q, $http) {

    this.getItems = function() {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: '/api/listings'
        }).then(function(response) {
            dfd.resolve(response.data)
        }), function(error) {
            console.log("Error", error);
        }
        return dfd.promise;
    };

    this.postData = function(newPost) {
        var dfd = $q.defer();
        $http({
            method: "POST",
            url: '/api/listings',
            data: newPost
        }).then(function(response) {
            console.log(response);
            dfd.resolve(response.data)
        }), function(error) {
            console.log("Error", error);
        }
        return dfd.promise;
    };

    this.deletePost = function(post) {
        var dfd = $q.defer();
        $http({
            method: 'DELETE',
            url: '/api/listings/' + post,
        }).then(function(response) {
            console.log("you gone and done it and deleted it", response);
        })
        return dfd.promise;
    }



})
