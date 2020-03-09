/*
* storage servie with localstorage and sessionstorage
*/
angular.module('avicit.platform.mobile.services.storage', [])
.factory('storageService', ['$window', function($window){
    return{
        getLocal : function(key){
            return $window.localStorage.getItem(key);
        },
        setLocal : function(key, value){
            $window.localStorage.setItem(key, value);
        },
        clearLocal : function(){
          $window.localStorage.clear();
        },
        getSession : function(key){
            return $window.sessionStorage.getItem(key);
        },
        setSession : function(key, value){
            $window.sessionStorage.setItem(key);
        },
        clearSession : function(){
            $window.sessionStorage.clear();
        },
    }
}])
;