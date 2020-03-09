app.controller('ListCtrl2',['$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout', 
function($scope, modalService, $http, $ionicScrollDelegate, $timeout){

  /**
   * @description
   * 返回方法
   */
  $scope.goBack=function(){
    modalService.close("detail");
  };


}]);
