// url:upload to server's url; param:scope's variables in front need to be array
//<avicit-fileupload
//	url = 'http://10.216.77.219:8090/avicit-platform6-main/mobile/upload.do'
//	param = 'data'>
//</avicit-fileupload>
app.directive('httpDirective', function(){
	return{
		restrict:'AE',
        controller:['$scope', '$ionicActionSheet', '$cordovaCamera', '$cordovaFileTransfer', 
		'PlatformConfigs','requestServiceTest',
			function($scope, $ionicActionSheet, $cordovaCamera, $cordovaFileTransfer, 
			PlatformConfigs,requestServiceTest){
				//分页标记flag
				$scope.flag=false;
				//数据源标记
				$scope.Data=[];
	            /*
			   *@description
				* 基本服务请求
			   */
				$scope._init=function(){
// 				requestServiceTest.requestParam($scope.params,function(succ){
// 					//成功显示内容
// 					$scope.Data=succ.params;
// 					if($scope.Data.length==succ.total){
// 						$scope.flag=true;
// 					};
// 				},function(error){
// 					//
// 					$scope.flag=false;
// 				});
			 $scope.Data=[{title:"Ionic4 卡片组件ion-card-content,Ionic4 卡片组件ion-card-content",
				   flag:false,time:'2019-09-09',url:'img/myinfo_normal.png'},
				  {title:"Ionic4 卡片组件ion-card-content",flag:false,time:'2019-09-09',url:'img/myinfo_normal.png'},
				  {title:"Ionic4 卡片组件ion-card-content",flag:false,time:'2019-09-09',url:'img/myinfo_normal.png'},
				  {title:"Ionic4 卡片组件ion-card-content",flag:false,time:'2019-09-09',url:'img/myinfo_normal.png'},
				  {title:"Ionic4 卡片组件ion-card-content",flag:false,time:'2019-09-09',url:'img/myinfo_normal.png'},
				  {title:"Ionic4 卡片组件ion-card-content",flag:false,time:'2019-09-09',url:'img/myinfo_normal.png'}];
				};
			  /*
			   *@description
				* 下拉刷新
			   */
			  $scope.refResh=function(){
			  requestServiceTest.refreshAndload($scope.params,function(succ){
			  },function(error){
				  
			  },true);
			  };
			   /*
			   *@description
			  * 分页方法
			   */
			  $scope.moreLoad=function(){
			   requestServiceTest.refreshAndload($scope.params,function(succ){
							  
			  },function(error){
							  
			  },false);
			  alert();
			  };
			  //初始化
			  $scope._init();
		}],
		link:function(scope, ele, attr){
		
		}
	};
});
