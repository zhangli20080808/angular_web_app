'use strict';

// 切记  我们这里的指令名一定要大写
angular.module('app').directive('appHeadBar',[function(){
  return {
    restrict: 'A',
    // 这里要注意我们的指令只能有一个根元素，不然会报错
    replace:  true,
    templateUrl:  'view/template/headBar.html',
    scope:{
      // 我们传一个字符串
      // text: '='
      text: '@'
    },
    link: function(scope){
      // 我们绑定了一个回退事件back 这里的scope和外面的¥scope基本是一样的 行参 我不加$也行
      scope.back = function() {
          window.history.back();
        };
    }
    // 我们为指令定义一些内在逻辑的时候，就可以用这个link
  };
}]);
