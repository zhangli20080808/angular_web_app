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

  var tabId = '';
  $scope.filterObj ={};
  $scope.tClick = function(id,name){
    // console.log(id,name); salary 薪资
    tabId = id;
    $scope.sheet.list = dict[id];
    $scope.sheet.visible = true;
    console.log(dict);
  };
  $scope.sClick = function(id,name){
    // console.log(id,name);
    // 我们先判断下有没有id  下拉列表有选择 我们这个地方是想把name 赋值给页签 但不知道是给哪一个页签
    // 我们生命一个变量   当页签被点击的时候  我们改变他
    if(id){
        angular.forEach($scope.tabList,function(item){
          if(item.id === tabId){
            item.name = name;
          }
        });
        $scope.filterObj[tabId+'Id'] = id;
    }else{
      // 不需要 要删掉
      delete $scope.filterObj[tabId+'Id'];
      angular.forEach($scope.tabList,function(item){
        if(item.id === tabId){
          switch(item.id){
            case 'city':
            item.name = '城市';
            break;
            case 'salary':
            item.name = '薪资';
            break;
            case 'scale':
            item.name = '公司规模';
            break;
          }
        }
      })
    }
  }


}]);
