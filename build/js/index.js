'use strict';

angular.module('app', ['ui.router','ngCookies']);

'use strict';


angular.module('app').value('dict',{}).run(['$http','dict',function($http,dict){

    $http.get('data/city.json').success(function(resp){
      dict.city  = resp;
    });
    $http.get('data/salary.json').success(function(resp){
      dict.salary  = resp;
    });
    $http.get('data/scale.json').success(function(resp){
      dict.scale  = resp;
    });



}])
//  初始化，给他一个空的json对象

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
  }).state('search',{
    url: '/search',
    templateUrl: 'view/search.html',
    controller: 'searchCtrl'
  }).state('login',{
    url: '/login',
    templateUrl: 'view/login.html',
    controller: 'loginCtrl'
  }).state('register',{
    url: '/register',
    templateUrl: 'view/register.html',
    controller: 'registerCtrl'
  }).state('me',{
    url: '/me',
    templateUrl: 'view/me.html',
    controller: 'meCtrl'
  }).state('post',{
    url: '/post',
    templateUrl: 'view/post.html',
    controller: 'postCtrl'
  }).state('favourite',{
    url: '/favourite',
    templateUrl: 'view/favourite.html',
    controller: 'favouriteCtrl'
  });
  //重定向
$urlRouterProvider.otherwise('main');

}])

'use strict';

angular.module('app').controller('companyCtrl',['$http','$state','$scope',function($http,$state,$scope){

  //这个地方一定要注意  注入顺序  真心坑
  $http.get('data/company.json?id='+$state.params.id).success(function(resp){
    $scope.company = resp;
    // console.log(resp);
    // $scope.$broadcast('abc',{id:1});
  })
  // $scope.$on('nd',function(event,data){
  //   console.log(event,data);
  // })

}]);

'use strict';

angular.module('app').controller('favouriteCtrl',['$http','$scope',function($http,$scope){


}]);

'use strict';

angular.module('app').controller('loginCtrl',['$http','$scope',function($http,$scope){



}]);

'use strict';

angular.module('app').controller('mainCtrl',['$http','$scope',function($http,$scope){


  $http.get('/data/positionList.json').success(function(resp){
      // console.log(resp);
      $scope.list = resp;
      console.log(resp);
  })
}]);

'use strict';

angular.module('app').controller('meCtrl',['$http','$scope',function($http,$scope){



}]);

'use strict';

angular.module('app').controller('positionCtrl',['$scope','$http','$state','$q','cache',function($scope,$http,$state,$q,cache){

  // cache.put('to','day');
  // cache.remove('to');

  cache.put('to', 'you');


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

'use strict';

angular.module('app').controller('postCtrl',['$http','$scope',function($http,$scope){

  $scope.tabList = [{
    id:'all',
    name:'全部'
  },{
    id:'pass',
    name:'邀请面试'
  },{
    id:'fail',
    name:'不合适'
  }]


}]);

'use strict';

angular.module('app').controller('registerCtrl',['$http','$scope',function($http,$scope){



}]);

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
    link: function($scope){
      // 我们绑定了一个回退事件back 这里的scope和外面的¥scope基本是一样的 行参 我不加$也行
      $scope.back = function() {
          window.history.back();
        };
        // 接受
        // $scope.$on('abc',function(event,data){
        //   console.log(event,data);
        // });
        // 向上传播
        // $scope.$emit('nd',{name:2});

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

'use strict';

// 切记  我们这里的指令名一定要大写
angular.module('app').directive('appPositionInfo',[function(){
  return {
    restrict: 'A',
    // 这里要注意我们的指令只能有一个根元素，不然会报错
    replace:  true,
    templateUrl:  'view/template/positionInfo.html',
    scope:{
        isLogin: '=',
        isActive: '=',
        pos:'='
    }
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
      data: '=',
      filterObj:'='
    }
  }
}]);

'use strict';

// 切记  我们这里的指令名一定要大写
angular.module('app').directive('appSheet',[function(){
  return {
    restrict: 'A',
    // 这里要注意我们的指令只能有一个根元素，不然会报错
    replace:  true,
    templateUrl:  'view/template/sheet.html',
    scope:{
      list:'=',
      // 我们这里的visible  要暴漏出去
      visible:'=',
      select:'&'
    }
  }
}])

'use strict';
angular.module('app').directive('appTab', [function(){
  return {
    // 我们使用属性的形式
    restrict: 'A',
    // 进行替换dom元素 如果我们希望将这里的父元素div替换掉  true
    replace:  true,
    // 模版位置
    templateUrl: 'view/template/tab.html',
    scope:{
        list: '=',
        tabClick: '&'
    },
    link:function($scope){
      $scope.click = function(tab){
        $scope.selectId = tab.id;
        $scope.tabClick(tab);

      }
    }
  }
}]);

'use strict';

angular.module('app').filter('filterByObj',[function(){
  //返回值有点特殊   接受两个参数  数组  过滤对象

  return function (list,obj){

    var result = [];
    angular.forEach(list,function(item){
      // 首先我们默认他是相等的
      var isEqual = true;
      for(var e in obj){
        if(item[e] !== obj[e]){
          isEqual = false;
        }
        // 注意这个循环没办法停止 不像for循环可以break
      }
      if(isEqual){
        result.push(item);
      }
    });
    return result;

  }


}])

'use strict';
// angular.module('app').service('cache',['$cookies',function($cookies){
//   this的方式
//   this.put = function(key,value){
//     $cookies.put(key,value)
//   }
//   this.get = function(key){
//     return $cookies.get(key)
//   }
//   this.remove = function(key){
//     $cookies.remove(key);
//   }
// }])

angular.module('app').factory('cache',['$cookies',function($cookies){
  // 对象的方式
  return {
    put :function(key,value){
      $cookies.put(key,value)
    },
    get: function(key){
      return $cookies.get(key)
    }
  }

}])
