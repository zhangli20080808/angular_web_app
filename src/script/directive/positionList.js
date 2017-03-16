'use strict';

// 切记  我们这里的指令名一定要大写
angular.module('app').directive('appPositionList',[function(){
  return {
    restrict: 'A',
    // 这里要注意我们的指令只能有一个根元素，不然会报错
    replace:  true,
    templateUrl:  'view/template/positionList.html',
    scope: {
      //  我们暴露一个data的接口 此时外面继续用list就 请求不到了
      data: '='
    }
  }
}]);
