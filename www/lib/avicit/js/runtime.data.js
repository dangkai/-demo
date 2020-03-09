
angular.module('avicit.platform.mobile.runtime.data', [])
.factory('rtdataService', 
['$cordovaDevice', 'PlatformConfigs', 'preferencesService', '$cordovaAppVersion',
function($cordovaDevice, PlatformConfigs, preferencesService, $cordovaAppVersion){
    return{
		me : this,
		
		security : {
			
		},
		
		map : {
			
		},
		
		init:function(){
			var me = this;
			if(!PlatformConfigs.develop){
				me.security.accesstoken = '';
				me.security.username = '';
				me.security.uuid = $cordovaDevice.getUUID();//设备唯一号
				me.security.md5 = 'md5';
				me.security.timestamp = '';
				me.security.selfversion = '900';
				me.security.model = $cordovaDevice.getModel();//设备型号
				me.security.platform = $cordovaDevice.getPlatform().toLowerCase();//设备平台
				me.security.version = $cordovaDevice.getVersion();//设备版本
				me.security.cordova = $cordovaDevice.getCordova();//cordova版本
				$cordovaAppVersion.getVersionNumber().then(function (number) {
					me.security.appname = number;
				});
				$cordovaAppVersion.getVersionCode().then(function (code) {
					me.security.appcode = code + "";
				});
			}else{
				me.security.accesstoken = '';
				me.security.username = '';
				me.security.uuid = 'ac081e83566b90ab';//设备唯一号
				me.security.md5 = 'md5';
				me.security.timestamp = '';
				me.security.selfversion = '900';
				me.security.model = 'GT-I9158';//设备型号
				me.security.platform = 'android';//设备平台
				me.security.version = '4.2.2';//设备版本
				me.security.cordova = '4.1.1';//cordova版本
				me.security.appname = '0.0.1';
				me.security.appcode = '1';
			}
		},
		
		set : function(key, value){
			this.map.key = value;
		},
		
		get : function(key){
			return this.map.key;
		},
		
		save : function(){
			preferencesService.put('map', this.map, function(){}, function(){});
		},
		
		load : function(){
			var me = this;
			preferencesService.get('map', function(data){
				me.map = data;
			}, function(){});
		},
		
    }
}])
;