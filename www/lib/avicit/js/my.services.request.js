
angular.module('avicit.platform.mobile.my.services.request', ['avicit.platform.mobile.services.http'])
.factory('requestServiceTest', ['$ionicLoading', 'httpService', '$timeout', 'PlatformConfigs','requestService',
function($ionicLoading, httpService, $timeout, PlatformConfigs,requestService){
    return{
      /**
       *@desciription
       * 初始化服务请求
       * @param params
       * @param succCb
       * @param failCb
       */
        requestParam : function(params, succCb, failCb){
        requestService.requestData(params ,function(succ){
          succCb(succ);
        },function(fail){
          succCb(failCb);
        });
        },
      /**
       *@desciription
       * 分页服务请求
       * @param params
       * @param succCb
       * @param failCb
       */
        refreshAndload:function(params,succCb,failCb,flag){
           requestService.requestNoLoading(params,function(succ){
                 succCb(succ);
           },function(fail){
             failCb(fail);
           });
        if(flag){
         $scope.refreshFinished();
         }else{
          $scope.infiniteFinished();
         }
       }
    }
}])
;

