/*
* about exception of http reqeust
*/
angular.module('avicit.platform.mobile.services.handle', [])
.factory('handleService', ['PlatformConfigs',
function(PlatformConfigs){
    return{
        configStatus:function(data){
        	//alert(data);
			var isTerminal = true;
        	if(!this.isJson(data)){
        		return isTerminal;
        	}
			if(this.isTimeout(data)){
				return isTerminal;
			}
			if(data.serverMsg == 'undefined'  || data.serverMsg == '' || 
				data.serverMsg.code == 'undefined' || data.serverMsg.code == ''){
				//isTerminal = false;
			}else if(data.serverMsg.code == '0'){
				isTerminal = false;
			}else if(data.serverMsg.code == '1'){
				alert(data.msg);
			}else if(data.serverMsg.code == '2'){
				alert(data.msg);
				ionic.Platform.exitApp();
			}else if(data.serverMsg.code == '3'){
				isTerminal = false;
			}else if(data.serverMsg.code == '4'){
				ionic.Platform.exitApp();
			}else if(data.serverMsg.code == '5'){
				ionic.Platform.exitApp();
			}else if(data.serverMsg.code == '6'){
				ionic.Platform.exitApp();
			}else if(data.serverMsg.code == '7'){
				alert(data.msg);
				isTerminal = false;
			}
			return isTerminal;
		},
		
		isJson : function(obj){
			var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length; 
			return isjson;
		},
		
		isTimeout : function(data){
			var startTime = data.serverMsg.timestamp;
			var nowTime = Date.parse(new Date())+"";
			//console.log("startTime:"+startTime);
			//console.log("nowTime:"+nowTime);
			//console.log("nowTime - startTime:"+ (nowTime - startTime));
			//console.log("PlatformConfigs.timestamp:"+PlatformConfigs.timestamp);
			if(nowTime - startTime > PlatformConfigs.timestamp){
				return true;
			}else{
				return false;
			}
		}
    }
}])
;

