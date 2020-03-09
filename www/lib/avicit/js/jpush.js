/*
* get all http url
*/
angular.module('avicit.platform.mobile.services.jpush', [])
.factory('JpushService', ['$window', '$document','$cordovaLocalNotification', 'rtdataService',
function($window, $document,$cordovaLocalNotification,rtdataService){
   var jpushFactory={};
   var extras = {};
   var _self=this;
   //初始化激光推送
   var _init=function(){
	   	$window.plugins.jPushPlugin.setDebugMode(true);//设置测试模式
	  	$window.plugins.jPushPlugin.init();
		//打开推送消息事件处理
		$window.plugins.jPushPlugin.openNotificationInAndroidCallback = function(data){
            var json = data;
             console.log("jinaurle");
              notifiyService.sendNotifiy('1','测试通知标题','这是一个测试通知内容 ');
            if(typeof data === 'string'){
                json=JSON.parse(data);
            }
            var id = json.extras['cn.jpush.android.EXTRA'].ID;

            //alert(id);
        }
 /*       //打开推送消息事件处理
		$window.plugins.jPushPlugin.getPushData = function(data){
			if(data!='{}'){
            	alert(data);
            }
			var json = data;
			alert(json);
			if(typeof data === 'string'){
				json=JSON.parse(data);
			}
			var id = json.extras['cn.jpush.android.EXTRA'].ID;
			//alert(id);
		}*/

	   
   };
  //设置别名
 /*  @description  
        当前方法，设置极光推送别名，通过设置别名进行选择接受消息
     @params{string}  //用户登陆id	    
 */  
   var _setAlias=function(userId){
     var alisaParams = {sequence: 1, alias: userId};
	$window.plugins.jPushPlugin.setAlias(alias);
   };
   
   	//设置标签 tag
	 /*  @description  
	     当前方法，设置极光推送标签，通过设置别名进行选择接受消息
	    @params{string}  //用户登陆id	    
	*/  
	var _setTags=function(tags){
		$window.plugins.jPushPlugin.setTags(tags);
	};
		//设置标签和别名
	var _setTagsWithAlias=function(tags,alias){
	  $window.plugins.jPushPlugin.setTagsWithAlias(tags,alias);
	}
	//获取状态；
	 /*  @description  
	     当前方法获取当前极光推送状态，
	    @params{function()}  回调函数    
	*/  
	var _isPushStopped=function(fun){
		$window.plugins.jPushPlugin.isPushStopped(fun)
	}
	//停止极光推送
	var _stopPush=function(){
		$window.plugins.jPushPlugin.stopPush();
	}
	//重启极光推送
	var _resumePush=function(){
		$window.plugins.jPushPlugin.resumePush();
	}
		  
     /*@description 
	     根据手机系统，触发不同方式   ios ，android
		 @params{String,function()} 当前用户登陆id，回调函数：打开当前消息方法 
	  */
	  var _IphonePushFun=function(userID,callBack){
		    var alisaParams = {sequence: 1, alias: userId};
		   JPush.setDebugMode(true);
	   if (rtdataService.security.platform == "ios") {
          JPush.getRegistrationID(function (data) {
          });
            (result) => {
            //alert(JSON.stringify(result))
          }, (error) =>{
        
          }
          //IOS打开消息
          document.addEventListener("jpush.openNotification", function (event) {
            callBack(event);
          }, false);
        } else if (rtdataService.security.platform == "android") {
            _self._setAlias(alias);
          $window.plugins.jPushPlugin.openNotificationInAndroidCallback = function (obj) {
        var json = obj;
        /*notifiyService.sendNotifiy('1','测试通知标题','这是一个测试通知内容 ');*/
        if (typeof obj === 'string') {
          json = JSON.parse(obj);
        }
        var id = json.extras['cn.jpush.android.EXTRA'].ID;
        callBack(obj);
      }
        }
	  };
	   //测试方法 
	  var  _testJpush=function(){
		alert("自定义的_testJpush()");  
	  };
	jpushFactory.init= _init;
	jpushFactory.isPushStopped=_isPushStopped;
	jpushFactory.stopPush=_stopPush;
	jpushFactory.resumePush=_resumePush;
	jpushFactory.setTagsWithAlias=_setTagsWithAlias;
	jpushFactory.setTags=_setTags;
	jpushFactory.setAlias=_setAlias;
	// jpushFactory.isInfo=_isInfo;
	jpushFactory.IphonePushFun=_IphonePushFun;
	jpushFactory.testJpush=_testJpush;
     return   jpushFactory;
}]);

