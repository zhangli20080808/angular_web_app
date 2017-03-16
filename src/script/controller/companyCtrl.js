'use strict';

angular.module('app').controller('companyCtrl',['$http','$state','$scope',function($http,$state,$scope){

  //这个地方一定要注意  注入顺序  真心坑
  $http.get('data/company.json?id='+$state.params.id).success(function(resp){
    $scope.company = resp;
    // console.log(resp);
  })

  $scope.msg =1;
}]);
