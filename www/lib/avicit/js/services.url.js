/*
* get all http url
*/
angular.module('avicit.platform.mobile.services.url', [])
.factory('urlService', ['PlatformConfigs', function(PlatformConfigs){
    return{
        getBaseUrl : function(){
            return PlatformConfigs.url + "mobile/http.do";
			//return "http://10.216.77.208:8080/avicit-platform6-main/mobile/http";
        },
        login : function(){ 
        	return PlatformConfigs.url + 'mobile/login.do';
        	//return 'http://219.141.240.105:8009/avicit-platform6-main-mgate/mobile/login.do'; 
    	},

    }
}])
;