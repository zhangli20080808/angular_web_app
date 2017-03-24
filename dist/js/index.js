"use strict";angular.module("app",["ui.router","ngCookies"]),angular.module("app").value("dict",{}).run(["$http","dict",function(t,e){t.get("data/city.json").success(function(t){e.city=t}),t.get("data/salary.json").success(function(t){e.salary=t}),t.get("data/scale.json").success(function(t){e.scale=t})}]),angular.module("app").config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("main",{url:"/main",templateUrl:"view/main.html",controller:"mainCtrl"}).state("position",{url:"/position/:id",templateUrl:"view/position.html",controller:"positionCtrl"}).state("company",{url:"/company/:id",templateUrl:"view/company.html",controller:"companyCtrl"}).state("search",{url:"/search",templateUrl:"view/search.html",controller:"searchCtrl"}),e.otherwise("main")}]),angular.module("app").controller("companyCtrl",["$http","$state","$scope",function(t,e,i){t.get("data/company.json?id="+e.params.id).success(function(t){i.company=t})}]),angular.module("app").controller("mainCtrl",["$http","$scope",function(t,e){t.get("/data/positionList.json").success(function(t){e.list=t,console.log(t)})}]),angular.module("app").controller("positionCtrl",["$scope","$http","$state","$q","cache",function(t,e,i,a,n){function o(i){e.get("data/position.json?id="+i).success(function(e){t.company=e})}n.put("to","you"),t.isLogin=!1,function(){var n=a.defer();return e.get("data/position.json?id="+i.params.id).success(function(e){t.position=e,n.resolve(e)}).error(function(t){n.reject(t)}),n.promise}().then(function(t){o(t.companyId)})}]),angular.module("app").controller("searchCtrl",["$scope","$http","dict",function(t,e,i){t.name="",t.search=function(){e.get("data/positionList.json?name="+t.name).success(function(e){t.positionList=e})},t.search(),t.sheet={},t.tabList=[{id:"city",name:"城市"},{id:"salary",name:"薪资"},{id:"scale",name:"公司规模"}];var a="";t.filterObj={},t.tClick=function(e,n){a=e,t.sheet.list=i[e],t.sheet.visible=!0,console.log(i)},t.sClick=function(e,i){e?(angular.forEach(t.tabList,function(t){t.id===a&&(t.name=i)}),t.filterObj[a+"Id"]=e):(delete t.filterObj[a+"Id"],angular.forEach(t.tabList,function(t){if(t.id===a)switch(t.id){case"city":t.name="城市";break;case"salary":t.name="薪资";break;case"scale":t.name="公司规模"}}))}}]),angular.module("app").directive("appCompany",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/company.html",scope:{com:"="}}}]),angular.module("app").directive("appFoot",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/footer.html"}}]),angular.module("app").directive("appHead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/head.html"}}]),angular.module("app").directive("appHeadBar",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/headBar.html",scope:{text:"@"},link:function(t){t.back=function(){window.history.back()}}}}]),angular.module("app").directive("appPositionClass",[function(){return{restrict:"A",replace:!0,scope:{com:"="},templateUrl:"view/template/positionClass.html",link:function(t){t.showPositionList=function(e){t.positionList=t.com.positionClass[e].positionList,t.isActive=e},t.$watch("com",function(e){console.log(e),e&&t.showPositionList(0)})}}}]),angular.module("app").directive("appPositionInfo",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positionInfo.html",scope:{isLogin:"=",isActive:"=",pos:"="}}}]),angular.module("app").directive("appPositionList",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positionList.html",scope:{data:"=",filterObj:"="}}}]),angular.module("app").directive("appSheet",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/sheet.html",scope:{list:"=",visible:"=",select:"&"}}}]),angular.module("app").directive("appTab",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/tab.html",scope:{list:"=",tabClick:"&"},link:function(t){t.click=function(e){t.selectId=e.id,t.tabClick(e)}}}}]),angular.module("app").filter("filterByObj",[function(){return function(t,e){var i=[];return angular.forEach(t,function(t){var a=!0;for(var n in e)t[n]!==e[n]&&(a=!1);a&&i.push(t)}),i}}]),angular.module("app").factory("cache",["$cookies",function(t){return{put:function(e,i){t.put(e,i)},get:function(e){return t.get(e)}}}]);