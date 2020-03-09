app.controller('HomeCtrl',['$scope', 'modalService', '$ionicPlatform', 
'$ionicPopup', '$ionicSlideBoxDelegate', '$avicitPluginJPush', 'PlatformConfigs',
function($scope, modalService, $ionicPlatform, 
$ionicPopup, $ionicSlideBoxDelegate, $avicitPluginJPush, PlatformConfigs){
	$scope.homeModal = {
		id: 'home',

		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},

		loadData:function(){

		},

		Data : [],

		//update ion-slide
		//$ionicSlideBoxDelegate.update();

	};
	//console.log(ionic.Platform.platform());
	if(!PlatformConfigs.develop && ionic.Platform.platform() == 'android'){
		$avicitPluginJPush.init();
	}

	$scope.$on('$destroy', $ionicPlatform.registerBackButtonAction(
	    function(){
	        var confirmExit = $ionicPopup.confirm({
                title:'确认退出程序?',
                cancelText:'取消',
                okText:'退出'
            });
            confirmExit.then(function(res){
                if(res){
                    ionic.Platform.exitApp();
                    console.log('YES');
                }else{
                    console.log('NO');
                }
            });
	    }, 209, 1));

	$scope.open = function(type){
		if(type == '1')
			modalService.create("list1","modules/list/list.html", $scope);
		else if(type == '2')
			modalService.create("list2","modules/list/flightAdd.html", $scope);
		else if(type == '3')
			modalService.create("list3","modules/list/flightDetail.html", $scope);
		else if(type == '4')
			modalService.create("detail","modules/detail/detail.html", $scope);
		else if(type == '5')
			modalService.create("add","modules/add/add.html", $scope);
		else if(type == '6')
			modalService.create("bulletin","modules/bulletin/bulletin.html",$scope);
		else if(type == '7')
			modalService.create("meeting","modules/meeting/meeting.html",$scope);
		else if(type == '8')
			modalService.create("todoV5","modules/todo/todo.html",$scope);
		else if(type == '9')
			modalService.create("contact","modules/contact/contact.html",$scope);
		else if(type == '10')
			modalService.create("todoV5","modules/todoV5/todo.html",$scope);
		else if(type == '11')
			modalService.create("demo","modules/demo/demo.html",$scope);

	}

	$scope.turn = function(type){
		switch(type){
			case 0:
				modalService.create("barcode", "modules/plugin/barcode.html", $scope);
				break;
			case 1:
				modalService.create("camera", "modules/plugin/camera.html", $scope);
				break;
			case 2:
				break;
			case 3:
				modalService.create("ngcontact", "modules/plugin/contact.html", $scope);
				break;
			case 4:
				modalService.create("datepicker", "modules/plugin/datepicker.html", $scope);
				break;
			case 5:
				modalService.create("device", "modules/plugin/device.html", $scope);
				break;
			case 6:
				modalService.create("filedownload", "modules/plugin/filedownload.html", $scope);
				break;
			case 7:
				modalService.create("flashlight", "modules/plugin/flashlight.html", $scope);
				break;
			case 8:
				modalService.create("media", "modules/plugin/media.html", $scope);
				break;
			case 9:
				modalService.create("network", "modules/plugin/network.html", $scope);
				break;
			case 10:
				modalService.create("preference", "modules/plugin/preference.html", $scope);
				break;
			case 11:
				modalService.create("sqlite", "modules/plugin/sqlite.html", $scope);
				break;
			case 12:
				modalService.create("toast", "modules/plugin/toast.html", $scope);
				break;
			case 13:
				modalService.create("open", "modules/plugin/open.html", $scope);
				break;
			case 14:
				modalService.create("lock", "modules/lock/lock.html", $scope);
				break;
			case 15:
				modalService.create("launch", "modules/launch/launch.html", $scope);
				break;
		}
	};

	$scope.getLocation = function(){
//		avicit.plugin.get(
//		function(){
//			alert(1);
//		},function(){
//			alert(2);
//		}, '', '');
	}

}]);

app.controller('SettingCtrl', ['$scope', 'PlatformConfigs', 'preferencesService', '$ionicPopup',
function($scope, PlatformConfigs, preferencesService, $ionicPopup){
	$scope.settingsList = PlatformConfigs.settingOpt;
	console.log(JSON.stringify(PlatformConfigs.settingOpt));
	$scope.settingchage = function(item){
		console.log(JSON.stringify(item));
		var key = "setting.opt.http";
		var val = item.checked;
		if(item.type === "anim"){
			key = "setting.opt.animation";
		}
		preferencesService.put(key, val, function(data){
			PlatformConfigs.settingOpt = $scope.settingsList;
		}, function(data){
			console.log("no sql excutes");
		});
	};

	$scope.showpopup = function(){
		$scope.data = {};
		var myPopup = $ionicPopup.show({
			template: '<input type="text" ng-model="data.wifi" placeholder="例如:http://219.141.240.105:8009">',
			title: '请输入地址',
			scope: $scope,
			buttons: [
				{ text: '取消' },
				{
					text: '<b>初始</b>',
					onTap: function(e) {
						e.preventDefault();
						PlatformConfigs.setUrl('http://219.141.240.105:8009');
						preferencesService.remove('platform.url');
						myPopup.close();
					}
				},
				{
					text: '<b>保存</b>',
					type: 'button-positive',
					onTap: function(e) {
						if ($scope.data.wifi) {
							e.preventDefault();
							preferencesService.put('platform.url', $scope.data.wifi, function(data){
								if(data){
									PlatformConfigs.setUrl($scope.data.wifi);
								}
							}, function(data){
								console.log("no sql excutes");
							});
							PlatformConfigs.setUrl($scope.data.wifi);
							myPopup.close();
						}
					}
				},
			]
		});
	};



}]);
