app.controller('VpnCtrl',
['$scope', 'avicitMobileApi', '$avicitPluginVpn', '$ionicPopup',
function($scope, avicitMobileApi, $avicitPluginVpn, $ionicPopup){
	$scope.vpnModal = {
		id: 'vpn',
		
		close:function(){
			if (this.id != "")
				avicitMobileApi.closeTemplete(this.id);
		},
		
		init:function(){
			$avicitPluginVpn.init();
		},
		
		register:function(){
			$scope.data = {"groupId":"16040603", "phoneNum":"15601395579"};

			var myPopup = $ionicPopup.show({
				template: '<input type="text" ng-model="data.groupId" placeholder="集团号">' +
						'<br><input type="text" ng-model="data.phoneNum" placeholder="手机号">',
				title: '请输入集团号和手机号',
				scope: $scope,
				buttons: [
					{ text: '取消' },
					{
						text: '<b>确定</b>',
						type: 'button-positive',
						onTap: function(e) {
							if (!$scope.data) {
								e.preventDefault();
							} else {
								$avicitPluginVpn.register($scope.data.groupId, $scope.data.phoneNum);
							}
						}
					},
				]
			});
			myPopup.then(function(res) {
				console.log('Tapped!', res);
			});
			
		},
		
		download:function(){
			$scope.data1 = {"authCode":"10040030"};

			var myPopup1 = $ionicPopup.show({
				template: '<input type="text" ng-model="data1.authCode" placeholder="验证码">',
				title: '请输入验证码',
				scope: $scope,
				buttons: [
					{ text: '取消' },
					{
						text: '<b>确定</b>',
						type: 'button-positive',
						onTap: function(e) {
							if (!$scope.data1) {
								e.preventDefault();
							} else {
								$avicitPluginVpn.download($scope.data1.authCode);
							}
						}
					},
				]
			});
			myPopup1.then(function(res) {
				console.log('Tapped!', res);
			});
		},
		
		checkStatus:function(){
			$avicitPluginVpn.checkStatus().then(function (info) {
				console.log("checkStatus is : " + info);
		  	});
		},
		
		sslStart:function(){
			$avicitPluginVpn.sslStart();
		},
		
		sslStop:function(){
			$avicitPluginVpn.sslStop();
		},
		
		getApp:function(){
			$avicitPluginVpn.getApp();
		},
		
		isStarted:function(){
			$avicitPluginVpn.isStarted().then(function (state) {
				console.log("isStarted is : " + state);
		  	});
		}
		
	};
	
	$scope.vpnModal.init();
	
}]);