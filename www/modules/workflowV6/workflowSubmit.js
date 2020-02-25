app.controller('AvicitWorkflowCtrl', [ '$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout', '$sce', 'requestService', function($scope, modalService, $http, $ionicScrollDelegate, $timeout, $sce, requestService) {

	$scope.submitModal = {
		id : 'submitWorkflow',
		// 已选用户
		userList : [ {
			index : 0,
			userdata : []
		} ],
		close : function() {
			if (this.id != ""){
				modalService.close(this.id);
			}
		}
	};

	$scope.selectReceiver = function(index) {
		$scope.callback = function(objs) {
			$scope.submitModal.userList[index].userdata = objs;
		}
		$scope.selectedUsers = $scope.submitModal.userList[index].userdata;
		modalService.create("common-select-user", "modules/commonselect/userselect.html", $scope);
	}

	$scope.delReceiver = function(id, index) {
		var userlist = $scope.submitModal.userList[index].userdata;
		for (var i = 0; i < userlist.length; ++i) {
			if (userlist[i].id == id) {
				userlist.splice(i, 1);
				return;
			}
		}
	}

	$scope.workflowSubmit = function() {
		var selectedUser = $scope.submitModal.userList[0].userdata;
		if(selectedUser.length == 0){
			alert("请先选接收人！");
			return;
		}
		if(!confirm("确定提交流程吗？")){
			return;
		}
		var postData = {
			body : angular.toJson({
				taskId : $scope.workflowModal.submitData.taskId,
				processInstanceId : $scope.workflowModal.submitData.processInstanceId,
				outcome : $scope.workflowModal.submitData.outcome,
				userName : $scope.loginModal.loginData.username,
				targetActivityName : $scope.workflowModal.submitData.targetActivityName,
				selectedUser : selectedUser,
				message : $scope.workflowModal.curOpinion
			}, false),
			command : "completeTask"
		};
		requestService.requestDataNoCache(postData, function(json) {
			if(json.result == "success"){
				alert("提交成功");
				modalService.close("submitWorkflow");
				modalService.close($scope.waitDetailId);
				$scope.todoModal.doRefresh();
			}else{
				alert("提交失败");
			}
		});
	}
} ]);