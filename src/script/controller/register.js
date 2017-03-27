'use strict';

angular.module('app').controller('registerCtrl',['$interval','$http','$scope',function($interval,$http,$scope){

  $scope.submit = function(){
    console.log($scope.user);
  }

  var count = 60;

  $scope.send =function(){
    $http.get('data/code.json').success(function(resp){
        if(1===resp.state){
          count = 60;
            $scope.time = '60';
            var interval = $interval(function () {
              // 如果小于0，这个方法记得要取消
              if(count<=0){
                $interval.cancel(interval);
                $scope.time = '';
              }else{
                count--;
                $scope.time = count +'s';
              }
            }, 1000);
        }
    })
  }

}]);
