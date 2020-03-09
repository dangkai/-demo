// url:upload to server's url; param:scope's variables in front need to be array
//<avicit-fileupload
//	url = 'http://10.216.77.219:8090/avicit-platform6-main/mobile/upload.do'
//	param = 'data'>
//</avicit-fileupload>
app.directive('listOperationDirective', function(){
	return{
		restrict:'AE',
		template: function (elem, attr) {
		var temp = "";
		 temp+='<div class="bar bar-header bar-positive"  align-title="center">',
        temp+=' <div class="buttons">',
		temp+='<button class="button button-icon ion-ios-arrow-left  button-clear" ng-if="!showReader"',
		temp+=' ng-click="goBack()">返回</button>',
		temp+='<button class="button button-icon  icon ion-ios-close-empty button-clear"',
		temp+='ng-if="showReader" ng-click="goBack()">',
		temp+='</button></div>',
		temp+='<h1 class="title">列表操作</h1>',
		temp+='<button class="button button-icon icon ion-ios-minus-outline" ng-click="showDelete=!showDelete"></button>',
		temp+='</div>',
	    temp+='<ion-content   class="content has-header"  ><ion-refresher pulling-text="{{refresh}}" on-refresh="doRefresh()"></ion-refresher>',
        temp+='<ion-list show-delete="showDelete" show-reorder="showReader">',
        temp+='<ion-item class="item-thumbnail-left item-remove-animate"  ng-repeat="item in items">',
		temp+='<img ng-src="{{item.img}}">',
        temp+='<h2>{{item.name}}</h2>',
        temp+='<p>{{item.date}}</p>',
		temp+='<h4>{{item.title}}</h4>',
        temp+='<ion-delete-button class="ion-minus-circled" ng-click="deleteItem($index)"></ion-delete-button>',
        temp+='<ion-reorder-button class="ion-navicon" on-reorder="moveItem(item, $fromIndex, $toIndex)"></ion-reorder-button>',
        temp+='<ion-option-button class="button-positive" ng-click="update(item)">编辑</ion-option-button>',
        temp+='<ion-option-button class="button-assertive" ng-click="deleteItem($index)">删除</ion-option-button>',
        temp+='</ion-item></ion-list>',
        temp+=' </ion-content>';
		return temp;
		},
		controller:['$scope', '$ionicActionSheet', '$cordovaCamera', '$cordovaFileTransfer', 'PlatformConfigs','modalService',
			function($scope, $ionicActionSheet, $cordovaCamera, $cordovaFileTransfer, PlatformConfigs,modalService){
		   $scope.showDelete=false;
		   $scope.goBack=function(){
			  if(!$scope.showReader){
				 modalService.close("list2");
			  }else{
				  $scope.showDelete=!$scope.howDelete;
				  $scope.$apply();
			  }
	      };
        /*删除方法的
		 */
		$scope.deleteItem = function(item) {
		$scope.items.splice(item, 1);
		};
		
		//编辑方法
		$scope.update=function(item){
		 console.log("item==="+JSON.stringify(item));
		};
		}],
		link:function(scope, ele, attr){
          
		}
	};
});
