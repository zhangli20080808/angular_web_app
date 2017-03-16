'use strict';
angular.module('app').directive('appFoot', [function(){
  return {
    // 我们使用属性的形式
    restrict: 'A',
    // 进行替换dom元素 如果我们希望将这里的父元素div替换掉  true
    replace:  true,
    // 模版位置
    templateUrl: 'view/template/footer.html'
  }
}]);
