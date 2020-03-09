// url:upload to server's url; param:scope's variables in front need to be array
//<avicit-fileupload
//	url = 'http://10.216.77.219:8090/avicit-platform6-main/mobile/upload.do'
//	param = 'data'>
//</avicit-fileupload>
app.directive('listOperationCircleDirective', function(){
	return{
		restrict:'AE',
		template: function (elem, attr) {
		var temp = "";
		temp+='<ion-header-bar class="bar-positive" align-title="center">',
		temp+='<div class="buttons">',
		temp+='<button class="button button-icon icon ion-ios-arrow-left button-clear" ng-click="goBack()">',
		temp+='返回</button></div>',
		temp+='	<h1 class="title">'+attr.title+' <span  ng-if="selectedArr.length>0&&flagShow" ',
		temp+='style="font-size:0.2rem;color:white">( {{selectedArr.length}} )</span>',
		temp+='</h1><div class="buttons" >',
		temp+='	<button class="button button-icon icon ion-ios-plus-empty" ng-click="moveItem()"></button>',
		temp+='</div></ion-header-bar>',
		temp+='<div   ng-class="{false:\'\list_show_delete_style  \'\,true:\'\list_hidden_delete_style\'\}[!flagShow]"',
		temp+='ng-click="deletecicrleFun()"  style=" position: absolute;top:67%;left:84%;text-align:center;width:3rem;height:3rem;border-radius:50%;',
	    temp+='z-index: 99;background: red;line-height: 14px;display: flex;justify-content: center;align-items:center;"> ',
		temp+='<i class="icon  icon ion-trash-a" style="color:white;font-size:1.5rem" ></i></div>',
		temp+='<div   ng-class="{false:\'\ list_show_allSelect_style\'\,true:\'\list_hidden_allSelect_style \'\}[!flagShow]"  ',
		temp+=' ng-click="allcicrleFun()"  ',
		temp+=' style=" position: absolute;top:79%;left:84%;padding: 0.2rem 1.5rem;width:3rem;',
		temp+=' height:3rem;border-radius:50%;z-index: 99;background: yellow;line-height: 14px;display: flex;justify-content: center;align-items:center;" ',
		temp+=' ng-click="deleteFun()"> ',
		temp+='<i class="icon  icon ion-ios-browsers-outline" style="color:white;font-size:1.5rem"></i></div>',
		temp+='<div style=" position: absolute;top:90%;left:82%;padding: 0.2rem 1.5rem;',
		temp+='width:4rem;height:4rem;border-radius:50%;z-index: 99;',
		temp+='background:greenyellow;line-height: 14px;',
		temp+='display: flex;justify-content: center;align-items:center;" ng-click="deleteFun()">',
		temp+='<i class="icon  ion-ios-compose-outline" style="color:white;font-size:2.5rem"></i></div>',
	  temp+='<ion-content><ion-refresher pulling-text="{{refresh}}" on-refresh="doRefresh()"></ion-refresher>',
	  temp+='<div style="height:12px;background:#ddd"></div> <div class="list" ng-repeat="data in  Data track by $index" ng-click="detail(data)">',
      temp+= '<div class="item item-checkbox" ng-class="{true:\'list_div\'\,false:\'\list_div_test\'\}['+attr.flagshow+']"> '
      temp+= ' <label class="checkbox" ng-class="{true:\'\ list_visible_check_test\'\,false:\'\list_hidden_check_test\'\}['+attr.flagshow+']">',
      temp+='<input type="checkbox"  ng-model="data.flag"  ng-checked="data.flag"> </label>',
      temp+=' <div class="item item-avatar" style="border:0px  solid ">',
      temp+=' <img src="{{data.url}}"/><h2>{{data.title}}</h2>',
      temp+='<p>{{data.time}}</p>',
      temp+='<p>{{data.time}}</p>',
      temp+='</div> </div> </div>',
	  temp+=' </ion-content>';
		return temp;
		},
		controller:['$scope', '$ionicActionSheet', '$cordovaCamera', '$cordovaFileTransfer', 'PlatformConfigs','modalService',
			function($scope, $ionicActionSheet, $cordovaCamera, $cordovaFileTransfer, PlatformConfigs,modalService){
	      //显示选中标记
	     $scope.flagShow=false;
	     $scope.flagTest=false;
				$scope.allSelectFlag=true;
	/**
	 * @params [string]  返回字符串
	 * @descriptionflagShow
	 *  返回函数
	 */
	 $scope.goBack=function(){
	   modalService.close("list3");
	  };
	
	/**
	 * @description
	 *  点击方法
	 */
	$scope.deleteFun=function(){
	  $scope.flagShow=! $scope.flagShow;
	};
	$scope.checkdFlag=false;
	$scope.count=0;
	//选中数组
	
	$scope.$watch('Data',function(newVlalue,oldVale){
		  $scope.selectedArr=[];
		  for(var a  in  $scope.Data){
				if($scope.Data[a].flag==true){
					$scope.selectedArr.push($scope.Data[a]);
					 $scope.checkdFlag=true;
				}
			}
			$scope.checkdFlag=false;
	},true);
	//循环显示
		 $scope.moveItem=function(){
					 for(var a  in  $scope.Data){
						 	console.log("Data[a].flag===="+$scope.Data[a].flag);
						  if(true==$scope.Data[a].flag){
							 // Data.splice(a,1);  
						  };
					 }
				 };
				 	 //确认删除
	    $scope.deletecicrleFun=function(){
			    alert("确认删除");
		 };
		 //全选与反选
	     $scope.allcicrleFun=function(){
			if(	$scope.allSelectFlag){
				console.log("$scope.allSelectFlag=="+$scope.allSelectFlag);
				for(var a in $scope.Data){
				   $scope.Data[a].flag=true;
					}
			}else{
					for(var a in $scope.Data){
						$scope.Data[a].flag=false;
						}
			}
			$scope.allSelectFlag=!$scope.allSelectFlag;
		 };
	
		}],
		link:function(scope, ele, attr){
          
		}
	};
});
