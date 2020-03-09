app.controller('CharCtrl',['$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout', 
function($scope, modalService, $http, $ionicScrollDelegate, $timeout){

 //返回方法
  $scope.goBack=function(){
	  modalService.close("char");
  }

}]);