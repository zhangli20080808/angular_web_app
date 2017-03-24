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
