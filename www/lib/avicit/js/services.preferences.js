/*
* about prefereces
*/
angular.module('avicit.platform.mobile.services.preferences', [])
.factory('preferencesService', ['$window', 'PlatformConfigs', function($window, PlatformConfigs){
    return{
        put:function(key, value, succCallback, failCallback){	
		// $window.plugins.appPreferences.store(succCallback, failCallback, '', key, value);
			if(!PlatformConfigs.develop){
				$window.plugins.appPreferences.store(succCallback, failCallback, '', key, value);
			}else{
				if(typeof succCallback == 'function')
					succCallback();
			}
		},
		
		get:function(key, succCallback, failCallback){
			if(!PlatformConfigs.develop){
				$window.plugins.appPreferences.fetch(succCallback, failCallback, '', key);
			}else{
				if(typeof succCallback == 'function')
					succCallback();
			}
		},
		
		remove:function(key, succCallback, failCallback){
			if(!PlatformConfigs.develop){
				$window.plugins.appPreferences.remove(succCallback, failCallback, '', key);
			}
		}
    }
}])
;

