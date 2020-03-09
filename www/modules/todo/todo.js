app.controller('TodoV5Ctrl', [ '$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout', 'requestService', function($scope, modalService, $http, $ionicScrollDelegate, $timeout, requestService) {
  /**
   * @auther dk
   * @description
   * 返回方法
   * params [String]
   *       String  //显示返回的标记
   */
  $scope.goBack=function(){
    modalService.close("todo");
  };
} ]);
