app.controller('DemoAddCtrl',
['$scope', 'requestService', 'avicitMobileApi', 
function($scope, requestService, avicitMobileApi){
	$scope.demoaddModal = {
		id: 'modules/demo/demo-add.html',
		
		close:function(){
			if (this.id != "")
				avicitMobileApi.closeTemplete(this.id);
		},
		
		data : {
			
		},
		
		colors : [
			  {name:'black', shade:'dark'},
			  {name:'white', shade:'light'},
			  {name:'red', shade:'dark'},
			  {name:'blue', shade:'dark'},
			  {name:'yellow', shade:'light'}
			],
		
		submit : function(form){
			//alert(JSON.stringify($scope.demoaddModal.data));
			//var postData = {
			//	params:$scope.demoaddModal.data,
			//	command:"submitDemo"
			//};
			//requestService.requestDataNoCache(postData, function(data){
			//	console.log(JSON.stringify(data));
			//});
			
			console.log(form.$submitted || form.uEmail.$touched);
			console.log("form.uEmail.$error.required="+form.uEmail.$error.required);
			console.log("form.uEmail.$error.email="+form.uEmail.$error.email);
			console.log("form.uEmail.$error.integer="+form.uEmail.$error.integer);
			if(form.uEmail.$error.required){
				alert("请输入内容！");
				return;
			}
			if(form.uEmail.$error.email){
				alert("请输入正确邮箱！");
				return;
			}
			if(form.uTest.$error.required){
				alert("请输入内容！");
				return;
			}
			if(form.uTest.$error.integer){
				alert("请输入数字！");
				return;
			}
			alert(JSON.stringify($scope.demoaddModal.data));
			//弹出流程选择框，在这里传formCode, 定义选择到流程后的回调函数
			avicitMobileApi.doWorkflow({formCode:"demoBusinessFlowR3"}, function(selectedData){
				alert(selectedData.dbid);
				//这里调用自己的服务，保存数据并启动流程，所选择的流程id为：selectedData。dbid
				avicitMobileApi.closeTemplete($scope.demoaddModal.id);
			}, $scope);
		},
		
	};
	
	$scope.master = {};

	$scope.update = function(user, form) {
		console.log(form.$submitted || form.uEmail.$touched);
		console.log("form.uEmail.$error.required="+form.uEmail.$error.required);
		console.log("form.uEmail.$error.email="+form.uEmail.$error.email);
		console.log("form.uEmail.$error.integer="+form.uEmail.$error.integer);
		if(form.uEmail.$error.required){
			alert("请输入内容！");
			return;
		}
		if(form.uEmail.$error.email){
			alert("请输入正确邮箱！");
			return;
		}
		if(form.uTest.$error.required){
			alert("请输入内容！");
			return;
		}
		if(form.uTest.$error.integer){
			alert("请输入数字！");
			return;
		}
		console.log("SUCCESS");
		$scope.master = angular.copy(user);
	};

	$scope.reset = function(form) {
		if (form) {
			form.$setPristine();
			form.$setUntouched();
		}
		$scope.user = angular.copy($scope.master);
	};

	$scope.reset();
	
}]);

app.directive('integer', function() {
	var INTEGER_REGEXP = /^\-?\d+$/;
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }
        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          return true;
        }
        // it is invalid
        return false;
      };
    }
  };
});