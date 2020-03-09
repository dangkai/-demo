var appbase = angular.module('avicit.platform.mobile.services.modalService', []);

var mapModal =[];
var actionId = 100;
var ids = "";

var hidefun = null;
appbase.factory('modalService',['$ionicModal', '$q', '$ionicPlatform', 'PlatformConfigs', '$ionicPopup',
function($ionicModal, $q, $ionicPlatform, PlatformConfigs, $ionicPopup){
    return{

        clear:function(){
            for (var i=mapModal.length-1; i>=0; --i){
                mapModal[i].value.hide();
                mapModal[i].value.remove();
                mapModal.splice(i,1);
            }
        },

        close:function(id){
            for (var i=mapModal.length-1; i>=0; --i){
                if (mapModal[i].key == id){
                	if(PlatformConfigs.settingOpt[0].checked){
                	//if(ionic.Platform.platform() == 'android'){
	                    if (i>0){
							hidefun = mapModal[i-1].value.hide;
							mapModal[i-1].value.hide=function(){};
	                        mapModal[i-1].value.show();
	                    }
                	}
                    if(hidefun){
						mapModal[i].value.hide = hidefun;
					}
                    mapModal[i].value.hide();
                    mapModal[i].value.remove();
                    mapModal.splice(i,1);
                    if(mapModal[i-1]){
                    	ids = mapModal[i-1].key;
                    }
                    return;
                }
            }
        },

        fromStorage:function(url){
          var isfrom = false;
          if(window.Manifest){
            var scripts = window.Manifest.load.concat();
            scripts.forEach(function(src) {
              if(src == url){
                isfrom = true;
              }
            });
          }
          return isfrom;
        },

        create:function(id, url, $scope){
          if(window.Manifest.root && this.fromStorage(url)){
              url = window.Manifest.root + url;
            }
            console.log("~~~:"+url);
            $ionicModal.fromTemplateUrl(url, {
                scope: $scope,
                animation: 'slide-right-left',
                //backdropClickToClose: false,
                //hardwareBackButtonClose: false
            }).then(function(modal) {
            	ids = id;
                mapModal.push({key:id,value:modal,scope:$scope});
                modal.show();
                hidefun = modal.hide;
                modal.hide=function(){};
                if(PlatformConfigs.settingOpt[0].checked){
				//if(ionic.Platform.platform() == 'android'){
	                if (mapModal.length>1){
						if(hidefun){
							mapModal[mapModal.length-2].value.hide = hidefun;
						}
	                    mapModal[mapModal.length-2].value.hide();
	                }
				}
            }).then(this.registerbackbutton($scope));
        },

        hide:function(id){
            //this.mapModal[id].hide();
        },

        show:function(id){
            for (var i=0; i<mapModal.length; ++i){
                if (mapModal[i].key == id){
                    mapModal[i].value.show();

                }
            }
        },

        getLastModule:function(){
        	console.log(mapModal[mapModal.length-1].key);
        	console.log(mapModal[mapModal.length-1].value);
        	return mapModal[mapModal.length-1];
        },

        registerbackbutton:function($scope){
        	var callback = function(){
        		if(ids == PlatformConfigs.backAction.exit ||
        			ids == PlatformConfigs.backAction.exit1 ||
        			ids == PlatformConfigs.backAction.exit2){
        			ionic.Platform.exitApp();
        		}
        		if(ids == PlatformConfigs.backAction.popup){
        			var confirmExit = $ionicPopup.confirm({
		                title:'确认退出程序?',
		                cancelText:'取消',
		                okText:'退出'
		            });
		            confirmExit.then(function(res){
		                if(res){
		                    ionic.Platform.exitApp();
		                    //console.log('YES');
		                }else{
		                    //console.log('NO');
		                }
		            });
        		}else{
	        		for (var i=mapModal.length-1; i>=0; --i){
		                if (mapModal[i].key == ids){
		                    if (i>0){
		                        mapModal[i-1].value.show();
	                        	ids = mapModal[i-1].key;
		                    }
							if(hidefun){
								mapModal[i].value.hide = hidefun;
							}
		                    mapModal[i].value.hide();
		                    mapModal[i].value.remove();
		                    mapModal.splice(i,1);
		                    return;
		                }
		            }
        		}
        	}
        	$scope.$on('$destroy', $ionicPlatform.registerBackButtonAction(
		        function(){
		        	callback();
		        }, 210, actionId));
	        actionId++;
        },

        turnToHome : function(){
        //任意界面回滚到首页面
        },

    }
}]);
