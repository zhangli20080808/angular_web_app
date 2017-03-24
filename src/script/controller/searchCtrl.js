'use strict';

angular.module('app').controller('searchCtrl',['$scope','$http','dict', function($scope,$http,dict){

  $scope.name = '';

  $scope.search = function(){
    $http.get('data/positionList.json?name='+$scope.name).success(function(resp){
      $scope.positionList = resp;
    })
  }
  $scope.search();
  $scope.sheet ={};
  $scope.tabList = [{
    id:'city',
    name:'城市'
  },{
    id:'salary',
    name:'薪资',
  },{
    id:'scale',
    name:'公司规模'
  }];
  $scope.tClick = function(id,name){
    // console.log(id,name); salary 薪资
    $scope.sheet.list = dict[id];
    $scope.sheet.visible = true;
    console.log(dict);
  };


}]);
