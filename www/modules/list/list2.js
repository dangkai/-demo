app.controller('ListCtrl2',['$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout', 
function($scope, modalService, $http, $ionicScrollDelegate, $timeout){
	   $scope.showReader=true;
	   $scope.title="列表操作";
	  /*@dscription
	  返回方法
	   */
	  $scope.goBack=function(){
		  modalService.close("list2");
	  }
}]);