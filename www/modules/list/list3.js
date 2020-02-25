app.controller('ListCtrl3',['$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout', 
function($scope, modalService, $http, $ionicScrollDelegate, $timeout){
	$scope.listModal3 = {
		id: 'list3',
		moredata : true,
		
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
		
		loadData:function(){

		},
		
		data : [
			{ id: 0 },{ id: 1 },{ id: 2 },{ id: 3 },{ id: 4 },{ id: 5 },
			{ id: 6 },{ id: 7 },{ id: 8 },{ id: 9 },{ id: 10 },
			{ id: 11 },{ id: 12 },{ id: 13 },{ id: 14 },{ id: 15 },
			{ id: 16 },{ id: 17 },{ id: 18 },{ id: 19 },{ id: 20 }
		  ],
		  
		doRefresh:function(){
			console.log("222222222");
			$scope.$broadcast('scroll.refreshComplete');
		},
		
		loadMore:function(){
			$timeout(function(){
				$scope.$broadcast('scroll.infiniteScrollComplete');
				$scope.listModal3.moredata = false;
				console.log("22222222222222222222222222222" + $scope.listModal3.moredata);
			}, 1000);
		},
		
	};
	//$ionicScrollDelegate.activatePullToRefresh();
	$scope.element = 5;
	
	$scope.myObj = {
        "width" : 100 / $scope.element + "%",
        "float" : "left",
        "border" : "1px solid #DEDEDE",
        "padding" : "12px",
		"text-align":"center",
    }
	

}]);