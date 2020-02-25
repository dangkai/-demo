/*
* about all http request and all http url
*/
angular.module('avicit.platform.mobile.services.http', [])
.factory('httpService', 
['$http', 'handleService', 'urlService', 'PlatformConfigs', 
'$cordovaDevice', '$cordovaAppVersion', 'rtdataService', 
function($http, handleService, urlService, PlatformConfigs, 
$cordovaDevice, $cordovaAppVersion, rtdataService){
    return{
        httpCache : function(param, succCb, failCb){
			var obj = this.getParameters(param);
			var config = {timeout:PlatformConfigs.timeout,cache:true, responseType:'text'};
            $http.post(urlService.getBaseUrl(), obj, config)
            .success(function(data, status, headers, config){
            	if(PlatformConfigs.debug)
					console.log("services.http.result-->"+JSON.stringify(data));
				if(handleService.configStatus(data)){
					failCb();
					return;
				}
				if(typeof data.data === 'string'){
                    //console.log("typeof data=" +typeof data.data);
                    json = JSON.parse(data.data);
                }else{
					json = data.data;
				}
                succCb(json);
            })
            .error(function(data, status, headers, config) {
				failCb();
                console.log("ERROR!!"+data);
            });
        },
		httpNoCache : function(param, succCb, failCb){
			var obj = this.getParameters(param);
			var config = {timeout:PlatformConfigs.http.timeout, responseType:'text'};
            $http.post(urlService.getBaseUrl(), obj, config)
            .success(function(data, status, headers, config){
            	if(PlatformConfigs.debug)
					console.log("services.http.result-->"+JSON.stringify(data));
				if(handleService.configStatus(data)){
					failCb();
					return;
				}
				if(typeof data.data === 'string'){
                    //console.log("typeof data=" +typeof data.data );
                    json = JSON.parse(data.data);
                }else{
					json = data.data;
				}
                succCb(json);
            })
            .error(function(data, status, headers, config) {
				failCb();
                console.log("ERROR!!"+data);
            });
        },
        login : function(param, succCb, failCb){
		    	var obj = this.getParameters(param);
		     	var config = {timeout:PlatformConfigs.http.timeout, responseType:'text'};
            //$http({url:urlService.login(), method:'POST', data:obj})
            $http.post(urlService.login(), obj, config)
            .success(function(data, status, headers, config){
            	if(PlatformConfigs.debug)
					console.log("services.http.result-->"+JSON.stringify(data));
				if(handleService.configStatus(data)){
					failCb();
					return;
				}
				rtdataService.security.accesstoken = data.serverMsg.token;
				rtdataService.security.username = data.serverMsg.userLoginName;
                succCb(data);
            })
            .error(function(data, status, headers, config) {
				failCb(data,status, headers, config);
            });
        },
		
		getParameters : function(param){
			var obj = {};
			obj["data"] = param;
			rtdataService.security.timestamp = Date.parse(new Date())+"";
			obj["sec"] = rtdataService.security;
			if(PlatformConfigs.debug)
				console.log("services.http.obj-->"+JSON.stringify(obj));
			return obj;
		},
		
    }
}])
;

