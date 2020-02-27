// url:upload to server's url; param:scope's variables in front need to be array
//<avicit-fileupload
//	url = 'http://10.216.77.219:8090/avicit-platform6-main/mobile/upload.do'
//	param = 'data'>
//</avicit-fileupload>
app.directive('listDirective', function(){
	return{
		restrict:'AE',
		template: function (elem, attr) {
		var temp = "";
	  temp+='<ion-content  http-directive ><ion-refresher pulling-text="{{refresh}}" on-refresh="doRefresh()"></ion-refresher>',
      temp+='<div  style="height:12px;background:#ddd"></div> <div class="list" ng-repeat="data in  Data track by $index" ng-click="detail(data)">',
      temp+= '<div class="item item-checkbox" ng-class="{true:\'list_div\'\,false:\'\list_div_test\'\}['+attr.flagshow+']"> '
      temp+= ' <label class="checkbox" ng-class="{true:\'\ list_visible_check_test\'\,false:\'\list_hidden_check_test\'\}['+attr.flagshow+']">',
      temp+='<input type="checkbox" checked="data.flag"> </label>',
      temp+=' <div class="item item-avatar" style="border:0px  solid ">',
      temp+=' <img src="{{data.url}}"/><h2>{{data.title}}</h2>',
      temp+='<p>{{data.time}}</p>',
      temp+='<p>{{data.time}}</p>',
      temp+='</div> </div> </div></ion-content>';
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
