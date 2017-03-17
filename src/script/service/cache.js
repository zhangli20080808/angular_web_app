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
