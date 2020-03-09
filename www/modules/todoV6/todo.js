app.controller('TodoCtrl', [ '$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout', 'requestService', function($scope, modalService, $http, $ionicScrollDelegate, $timeout, requestService) {

	$scope.todoModal = {
		statusStyle : {},
		pageNo : 0,
		pageSize : 10,
		moredata : true,
		listData : [],
		id : 'todo',
		close : function() {
			if (this.id != "") {
				modalService.close(this.id);
			}
		},
		loadMore : function() {
			this.pageNo = this.pageNo + 1;
			this.loadData();
		},
		getStatus : function(value) {
			if (value == 1) {
				this.statusStyle.display = "";
			} else {
				this.statusStyle.display = "none";
			}
		},
		finishTask : function(index) {
			var dbid = this.listData[index].dbid;
			var processInstance = this.listData[index].processInstance;
			var postData = {
				body : angular.toJson({
					dbid : dbid,
					processInstance : processInstance
				}, false),
				command : "finishTask"
			};
			var _self = this;
			requestService.requestDataNoCache(postData, function(json) {
				if (json.result == "success") {
					_self.doRefresh();
				}
			});
		},
		loadData : function() {
			var postData = {
				body : angular.toJson({
					userName : $scope.loginModal.loginData.username,
					pageNo : this.pageNo + "",
					pageSize : this.pageSize + ""
				}, false),
				command : "getTodoListInfo"
			};
			var _self = this;
			requestService.requestDataNoCache(postData, function(json) {
				_self.listData = _self.listData.concat(json.data);
				if (_self.listData.length >= json.total) {
					_self.moredata = false;
				}
				$scope.$broadcast('scroll.infiniteScrollComplete');
			});
		},
		doRefresh : function() {
			this.listData = [];
			this.pageNo = 1;
			this.moredata = true;
			this.loadData();
			$scope.$broadcast('scroll.refreshComplete');
		},
		
		gotoDetail : function(index) {
			var data = this.listData[index];
			$scope.waitData = data;
			$scope.waitDetailId = "demoTodoDetail";
			$scope.waitDetailUrl = "modules/todoDetail/demoDetailMobile.html";
			//TO DO
			//需要增加根据规则的拆分，拆分出要打开的页面的路径，现在先用demo的页面实现功能
			modalService.create($scope.waitDetailId, $scope.waitDetailUrl, $scope);
		}
	};
} ]);