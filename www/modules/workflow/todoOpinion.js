app.controller('TodoV5OpinionCtrl',['$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout','$sce','requestService', 
function($scope, modalService, $http, $ionicScrollDelegate, $timeout,$sce,requestService){


	$scope.opinionModal = {
		id: 'todoOpinion',
		
		opinionData : $scope.workflowModal.opinionData,
		
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		}
	
	};
	$scope.setItemClass = function(index){
		if (index == $scope.opinionModal.opinionData.length-1){
			return "last-child";
		}else if (index == 0){
			return "first-child";
		}else{
			return "";
		}
	}

}]);