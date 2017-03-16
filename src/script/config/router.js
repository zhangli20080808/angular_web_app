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
