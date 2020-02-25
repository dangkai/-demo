app.controller('ContactDetailCtrl',['$scope', 'modalService', '$http', 
'$ionicScrollDelegate', '$timeout', 'sqlService',
function($scope, modalService, $http, 
$ionicScrollDelegate, $timeout, sqlService){
	$scope.contactDetailModal = {
		id: 'contact-detail',
		
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
		
		loadData:function(){

		},
		
	};
	
	console.log(JSON.stringify($scope.contactdetail));
	
}]);