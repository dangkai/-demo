app.controller('DetailCtrl',['$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout', 
function($scope, modalService, $http, $ionicScrollDelegate, $timeout){
	$scope.detailModal = {
		id: 'detail',
		
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
		
		loadData:function(){

		},
		
		text:"文本测试",
		
		inputtext:"文本输入框值",
		
		textarea:"多行文本输入框值",
		
		isChecked:true,
		
		airplaneMode:true,
		
		choice:{
			clientSide: 'bb'
		  },
		
		clientSideList : [
			{ text: "Backbone", value: "bb" },
			{ text: "Angular", value: "ng" },
			{ text: "Ember", value: "em" },
			{ text: "Knockout", value: "ko" }
		  ],
		  
		mydate:new Date(),
		
	};
}]);