app.controller('BulletinDetailCtrl',['$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout','$sce', 'requestService',
function($scope, modalService, $http, $ionicScrollDelegate, $timeout,$sce,requestService){

	$scope.setImgWidth = function(html) {
		var objE = document.createElement("div");
		objE.innerHTML = html;
		var imgs = objE.getElementsByTagName("img");
		for (var i=0;i<imgs.length;i++){
			imgs[i].style.maxWidth = "100%";
		}
		return objE.innerHTML;
	};

	$scope.contentForRest = "";

	$scope.detailModal = {
		id: 'bulletinDetail',
		
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
		
		loadData:function(){
			var postData = {
							params:{id:$scope.data.listData[$scope.itemIndex].id},
							command:"getBulletinContent"
						};
			requestService.requestDataNoCache(postData, function(data){
				$scope.contentForRest = $sce.trustAsHtml($scope.setImgWidth(data.content));
			});
			/*var url = 'http://219.141.240.105:10001/api/platform6/demo/DemoBulletin/getBulletinContent/'+$scope.data.listData[$scope.itemIndex].id+'/v1';
			$http.get(url).success(function(data){
				$scope.contentForRest = $sce.trustAsHtml($scope.setImgWidth(data.content));
			});*/
		},
		
		detailList:$scope.data.listData[$scope.itemIndex]
	
	};
	$scope.detailModal.loadData();

}]);