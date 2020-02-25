app.controller(
  'LoginNoListCtrl',
  [
    '$scope',
    'modalService',
    '$http',
    'requestService',
    'preferencesService',
    'PlatformConfigs',
    'avicitMobileApi',
    'ToastService', '$sce','$cordovaBarcodeScanner','$cordovaFileOpener2','$cordovaFileTransfer','$cordovaFile',
    function ($scope, modalService, $http, requestService,
              preferencesService, PlatformConfigs,
              avicitMobileApi, ToastService, $sce,$cordovaBarcodeScanner,$cordovaFileOpener2,$cordovaFileTransfer,$cordovaFile) {

            $scope.goBack=function(){
            modalService.close("loginNoList");
            };
      /**
       * @author
       *  @description
       *
       */
      $scope.createOrAdd=function(type){
        switch(type){
          case 0:
            modalService.create("loginFormCreate","modules/main/loginFormCreate.html",$scope);
            break;
          case 1:
            modalService.create("loginList","modules/main/loginList.html",$scope);
            break;
        }
      };

    }]);
