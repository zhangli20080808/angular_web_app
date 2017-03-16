'use strict';

angular.module('app').controller('mainCtrl',['$http','$scope',function($http,$scope){


  $http.get('/data/positionList.json').success(function(resp){
      // console.log(resp);
      $scope.list = resp;
      console.log(resp);
  })
}]);
