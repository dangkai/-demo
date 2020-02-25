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
		debugger;
		if(selectedUser.length == 0){
			alert("请先选接收人！");
			return;
		}
		if(!confirm("确定提交流程吗？")){
			return;
		}
		var ownerRef = "";
		var ownerRefAlias = "";
		for (var i=0,len = selectedUser.length;i<len;i++){
			ownerRef += selectedUser[i].id + ";";
			ownerRefAlias += selectedUser[i].name + ";";
		}
		var postData = {
				command : "doSubmitAction",
				params : {
					loginName:"'" + $scope.loginModal.loginData.username + "'",
					entryId:$scope.waitData.entryId,
					actionId:"'" + $scope.buttonData.currentStep[0].action[0].actionId[0] + "'"
				},
				body : angular.toJson({
					dto1:$scope.buttonData.currentStep[0].currentStepStatus[0].currentStepNo[0],
					dto2:$scope.buttonData.currentStep[0].currentStepStatus[0].currentStepId[0],
					dto3:$scope.buttonData.currentStep[0].action[0].nextStepDesc[0].stepNo[0],
					dto4:ownerRef,
					dto5:ownerRefAlias,
					dto6:$scope.workflowModal.curOpinion,
					dto7:$scope.getElementByName($scope.buttonData.currentStep[0].action[0],"ideaClassify")||''
				},false)
		};
		requestService.requestDataNoCache(postData, function(json) {
			debugger;
			if(json.retCode == "200"){
				alert("提交成功");
				modalService.close("submitWorkflow");
				modalService.close($scope.waitDetailId);
				$scope.todoModal.doRefresh();
			}else{
				alert("提交失败");
			}
		});	
		/*var postData = {
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
		});*/
	}
} ]);