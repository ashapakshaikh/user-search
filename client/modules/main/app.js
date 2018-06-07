var github = angular.module("github",[]);
github.controller("ctrl", function($scope,$http){

 $http.post('http://localhost:8001/api/githubData')

        .then(function(result) {
        	console.log(JSON.stringify(result.data.response));
            $scope.githubData = result.data.response;

        });
      $scope.showUser = function(onedata) {
       
        console.log(onedata);
    }

});