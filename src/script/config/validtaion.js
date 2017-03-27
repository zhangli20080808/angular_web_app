'use strict';
angular.module('app').config(['$validationProvider',function($validationProvider){

  // 首先需要一个表达式来校验我们的表单元素的值是不是符合要求
  var expression = {
    // 每一个属性代表一个校验规则,以1开头，后面跟10位数字
    phone :/^1[\d]{10}/,
    // 密码至少为6位
    password:function(value){
      var str = value + '';
      return str.length >5;
    }
  };
  //还需一个错误提示
  var defaultMsg = {
    // 每一个规则对应两条提示
    phone:{
      success:"",
      error:"必须是11位手机号"
    },
    password:{
      success:'',
      error:'长度至少为6位'
    }
  }
// 接下来配置
 $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg) ;
 //如何应用呢，取页面
}])
