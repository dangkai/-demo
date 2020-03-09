
(function(){

angular.module('avicit.mobile.plugin', [
  'avicitMobilePlugin.plugins'
]);
//vpn plugin
angular.module('avicitMobilePlugin.plugins.appVpn', [])

  .factory('$avicitPluginVpn', ['$q', 'PlatformConfigs', function ($q, PlatformConfigs) {

    return {
    	init:function(){
    		var q = $q.defer();
	        if(!PlatformConfigs.develop){
				avicit.plugins.vpn.init(function(){
					console.log("success!");
					q.resolve();
				}, function(){
					console.log("failure!");
				});
			}else{
				q.resolve();
			}
	        return q.promise;
    	},
    	
      	register: function (groupId, phoneNum) {
	        var q = $q.defer();
	        
	        if(!PlatformConfigs.develop){
				avicit.plugins.vpn.register(function(){
					console.log("success!");
					q.resolve();
				}, function(){
					console.log("failure!");
				}, groupId, phoneNum);
			}else{
				q.resolve();
			}
			return q.promise;
      	},
      
      	download: function(authCode){
	      	var q = $q.defer();
	        
	        if(!PlatformConfigs.develop){
				avicit.plugins.vpn.download(function(){
					console.log("success!");
					q.resolve();
				}, function(){
					console.log("failure!");
				}, authCode);
			}else{
				q.resolve();
			}
	        return q.promise;
      	},
      
      	checkStatus: function(){
	      	var q = $q.defer();
	        
	        if(!PlatformConfigs.develop){
				avicit.plugins.vpn.checkStatus(function(info){
					console.log("success!");
					q.resolve(info);
				}, function(){
					console.log("failure!");
				});
			}else{
				q.resolve();
			}
	        return q.promise;
      	},
      
      	sslStart: function(){
	      	var q = $q.defer();
	        
	        if(!PlatformConfigs.develop){
				avicit.plugins.vpn.sslStart(function(){
					console.log("success!");
					q.resolve();
				}, function(){
					console.log("failure!");
				});
			}else{
				q.resolve();
			}
	        return q.promise;
      	},
      
      	sslStop: function(){
	      	var q = $q.defer();
	        
	        if(!PlatformConfigs.develop){
				avicit.plugins.vpn.sslStop(function(){
					console.log("success!");
					q.resolve();
				}, function(){
					console.log("failure!");
				});
			}else{
				q.resolve();
			}
	        return q.promise;
      	},
      
      	getApp: function(){
	      	var q = $q.defer();
	        
	        if(!PlatformConfigs.develop){
				avicit.plugins.vpn.getApp(function(){
					console.log("success!");
					q.resolve();
				}, function(){
					console.log("failure!");
				});
			}else{
				q.resolve();
			}
	        return q.promise;
      	},
      	
      	isStarted: function(){
	      	var q = $q.defer();
	        
	        if(!PlatformConfigs.develop){
				avicit.plugins.vpn.isStarted(function(state){
					console.log("success!");
					q.resolve(state);
				}, function(){
					console.log("failure!");
				});
			}else{
				q.resolve();
			}
	        return q.promise;
      	},

    };
 	}]);

//jpush plugin
angular.module('avicitMobilePlugin.plugins.JPush', [])

  .factory('$avicitPluginJPush', ['$q', function ($q) {
    var jpushServiceFactory={};
	var extras = {};
	//启动极光推送
	var _init = function(){
		JPush.init();
		//打开推送消息事件处理
		JPush.openNotificationInAndroidCallback = function(data){
            var json = data;
            //alert(json);
            if(typeof data === 'string'){
                json=JSON.parse(data);
            }
            var id = json.extras['cn.jpush.android.EXTRA'].ID;
            //alert(id);
        }
		JPush.setDebugMode(true);
	}
	//获取状态
	var _isPushStopped=function(fun){
		JPush.isPushStopped(fun)
	}
	//停止极光推送
	var _stopPush=function(){
		JPush.stopPush();
	}
	//重启极光推送
	var _resumePush=function(){
		JPush.resumePush();
	}
	//设置标签和别名
	var _setTagsWithAlias=function(tags,alias){
	    console.log("jpush tags:" +JSON.stringify(tags));
	    console.log("jpush alias:" + alias);
		JPush.setTagsWithAlias(tags,alias);
	}
	//设置标签
	var _setTags=function(tags){
		JPush.setTags(tags);
	}
	//设置别名
	var _setAlias=function(alias){
		JPush.setAlias(alias);
	}

	jpushServiceFactory.init=_init;
	jpushServiceFactory.isPushStopped=_isPushStopped;
	jpushServiceFactory.stopPush=_stopPush;
	jpushServiceFactory.resumePush=_resumePush;
	jpushServiceFactory.setTagsWithAlias=_setTagsWithAlias;
	jpushServiceFactory.setTags=_setTags;
	jpushServiceFactory.setAlias=_setAlias;

	return jpushServiceFactory;
}]);
angular.module('avicitMobilePlugin.plugins', [
  'avicitMobilePlugin.plugins.appVpn',
  'avicitMobilePlugin.plugins.JPush',
]);

})();