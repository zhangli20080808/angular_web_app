'use strict';

angular.module('app', ['ui.router']);

'use strict';

// 这个地方我们对两个provider进行显示配置
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  // 前者配置我们的路由    主页面id，唯一标示一个路径
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'view/main.html',
    controller: 'mainCtrl'
  }).state('position',{
    // 路由－－我们根据不同的职位去进行展示,来知道我们当前展示的式那个职位信息
     url: '/position/:id',
     templateUrl: 'view/position.html',
     controller: 'positionCtrl'
  }).state('company',{
    url: '/company/:id',
    templateUrl: 'view/company.html',
    controller: 'companyCtrl'
  });
  //重定向
$urlRouterProvider.otherwise('main');

}])

'use strict';

angular.module('app').controller('companyCtrl',['$scope',function($scope){

  $scope.msg =1;

}]);

'use strict';

angular.module('app').controller('mainCtrl',['$http','$scope',function($http,$scope){


  $http.get('/data/positionList.json').success(function(resp){
      // console.log(resp);
      $scope.list = resp;
  })

$scope.abc =1;

}]);

'use strict';

angular.module('app').controller('positionCtrl',['$scope',function($scope){

  $scope.msg =1;
  $scope.isLogin =false;

}]);

'use strict';

angular.module('app').directive('appCompany',[function(){
  return {
    // 我们使用属性的形式
    restrict: 'A',
    // 进行替换dom元素 如果我们希望将这里的父元素div替换掉  true
    replace:  true,
    // 模版位置
    templateUrl: 'view/template/company.html',
    scope: {
      com: '='
    }
  }
}]);

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

'use strict';

// 切记  我们这里的指令名一定要大写
angular.module('app').directive('appHead',[function(){
  return {
    restrict: 'A',
    // 这里要注意我们的指令只能有一个根元素，不然会报错
    replace:  true,
    templateUrl:  'view/template/head.html'
  }
}])

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

'use strict';

angular.module('app').directive('appPositionClass',[function(){
  return {
    // 我们使用属性的形式
    restrict: 'A',
    // 进行替换dom元素 如果我们希望将这里的父元素div替换掉  true
    replace:  true,
    // 模版位置
    templateUrl: 'view/template/positionClass.html'
  }
}]);

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
