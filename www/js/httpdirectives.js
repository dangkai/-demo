// url:upload to server's url; param:scope's variables in front need to be array
//<avicit-fileupload
//	url = 'http://10.216.77.219:8090/avicit-platform6-main/mobile/upload.do'
//	param = 'data'>
//</avicit-fileupload>
app.directive('httpDirective', function(){
	return{
		restrict:'AE',
        controller:['$scope', '$ionicActionSheet', '$cordovaCamera', '$cordovaFileTransfer', 
		'PlatformConfigs','requestServiceTest','$http',
			function($scope, $ionicActionSheet, $cordovaCamera, $cordovaFileTransfer, 
			PlatformConfigs,requestServiceTest,$http){
				//分页标记flag
				$scope.flag=false;
				//数据源标记
			$scope.Data=[{title:"Ionic4 卡片组件ion-card-content,Ionic4 卡片组件ion-card-content",
			flag:false,time:'2019-09-09',url:'img/myinfo_normal.png'},
			{title:"Ionic4 卡片组件ion-card-content",flag:false,time:'2019-09-09',url:'img/myinfo_normal.png'},
			{title:"Ionic4 卡片组件ion-card-content",flag:false,time:'2019-09-09',url:'img/myinfo_normal.png'},
			{title:"Ionic4 卡片组件ion-card-content",flag:false,time:'2019-09-09',url:'img/myinfo_normal.png'},
			{title:"Ionic4 卡片组件ion-card-content",flag:false,time:'2019-09-09',url:'img/myinfo_normal.png'},
			{title:"Ionic4 卡片组件ion-card-content",flag:false,time:'2019-09-09',url:'img/myinfo_normal.png'}];
	        //列表操作
			 $scope.items=[];
	            /*
			   *@description
				* 基本服务请求
			   */
				var  url="https://iam.cn-north-4.myhuaweicloud.com/v3/auth/tokens";
				
				//发送一个连接方法
				$scope.initData=function(){
				data={
				"auth": {
				"identity": {
				"methods": ["password"],
				"password": {
				"user": {
				"name": "hw01316305",
				"password": "dangkai9527",
				"domain": {
				"name": "hw01316305"
				}
				}
				}
				},
				"scope": {
				"project": {
				"name": "cn-north-4"
				}
				}
				}
				},
				transFn=function(data) {
				return $.param(data);
				},
				config={
				headers:{'Content-Type':'application/json;charset=UTF-8'},
				// transformRequest: transFn
				};
				$http.post(url, data, config).
				success(function(data, status, headers, config) {
				 $scope.items=data.List;
				}).
				error(function(data, status, headers, config) {
				console.log("error==="+JSON.stringify(data));
				});

				};

                /*
			   *@description
				* mock使用
			   */
          Mock.mock(url,{
			"List|5-10":[
			 { 
			 'img':'../../img/thumb-4.jpg',
			 'title':'@sentence(3)',
			 'name':'@cname',
			 'date':'@date(yyyy-MM-dd)'
				}
			] 
		  });


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
			 
			  };
			  //初始化
			  $scope.initData();
		}],
		link:function(scope, ele, attr){
		
		}
	};
});
