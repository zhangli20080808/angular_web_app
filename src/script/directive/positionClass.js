'use strict';

angular.module('app').directive('appPositionClass',[function(){
  return {
    // 我们使用属性的形式
    restrict: 'A',
    // 进行替换dom元素 如果我们希望将这里的父元素div替换掉  true
    replace:  true,
    // 模版位置
    scope: {
      com: '='
    },
    templateUrl: 'view/template/positionClass.html',
    link: function($scope){
      $scope.showPositionList = function(idx){
        $scope.positionList = $scope.com.positionClass[idx].positionList;
        // console.log($scope.PositionList);
          $scope.isActive = idx;
      }
      $scope.$watch('com',function(newVal){
        console.log(newVal);
        if(newVal) {
          $scope.showPositionList(0);
        }
      })
    }
  }

}]);
