'use strict';

angular.module('app').controller('positionCtrl',['$scope','$http','$state','$q',function($scope,$http,$state,$q){

  $scope.isLogin =false;
  function getPosition(){

    //我们声明一个延迟加载对象
    var def = $q.defer();

    $http.get('data/position.json?id='+$state.params.id).success(function(resp){
      $scope.position = resp;
      def.resolve(resp);
    }).error(function(err){
      def.reject(err);
    });
    return def.promise;
  }

  // 当返回一个promise函数的时候有一个then函数  then代表这个异步请求结束之后所执行的一个函数
  // then 里面有两个函数 分别对应我们前面的  参数就是调用resolve的时候传过来的参数

  function getCompany(id){
    $http.get('data/position.json?id='+id).success(function(resp){
      $scope.company = resp;
    })
  }

  getPosition().then(function(obj){
    // console.log(obj);
    getCompany(obj.companyId);
  })



}]);
