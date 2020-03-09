/*
* workflow service
*/
angular.module('avicit.platform.mobile.services.workflow', [])
.factory('workflowService', ['modalService',function(modalService){
    return{
        
    	doWorkflow : function(formParam, func, $scope){
    		if (formParam.hasOwnProperty("formCode")){
	    		$scope.workflowParam = formParam;
	    		$scope.flowAfterFunc = func;
	    		modalService.create("launch-workflow", "modules/workflowV6/launchworkflow.html", $scope);
    		}else{
    			alert("流程提交参数格式错误，请检查！");
    			return;
    		}
    	}

    }
}])
;