app.controller('DemoDetailCtrl',
['$scope', 'avicitMobileApi', 
function($scope, avicitMobileApi){
	$scope.demodetailModal = {
		id: 'modules/demo/demo-detail.html',
		
		close:function(){
			if (this.id != "")
				avicitMobileApi.closeTemplete(this.id);
		},
		
		data : [
			
		],
		
		loadData : function(){
			var postData = {
				params:{id:$scope.demoModal.detailid+""},
				command:"getBulletinContent"
			};
			avicitMobileApi.sendRequest(true, postData, function(data){
				console.log(JSON.stringify(data));
				$scope.demodetailModal.data.finishDate = "2016-04-15";
				$scope.demodetailModal.data.finishTime = "17:00";
				$scope.demodetailModal.data.title = "Demo Detail Title";
				$scope.demodetailModal.data.content = data.content;
			});
		},
	};
	
	console.log($scope.demoModal.detailid);
	$scope.demodetailModal.loadData();
	
}]);