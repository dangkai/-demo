app.controller('DemoCtrl',
['$scope', 'avicitMobileApi', 
function($scope, avicitMobileApi){
	//$scope.demoModal中所有demo都是可变量
	$scope.demoModal = {
		id: 'demo',
		
		close:function(){
			if (this.id != "")
				avicitMobileApi.closeTemplete(this.id);
		},
		
		data : [
			
		],
		  
		goAdd : function(){
			avicitMobileApi.createTemplete("modules/demo/demo-add.html", $scope);
			//avicitMobileApi.modal().create("id", "modules/demo/demo-add.html", $scope);
		},
		
		open : function(id){
			console.log(id);
			$scope.demoModal.detailid = id;
			avicitMobileApi.createTemplete("modules/demo/demo-detail.html", $scope);
		},
		
		onItemDelete : function(item){
			alert(JSON.stringify(item));
		},
		
		pageIndex : 1, //列表分页
		moredata : true, //是否上拉刷新
		//调用数据请求
		loadData : function(index, callback, _rows){
			var rows =  _rows ? _rows : $scope.rows;
			var postData = {
				params:{pageIndex:index+"", pageNum:rows+""},
				command:"getBulletinInfo"
			};
			avicitMobileApi.sendRequest(false, postData, function(data){
				console.log("rows="+rows);
				$scope.demoModal.data = $scope.demoModal.data.concat(data.data);
				if(data.data.length >= rows){
					$scope.demoModal.pageIndex = index + 1;
				}else{
					$scope.demoModal.moredata = false;
				}
				callback();
			}, function(){
				$scope.demoModal.moredata = false;
			});
		},
		
		//下拉刷新
		doRefresh : function(){
			$scope.demoModal.pageIndex = 1;
			$scope.demoModal.data = [];
			$scope.demoModal.loadData($scope.demoModal.pageIndex, $scope.refreshFinished, 20);
		},
		
		//上拉加载
		loadMore : function(){
			$scope.demoModal.loadData($scope.demoModal.pageIndex, $scope.infiniteFinished);
		},
		
	};
	
	$scope.$on("$destroy", function() {
        console.log("退出界面是监听方法");
    });
	
	$scope.$on("$ionicView.beforeEnter", function(){
        console.log("进入界面是监听方法");
    });
	
	$scope.$on("$ionicView.enter", function(){
        console.log("进入界面是监听方法");
    });
	
}]);