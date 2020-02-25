app.controller('LoadingCtrl',['$scope', 'modalService', 
'sqlService', 'preferencesService', '$ionicLoading', 
function($scope, modalService, 
sqlService, preferencesService, $ionicLoading){
	$scope.loadingModal = {
		id: 'loading',
		
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
		
		loadData:function(){

		},
		
	};
	
	var callback = function(){
		$ionicLoading.hide();
        preferencesService.put('sql', '1');
		modalService.create("home","modules/home/home.html", $scope);
	};
	$ionicLoading.show({
      template: '初始化中,请稍后...'
    });
	preferencesService.get("sql", function(data){
        if(data != '1'){
			sqlService.initSql(callback);
        }
    }, function(data){
        console.log("no sql excutes");
		$ionicLoading.hide();
		modalService.create("home","modules/home/home.html", $scope);
    });
	

}]);