app.controller('BulletinCtrl',['$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout', 'requestService',
function($scope, modalService, $http, $ionicScrollDelegate, $timeout,requestService){

	$scope.data = {
		listData:[]
	};

	$scope.rows = 10;
	$scope.pageIndex = 1;
	$scope.moredata = true;

	$scope.bulletinModal = {
		id: 'bulletin',
		
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
		goto1:function(index){
			$scope.itemIndex = index;
			modalService.create("bulletinDetail","modules/bulletin/bulletinDetail.html", $scope);
		},
		loadMore:function(){
			if ($scope.pageIndex > 1){
				$timeout(function(){
					$scope.loadData($scope.pageIndex,$scope.rows);
					//$scope.$broadcast('scroll.infiniteScrollComplete');
				}, 500);
			}else{
				$scope.loadData($scope.pageIndex,$scope.rows);
				//$scope.$broadcast('scroll.infiniteScrollComplete');
			}
		}

		
	};

	$scope.formatDate = function(value){
		var date = new Date(parseInt(value));
		return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
	}

	$scope.loadData = function(index,rows){
		var postData = {
							params:{pageIndex:index+"",pageNum:rows+""},
							command:"getBulletinInfo"
						};
		requestService.requestDataNoCache(postData, function(data){

			$scope.data.listData = $scope.data.listData.concat(data.data);

			//alert($scope.data.listData.length + ' ' + data.total);

			if ($scope.data.listData.length == data.total){

				$scope.moredata = false;
			}else{
				$scope.pageIndex = index+1;
			}

		$scope.$broadcast('scroll.refreshComplete');
			//$scope.loadData($scope.pageIndex,$scope.rows);
				$scope.$broadcast('scroll.infiniteScrollComplete');
		});
		// $http.get('http://weixin.avicit.com:8009/api/platform6/demo/DemoBulletin/searchByPage/'+index+'/'+rows+'/v1').success(function(data){
		// 	$scope.data.listData = $scope.data.listData.concat(data.data);
		// 	if (data.length == rows){
		// 		$scope.pageIndex = index+1;
		// 	}else{
		// 		$scope.moredata = false;
		// 	}
		// });
	}

	$scope.doRefresh = function(){
		$scope.data.listData = [];
		$scope.pageIndex = 1;
		$scope.moredata = true;
		$scope.loadData($scope.pageIndex,$scope.rows);
	}

	//$timeout(function(){$ionicScrollDelegate.scrollBy(0, -200, true);}, 1000);
	//$scope.loadData($scope.pageIndex,$scope.rows);

}]);