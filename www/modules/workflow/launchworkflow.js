app.controller('LaunchFlowCtrl', [ '$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout', '$sce', 'requestService', function($scope, modalService, $http, $ionicScrollDelegate, $timeout, $sce, requestService) {

	$scope.launchModal = {
		id : 'launch-workflow',
		workflowList : [],
		data : {},
		close : function() {
			if (this.id != "") {
				modalService.close(this.id);
			}
		}
	}

	$scope.doWorkflow = function() {
		var selectedData = $scope.launchModal.data;
		if(selectedData == null || !selectedData.dbid){
			alert("请选择要启动的流程！");
			return;
		}
		$scope.flowAfterFunc(selectedData);
		modalService.close($scope.launchModal.id);
	};
	
	var postData = {
		body : angular.toJson({
			formCode : $scope.workflowParam.formCode,
			userName : $scope.loginModal.loginData.username
		}, false),
		command : "findProcessDefinitionByFormCode"
	};
	requestService.requestDataNoCache(postData, function(json) {
		var processDefList = json.result;
		for (var i = 0; i < processDefList.length; i++) {
			var processDef = processDefList[i];
			var vo = {};
			vo.text = processDef.name;
			vo.value = {dbid:processDef.dbid};
			vo.version = processDef.version;
			vo.type = processDef.type;
			$scope.launchModal.workflowList.push(vo);
		}
	});

} ]);