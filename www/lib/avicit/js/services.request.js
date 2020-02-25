
angular.module('avicit.platform.mobile.services.request', ['avicit.platform.mobile.services.http'])
.factory('requestService', ['$ionicLoading', 'httpService', '$timeout', 'PlatformConfigs', 
function($ionicLoading, httpService, $timeout, PlatformConfigs){
    return{
        requestData : function(params, succCb, failCb){
			      var t1 = new Date();
            $ionicLoading.show({duration:'30000'});
            httpService.httpCache(params,
                function(httpData){
                    //防止网络错误缓存
                    if (JSON.stringify(httpData)=="{}"){
                        $ionicLoading.hide();
                        alert("请求数据为空");
                        return;
                    }
                    var t2 = new Date();
                    var sec = t2 - t1;
                    if(sec > 400 || sec < 0){
                    	sec = 400;
                    }else{
                    	sec = 400 - sec;
                    }
                    if(PlatformConfigs.settingOpt[1].checked){
                		$timeout(function(){
		                    succCb(httpData);
		                    $ionicLoading.hide();
	                    }, sec);
                	}else{
	                    succCb(httpData);
	                    $ionicLoading.hide();
                	}
                },
                function(){
					if(typeof failCb === 'function') {
						failCb();
					}
                    $ionicLoading.hide();
                });

        },
		requestDataNoCache : function(params, succCb, failCb){
        	var t1 = new Date();
            $ionicLoading.show({duration:'30000'});
            httpService.httpNoCache(params,
                function(httpData){
                    //防止网络错误缓存
                    if (JSON.stringify(httpData)=="{}"){
                        $ionicLoading.hide();
                        alert("请求数据为空");
                        return;
                    }
                    var t2 = new Date();
                    var sec = t2 - t1;
                    if(sec > 400 || sec < 0){
                    	sec = 400;
                    }else{
                    	sec = 400 - sec;
                    }
                    if(PlatformConfigs.settingOpt[1].checked){
                		$timeout(function(){
		                    succCb(httpData);
		                    $ionicLoading.hide();
	                    }, sec);
                	}else{
	                    succCb(httpData);
	                    $ionicLoading.hide();
                	}
                },
                function(){
					if(typeof failCb === 'function') {
						failCb();
					}
                    $ionicLoading.hide();
                });

        },
        
        loginNoCache : function(params, succCb){
        	var t1 = new Date();
		    	console.log(JSON.stringify(params));
            $ionicLoading.show({duration:'30000'});
            httpService.login(params,
                function(httpData){
                    //防止网络错误缓存
                    if (JSON.stringify(httpData)=="{}"){
                        $ionicLoading.hide();
                        alert("请求数据为空");
                        return;
                    }
                    var t2 = new Date();
                    var sec = t2 - t1;
                    if(sec > 400 || sec < 0){
                    	sec = 400;
                    }else{
                    	sec = 400 - sec;
                    }
                    if(PlatformConfigs.settingOpt[1].checked){
                		$timeout(function(){
		                    succCb(httpData);
		                    $ionicLoading.hide();
	                    }, sec);
                	}else{
	                    succCb(httpData);
	                    $ionicLoading.hide();
                	}
                },
                function(){
                    $ionicLoading.hide();
                });

        },
        requestTimeout : function(params, succCb, failCb){
        	var t1 = new Date();
			console.log(t1);
            $ionicLoading.show({duration:'30000'});
            httpService.httpNoCache(params,
                function(httpData){
                    //防止网络错误缓存
                    if (JSON.stringify(httpData)=="{}"){
                        $ionicLoading.hide();
                        alert("请求数据为空");
                        return;
                    }
                    var t2 = new Date();
                    var sec = t2 - t1;
                    if(sec > 400){
                    	sec = 400;
                    }else{
                    	sec = 400 - sec;
                    }
                    $timeout(function(){
	                    succCb(httpData);
	                    $ionicLoading.hide();
                    }, sec);
                },
                function(){
					if(typeof failCb === 'function') {
						failCb();
					}
                    $ionicLoading.hide();
                });

        },
      /**
       *@params params
       * @params succCb
       * @params failCb
       */
      requestNoLoading : function(params, succCb, failCb){
        var t1 = new Date();
        httpService.httpCache(params,
          function(httpData){
            //防止网络错误缓存
            if (JSON.stringify(httpData)=="{}"){
              $ionicLoading.hide();
              alert("请求数据为空");
              return;
            }
            var t2 = new Date();
            var sec = t2 - t1;
            if(sec > 400 || sec < 0){
              sec = 400;
            }else{
              sec = 400 - sec;
            }
            if(PlatformConfigs.settingOpt[1].checked){
              $timeout(function(){
                succCb(httpData);

              }, sec);
            }else{
              succCb(httpData);

            }
          },
          function(){
            if(typeof failCb === 'function') {
              failCb();
            }

          });

      },
    }
}])
;

