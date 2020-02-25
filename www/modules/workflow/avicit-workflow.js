app.directive('workflowV5', [ 'modalService', '$http', '$ionicScrollDelegate', '$timeout', '$sce', 'requestService', function(modalService, $http, $ionicScrollDelegate, $timeout, $sce, requestService) {
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
				var workflowState = $scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"stepChange")||'';
				if (workflowState === "workflowOver"){
					var postData = {
							command : "doComplete",
							params : {loginName:"'" + $scope.loginModal.loginData.username + "'",entryId:$scope.waitData.entryId}
					}
					requestService.requestDataNoCache(postData, function(json) {
						if(json.retCode == "200"){
							alert("流程已完成");
							modalService.close($scope.waitDetailId);
							$scope.todoModal.doRefresh();
						}else{
							alert("操作失败");
						}
					});
				}else{
					var dealType = $scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"dealType")||'';
					if(dealType=="1"){
						//htmlStr += "&nbsp;&nbsp;处理方式为：单人处理<br>";
						nextUserId = $scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"nextUserId");
					}
					if(dealType=="2"){ 
						//htmlStr += "&nbsp;&nbsp;处理方式为：多人顺序<br>";
						nextUserId =$scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"nextUserId");
					}
					if(dealType=="3"){
						//htmlStr += "&nbsp;&nbsp;处理方式为：多人并行<br>";
						nextUserId = $scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"doNextUserId");
					}
					if(dealType=="4"){
						//htmlStr += "&nbsp;&nbsp;处理方式为：多人任意<br>";
						nextUserId = $scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"nextUserId");
					}
					if(dealType=="5"){
						//htmlStr += "&nbsp;&nbsp;处理方式为：多人并发<br>";
						nextUserId = $scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"nextUserId");
					}
					
					var postData = {
							command : "getUserSelectForFlow",
							params : {
									loginName : "'" + $scope.loginModal.loginData.username + "'",
									entryId : $scope.waitData.entryId
								},
							body : angular.toJson({
								dto1 : $scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0],"currentStepNo")||'',
								dto2 : $scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"stepNo")||'',
								dto3: decodeURI(nextUserId)
							}, false)
					}
					$scope.selectedUserList = [];
					requestService.requestDataNoCache(postData, function(json) {
						var result = angular.fromJson(json.responseBody);
						for (var i = 0; i < result.length; i++) {
							var u = result[i];
							var d = {
									no : u.deptname,
									id : u.userId,
									name : u.userName,
									selected : ""
							};
							$scope.selectedUserList.push(d);
						}
						modalService.create("submitWorkflow", "modules/workflow/avicit-workflow-submit.html", $scope);
					
				// 提交获取候选节点及人员数据
//				var postData = {
//				    params : {loginName : "'" + $scope.loginModal.loginData.username + "'"},
//					body : angular.toJson({
//						entryId : $scope.waitData.entryId,
//						currentStepId : $scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0],"currentStepId")||'',
//						currentStepNo : $scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0],"currentStepNo")||'',
//						actionId : $scope.buttonData.currentStep[0].action[0].actionId[0],
//						nextStepNos : $scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"stepNo")||'',
//						superSelects : $scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"superSelect")||'1',
//						userSelectShows:$scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"userSelecShow")||'',
//						dealTypes:$scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"dealType")||'',
//						userTypes:$scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"userType")||'',
//						nextUsersId:'['+$scope.getElementByName($scope.buttonData.currentStep[0].action[0].nextStepDesc[0],"allUserId")+']'||''
//					}, false),
//					command : "getWorkflowUser"
//				};
//				$scope.selectedUserList = [];
//				requestService.requestDataNoCache(postData, function(json) {
//					var result = angular.fromJson(json.responseBody);
//					var userList = result.response.rs[0].nd[0].nd_user;
//					for (var i = 0; i < userList.length; i++) {
//						var u = userList[i];
//						var d = {
//								no : u.deptname[0],
//								id : u.userid[0],
//								name : u.usertruename[0],
//								selected : ""
//						};
//						$scope.selectedUserList.push(d);
//					}
//					modalService.create("submitWorkflow", "modules/workflow/avicit-workflow-submit.html", $scope);
				
//					var activityType = json.taskUserSelect.activityType;
//					if(activityType == "end"){
//						if(!confirm("确定提交流程吗？")){
//							return;
//						}
//						var postData1 = {
//							body : angular.toJson({
//								taskId : $scope.workflowModal.submitData.taskId,
//								processInstanceId : $scope.workflowModal.submitData.processInstanceId,
//								outcome : $scope.workflowModal.submitData.outcome,
//								userName : $scope.loginModal.loginData.username,
//								targetActivityName : $scope.workflowModal.submitData.targetActivityName,
//								selectedUser : [],
//								message : $scope.workflowModal.curOpinion
//							}, false),
//							command : "completeTask"
//						};
//						requestService.requestDataNoCache(postData1, function(json1) {
//							if(json1.result == "success"){
//								alert("提交成功");
//								modalService.close($scope.waitDetailId);
//								$scope.todoModal.doRefresh();
//							}else{
//								alert("提交失败");
//							}
//						});
//					}else{
//						var userList = json.taskUserSelect.nextTask[0].userList;
//						for (var i = 0; i < userList.length; i++) {
//							var u = userList[i];
//							var d = {
//									no : u.id,
//									id : u.id,
//									name : u.name,
//									selected : ""
//							};
//							$scope.selectedUserList.push(d);
//						}
//						modalService.create("submitWorkflow", "modules/workflow/avicit-workflow-submit.html", $scope);
//					}
				});
			}
			}
			
			$scope.getElementByName = function(obj,tagName){ 
				for (var atr in obj){
					if (atr == tagName){
						var rs = "";
						for (var j=0,len=obj[atr].length;j<len;j++){
							rs += obj[atr][j] + ";";
						}
						return rs.substring(0,rs.length-1);
					}else if (obj[atr] instanceof Array){
						for (var i=0,l=obj[atr].length;i<l;i++){
							var rs = $scope.getElementByName(obj[atr][i],tagName);
							if (typeof(rs)!=="undefined" && rs != ""){
								return rs;
							}
						}
					}else{
						return "";
					}
					
				}
				
			}

			$scope.goPrevStep = function() {
				if(!confirm("确定退回上一步吗？")){
					return;
				}
				var postData = {
						command : "goPreStep",
						params : {
							loginName:"'" + $scope.loginModal.loginData.username + "'",
							entryId:$scope.waitData.entryId,
							formId:"'" + $scope.waitData.formId + "'",
							currentActionId:"'" + $scope.buttonData.currentStep[0].action[0].actionId[0] + "'"
						},
						body : angular.toJson({
							dto1 : $scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0].specialActionDesc[0],"currentId")||'',
							dto2 : $scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0].specialActionDesc[0],"fetchType")||'',
							dto3 : $scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0].specialActionDesc[0],"currentStepNo")||'',
							dto4 : $scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0].specialActionDesc[0],"currentDealType")||'',
							dto5 : $scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0].specialActionDesc[0],"pervStepId")||'',
							dto6 : $scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0].specialActionDesc[0],"pervStepNo")||'',
							dto7 : $scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0].specialActionDesc[0],"currentFirInid")||'',
							dto8 : $scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0].specialActionDesc[0],"caller")||'',
							dto9 : $scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0].specialActionDesc[0],"userId")||'',
							dto10 :  $scope.workflowModal.curOpinion
						},false)
				}
				requestService.requestDataNoCache(postData, function(json) {
					if(json.retCode == "200"){
						alert("退回成功");
						modalService.close($scope.waitDetailId);
						$scope.todoModal.doRefresh();
					}else{
						alert("退回失败");
					}
				});
				/*var postData = {
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
				});*/
			}

			$scope.goFirstStep = function() {
				if(!confirm("确定退回拟稿人吗？")){
					return;
				}
				
				var postData = {
						command : "goFirstStep",
						params : {
							loginName : "'" + $scope.loginModal.loginData.username + "'",
							entryId : "'" + $scope.waitData.entryId + "'",
							formId:"'" + $scope.waitData.formId + "'",
							currentActionId: $scope.buttonData.currentStep[0].currentStepStatus[0].currentStepId[0]
						},
						body : angular.toJson({
							dto1:$scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0].specialActionDesc[0],"doBackToNextReader")||'',
							dto2:$scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0].specialActionDesc[0],"doBackCaller")||'',
							dto3:$scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0].specialActionDesc[0],"doBackToNextReaderId")||'',
							dto4:$scope.workflowModal.curOpinion
						},false)
				}
				requestService.requestDataNoCache(postData, function(json) {
					if(json.retCode == "200"){
						alert("退回成功");
						modalService.close($scope.waitDetailId);
						$scope.todoModal.doRefresh();
					}else{
						alert("退回失败");
					}
				});
				
				/*var postData = {
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
				});*/
			}

			$scope.gotoOpinion = function(index) {
				var postData = {
						command : "getTrackStep",
						params : {
							entryId:$scope.waitData.entryId
						},
						body : angular.toJson({
							dto1 : $scope.getElementByName($scope.buttonData.currentStep[0].currentStepStatus[0],"currentStepId")||'',
							dto2 : '',
							dto3 : '',
							dto4 : '',
							dto5 : ''
						},false)
				}
				requestService.requestDataNoCache(postData, function(json) {
					var trackList = json.responseBody.rows;
					$scope.workflowModal.opinionData = [];
					if (trackList != null) {
						for (var i = 0; i < trackList.length; i++) {
							var track = trackList[i];
							var d = {
								content : (track.idea|| "无意见") + " : "+ track.stepname,
								username : track.caller,
								date : track.dotime || "未审批"
							};
							$scope.workflowModal.opinionData.push(d);
						}
					}

					modalService.create("todoOpinion", "modules/workflow/todoOpinion.html", $scope);
				});
				
			}
			
			var postButton = {
					command : "getButtons",
					params : {loginName:"'"+$scope.loginModal.loginData.username+"'",entryId:"'" +$scope.waitData.entryId+"'"}
			}
			
			requestService.requestDataNoCache(postButton, function(json) {
				$scope.workflowModal.isSubmit = true;// 提交
				$scope.workflowModal.isFirstStep = false;// 退回拟稿人
				$scope.workflowModal.isPrevStep = false;// 退回上一步
				$scope.workflowModal.curOpinion = "";//审批意见
				$scope.workFlowData = angular.fromJson(json.responseBody);
				console.log(JSON.stringify($scope.workFlowData.root.response[1].rs[0]));
				$scope.buttonData = $scope.workFlowData.root.response[1].rs[0];
				var existButton = $scope.workFlowData.root.response[1].rs[0].currentStep[0].currentStepStatus[0].specialAction[0];
				for (var i=0,length = existButton.split(";").length;i<length;i++){
					var x = existButton.split(";")[i];
					if (x==='doBackToNext01'){
						$scope.workflowModal.isFirstStep = true;
					}else if (x==="doBackToNext02"){
						$scope.workflowModal.isPrevStep = true;
					}
					
				}
			});

//			// 获取流程按钮权限和流程审批意见，流程意见按时间正序排列，最后一条为最新意见
//			var postData = {
//				body : angular.toJson({
//					taskId : $scope.waitData.dbid,
//					executionId : $scope.waitData.executionId,
//					processInstanceId : $scope.waitData.processInstance,
//					userName : $scope.loginModal.loginData.username
//				}, false),
//				command : "getOperateRights"
//			};
//			requestService.requestDataNoCache(postData, function(json) {
//				var buttonArray = json.operateRight;
//				// 只做单线流程，不考虑分支的情况
//				$scope.workflowModal.isSubmit = false;// 提交
//				$scope.workflowModal.isFirstStep = false;// 退回拟稿人
//				$scope.workflowModal.isPrevStep = false;// 退回上一步
//				$scope.workflowModal.curOpinion = "";//审批意见
//				if (buttonArray != null) {
//					for (var i = 0; i < buttonArray.length; i++) {
//						var button = buttonArray[i];
//						if (button.event == "dosubmit") {
//							// 提交
//							$scope.workflowModal.isSubmit = true;
//							$scope.workflowModal.submitData = {
//								processInstanceId : button.procinstDbid,
//								executionId : button.executionId,
//								taskId : button.taskId,
//								outcome : button.name,
//								targetActivityName : button.targetActivityName
//							};
//						} else if (button.event == "doretreattodraft") {
//							// 退回拟稿人
//							$scope.workflowModal.isFirstStep = true;
//						} else if (button.event == "doretreattoprev") {
//							// 退回上一步
//							$scope.workflowModal.isPrevStep = true;
//						}
//					}
//				}
//				// 流程意见
//				var trackList = json.trackList;
//				$scope.workflowModal.opinionData = [];
//				if (trackList != null) {
//					for (var i = 0; i < trackList.length; i++) {
//						var track = trackList[i];
//						var d = {
//							content : track.message,
//							username : track.operateUserName,
//							date : track.eTime
//						};
//						$scope.workflowModal.opinionData.push(d);
//					}
//				}
//			});
		} ],
		templateUrl : 'modules/workflow/avicit-workflow.html'
	};
} ]);