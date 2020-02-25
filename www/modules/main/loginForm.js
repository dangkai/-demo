app.controller(
  'LoginFormCtrl',
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
                modalService.close("loginForm");
              };

               $scope.Form={
                  type:'',
                  batchNo:'',
                  country:'',
                  userName:'',
                  bNo:'',
               }

           //扫描二维码方法
            $scope.barcodeData=[];
           $scope.BarcodeSacnner=function(){
           $cordovaBarcodeScanner
                        .scan()
                     .then(function (barcodeData) {
                      barcodeData.text.replace(/\s+/g,"");
                         $scope.barcodeData=barcodeData.text;
                         $scope.arr= $scope.barcodeData.split(";");
                             if($scope.barcodeData==""){
                                     return;
                                }
                          //显示对应数据
                      $scope.Form.type=$scope.arr[0];
                      $scope.Form.batchNo=$scope.arr[1];
                      $scope.Form.country=$scope.arr[2];
                      $scope.Form.userName=$scope.arr[3];
                      $scope.Form.bNo=$scope.arr[4];
                       }, function (error) {
                       });
                          };
                 /**
                 *@author
                 */
             $scope.doPost=function(){
                  $scope.listData.push( $scope.Form);
                preferencesService.put('listData',$scope.listData,function(){
                   //刷新
                    $scope.Rresh($scope.listData);
                   avicitMobileApi.toastService().Toast("提交成功");
                      $scope.goBack();
                });

            }

    }]);
