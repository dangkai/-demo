app.controller(
  'LoginListCtrl',
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
            modalService.close("loginList");
            };
						
            $scope.initData=function(){
              preferencesService.get("listData",function(data){
                    if(data==null){
                     $scope.listData=[];
                    }else{
                       $scope.listData=data;
                    }

                       });
            }
              // 删除方法
              $scope.deleteFun=function($index){
              $scope.listData.splice($index, 1);
                 avicitMobileApi.toastService().Toast("删除成功");
              preferencesService.put('listData',$scope.listData,function(){
              });
              };
           //添加的
           $scope.add=function(){
           modalService.create("loginForm","modules/main/loginForm.html",$scope);
           };
          $scope.Rresh=function(listData){
            $scope.listData=listData;
            console.log( JSON.stringify($scope.listData));
          };
            $scope.initData();
    }]);
