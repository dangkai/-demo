app.controller('launchCtrl',['$scope', 'avicitMobileApi', 
function($scope, avicitMobileApi){
	$scope.launchModal = {
		id: 'modules/launch/launch.html',

		close:function(){
			if (this.id != "")
				avicitMobileApi.closeTemplete(this.id);
		},

		loadData:function(){

		},
		
		finish:function(){
			avicitMobileApi.preference().put("isfirst", '1', function(data){
				//avicitMobileApi.closeTemplete($scope.launchModal.id);
				avicitMobileApi.createTemplete("modules/login/login.html", $scope);
			}, function(data){
				console.log("no preference excutes");
			});
		},

	};
	 $scope.myActiveSlide = 0;

}]);
