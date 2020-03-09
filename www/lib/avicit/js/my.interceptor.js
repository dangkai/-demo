
var myApp=angular.module("myApp", []);
myApp.factory('interfactory',["$q","$rootScope",function ($q,$rootScope){
  return{
    // 可选，拦截成功的请求
    request: function(config) {
      // 进行预处理
      // ...
      return config || $q.when(config);
    },
    // 可选，拦截失败的请求
    requestError: function(rejection) {
      return $q.reject(rejection);
    },
    // 可选，拦截成功的响应
    response: function(response) {
      // 进行预处理
      // ....
      return response || $q.when(reponse);
    },
    // 可选，拦截失败的响应
    responseError: function(rejection) {
        console.log("responseError");
      $rootScope.$emit("userIntercepted","notLogin",rejection);
      return $q.reject(rejection);
    }
  }
}]);



