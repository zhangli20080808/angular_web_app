'use strict';

// 切记  我们这里的指令名一定要大写
angular.module('app').directive('appPositionInfo',[function(){
  return {
    restrict: 'A',
    // 这里要注意我们的指令只能有一个根元素，不然会报错
    replace:  true,
    templateUrl:  'view/template/positionInfo.html'
    // scope:{
    //
    // }
    // 点亮的动作
    // link:function($scope){
    //   $scope.imagePath = $scope.isActive?'image/star-active.png':'image/star.png';
    // }
  }
}]);
