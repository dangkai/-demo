app.controller(
  'LoginNoCtrl',
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
                modalService.close("loginNo");
              };
              $scope.Form={
                 //序列号
                 serialNumber:'',
                 //用户编号
                 userNumber:'',
                 //图形号
                 typeNumber:'',
              }
      $scope.BarcodeSacnner=function(){
                $cordovaBarcodeScanner
                             .scan()
                          .then(function (barcodeData) {
                              $scope.barcodeData=barcodeData.text;
                              $scope.arr= $scope.barcodeData.split(";");
                                  if($scope.barcodeData==""){
                                          return;
                                     }
                               //显示对应数据
                           $scope.Form.serialNumber=$scope.arr[0];
                           $scope.Form.userNumber=$scope.arr[2];
                           $scope.Form.typeNumber=$scope.arr[1];
                            }, function (error) {
                            });
                               };
                      /**
                      *@author
                      */
                  $scope.doPost=function(){
                      $scope.text={
                      publicNumber:'',
                      };
                      $scope.text.publicNumber= $scope.Form.serialNumber+"-"+ $scope.Form.userNumber+"-"+$scope.Form.typeNumber;
                      $scope.listData.push( $scope.text);
                     preferencesService.put('listNoData',$scope.listData,function(){
                        //刷新
                        $scope.Rresh($scope.listData);
                        avicitMobileApi.toastService().Toast("提交成功");
                           $scope.goBack();
                     });

                 }

    }]);
