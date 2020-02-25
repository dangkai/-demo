// url:upload to server's url; param:scope's variables in front need to be array
//<avicit-fileupload
//	url = 'http://10.216.77.219:8090/avicit-platform6-main/mobile/upload.do'
//	param = 'data'>
//</avicit-fileupload>
app.directive('listCardDirective', function(){
	return{
		restrict:'AE',
		template: function (elem, attr) {
		var temp = "";
		 temp+='<ion-content  http-directive ><ion-refresher pulling-text="{{refresh}}" on-refresh="doRefresh()"></ion-refresher>',
		  temp+='<div  style="height:0px;background:#ddd"></div>',
	     temp+=' <div class="list card" ng-repeat="data in mainList">',
	     temp+=' <div class="item  item-avatar">',
	     temp+=' <img src="img/myinfo_normal.png" />',
	     temp+='  <h2>Marty McFly</h2>',
	     temp+=' <p>November 05, 1955</p>',
	     temp+='</div>',
	     temp+=' <div class="item item-body">',
	     temp+='<img class="full-image" style="height:20%; width:100%" src="../../img/thumb-4.jpg">',
	    temp+='<p>菜鸟教程 -- 学的不仅是技术，更是梦想！<br>',
	     temp+=' 菜鸟教程 -- 学的不仅是技术，更是梦想！<br>',
	     temp+=' 菜鸟教程 -- 学的不仅是技术，更是梦想！<br>',
	     temp+='菜鸟教程 -- 学的不仅是技术，更是梦想！',
	      temp+='</p> <p>'
	      temp+='  <a href="#" class="subdued">1 喜欢</a>',
	      temp+='  <a href="#" class="subdued">5 评论</a>',
	     temp+=' </p>',
	     temp+=' </div></div></div><ion-content>';
			return temp;
		},

		controller:['$scope', '$ionicActionSheet', '$cordovaCamera', '$cordovaFileTransfer', 'PlatformConfigs',
			function($scope, $ionicActionSheet, $cordovaCamera, $cordovaFileTransfer, PlatformConfigs){
				  //初始化方方法
				   //刷新方法
				   //加载方法
				  
		}],
		link:function(scope, ele, attr){

		}
	};
});
