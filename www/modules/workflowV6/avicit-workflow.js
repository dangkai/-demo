app.directive('workflow', [ 'modalService', '$http', '$ionicScrollDelegate', '$timeout', '$sce', 'requestService', function(modalService, $http, $ionicScrollDelegate, $timeout, $sce, requestService) {
	return {
		restrict : 'EA',
		transclude : true,
		controller : [ '$scope', 'modalService', 'requestService', function($scope, modalService, requestService) {
			$scope.workflowModal = {
				isOpinion : true, // 意见审批框显隐
				opClick : false
			};

			//提交方法
			$scope.submitWorkflow = function() {
				// 提交获取候选节点及人员数据
				var postData = {
					body : angular.toJson({
						processInstanceId : $scope.workflowModal.submitData.processInstanceId,
						executionId : $scope.workflowModal.submitData.executionId,
						type : "dosubmit",
						outcome : $scope.workflowModal.submitData.outcome,
						targetActivityName : $scope.workflowModal.submitData.targetActivityName,
						userName : $scope.loginModal.loginData.username
					}, false),
					command : "getActivityUserInfo"
				};
				$scope.selectedUserList = [];
				requestService.requestDataNoCache(postData, function(json) {
					var activityType = json.taskUserSelect.activityType;
					if(activityType == "end"){
						if(!confirm("确定提交流程吗？")){
							return;
						}
						var postData1 = {
							body : angular.toJson({
								taskId : $scope.workflowModal.submitData.taskId,
								processInstanceId : $scope.workflowModal.submitData.processInstanceId,
								outcome : $scope.workflowModal.submitData.outcome,
								userName : $scope.loginModal.loginData.username,
								targetActivityName : $scope.workflowModal.submitData.targetActivityName,
								selectedUser : [],
								message : $scope.workflowModal.curOpinion
							}, false),
							command : "completeTask"
						};
						requestService.requestDataNoCache(postData1, function(json1) {
							if(json1.result == "success"){
								alert("提交成功");
								modalService.close($scope.waitDetailId);
								$scope.todoModal.doRefresh();
							}else{
								alert("提交失败");
							}
						});
					}else{
						var userList = json.taskUserSelect.nextTask[0].userList;
						for (var i = 0; i < userList.length; i++) {
							var u = userList[i];
							var d = {
									no : u.id,
									id : u.id,
									name : u.name,
									selected : ""
							};
							$scope.selectedUserList.push(d);
						}
						modalService.create("submitWorkflow", "modules/workflowV6/avicit-workflow-submit.html", $scope);
					}
				});
			}

			$scope.goPrevStep = function() {
				if(!confirm("确定退回上一步吗？")){
					return;
				}
				var postData = {
					body : angular.toJson({
						executionId : $scope.workflowModal.submitData.executionId,
						processInstanceId : $scope.workflowModal.submitData.processInstanceId,
						userName : $scope.loginModal.loginData.username,
						message : $scope.workflowModal.curOpinion,
						outcome : $scope.workflowModal.submitData.outcome,
						targetActivityName : $scope.workflowModal.submitData.targetActivityName
					}, false),
					command : "rejectToPrevAct"
				};
				requestService.requestDataNoCache(postData, function(json) {
					if(json.result == "success"){
						alert("退回成功");
						modalService.close($scope.waitDetailId);
						$scope.todoModal.doRefresh();
					}else{
						alert("退回失败");
					}
				});
			}

			$scope.goFirstStep = function() {
				if(!confirm("确定退回拟稿人吗？")){
					return;
				}
				var postData = {
					body : angular.toJson({
						executionId : $scope.workflowModal.submitData.executionId,
						processInstanceId : $scope.workflowModal.submitData.processInstanceId,
						userName : $scope.loginModal.loginData.username,
						message : $scope.workflowModal.curOpinion,
						outcome : $scope.workflowModal.submitData.outcome,
						targetActivityName : $scope.workflowModal.submitData.targetActivityName
					}, false),
					command : "rejectToFirstAct"
				};
				requestService.requestDataNoCache(postData, function(json) {
					if(json.result == "success"){
						alert("退回成功");
						modalService.close($scope.waitDetailId);
						$scope.todoModal.doRefresh();
					}else{
						alert("退回失败");
					}
				});
			}

			$scope.gotoOpinion = function(index) {
				modalService.create("todoOpinion", "modules/workflowV6/todoOpinion.html", $scope);
			}

			// 获取流程按钮权限和流程审批意见，流程意见按时间正序排列，最后一条为最新意见
			var postData = {
				body : angular.toJson({
					taskId : $scope.waitData.dbid,
					executionId : $scope.waitData.executionId,
					processInstanceId : $scope.waitData.processInstance,
					userName : $scope.loginModal.loginData.username
				}, false),
				command : "getOperateRights"
			};
			requestService.requestDataNoCache(postData, function(json) {
				var buttonArray = json.operateRight;
				// 只做单线流程，不考虑分支的情况
				$scope.workflowModal.isSubmit = false;// 提交
				$scope.workflowModal.isFirstStep = false;// 退回拟稿人
				$scope.workflowModal.isPrevStep = false;// 退回上一步
				$scope.workflowModal.curOpinion = "";//审批意见
				if (buttonArray != null) {
					for (var i = 0; i < buttonArray.length; i++) {
						var button = buttonArray[i];
						if (button.event == "dosubmit") {
							// 提交
							$scope.workflowModal.isSubmit = true;
							$scope.workflowModal.submitData = {
								processInstanceId : button.procinstDbid,
								executionId : button.executionId,
								taskId : button.taskId,
								outcome : button.name,
								targetActivityName : button.targetActivityName
							};
						} else if (button.event == "doretreattodraft") {
							// 退回拟稿人
							$scope.workflowModal.isFirstStep = true;
						} else if (button.event == "doretreattoprev") {
							// 退回上一步
							$scope.workflowModal.isPrevStep = true;
						}
					}
				}
				// 流程意见
				var trackList = json.trackList;
				$scope.workflowModal.opinionData = [];
				if (trackList != null) {
					for (var i = 0; i < trackList.length; i++) {
						var track = trackList[i];
						var d = {
							content : track.message,
							username : track.operateUserName,
							date : track.eTime
						};
						$scope.workflowModal.opinionData.push(d);
					}
				}
			});
		} ],
		templateUrl : 'modules/workflowV6/avicit-workflow.html'
	};
} ]);