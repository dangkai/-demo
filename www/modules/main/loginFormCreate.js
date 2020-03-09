app.controller(
  'LoginFormCreateCtrl',
  [
    '$scope',
    'modalService',
    '$http',
    'requestService',
    'preferencesService',
    'PlatformConfigs',
    'avicitMobileApi',
    'ToastService', '$sce',
    '$cordovaBarcodeScanner','$cordovaFileOpener2',
    '$cordovaFileTransfer','$cordovaFile',
    function ($scope, modalService, $http, requestService,
              preferencesService, PlatformConfigs,
              avicitMobileApi, ToastService, $sce,$cordovaBarcodeScanner,$cordovaFileOpener2,$cordovaFileTransfer,$cordovaFile) {
               $scope.count=0;
              $scope.goBack=function(){
                 modalService.close("loginFormCreate");
              };
               $scope.Form={
                  type:'飞机',
                  batchNo:'ASN-209',
                  country:'埃及',
                  userName:'埃及情报局',
                  bNo:'209',
               }

           //扫描二维码方法
            $scope.barcodeData=[];

                 /**
                 *@author
                 */
              //生成二维码方法
             $scope.doPost=function(){
               if($scope.count>0){
                 avicitMobileApi.toastService().Toast("不能重复生成");
                  return;
               }
               $scope.count++;
             if($scope.Form.type==""){
              avicitMobileApi.toastService().Toast("提交类型不为空");
               return;
             }else if($scope.Form.batchNo==""){
              avicitMobileApi.toastService().Toast("型号不为空");
               return;
             }else if($scope.Form.country==""){
              avicitMobileApi.toastService().Toast("国家不为空");
               return;
             }else if($scope.Form.userName==""){
              avicitMobileApi.toastService().Toast("用户不为空");
               return;
             }else if($scope.Form.bNo==""){
              avicitMobileApi.toastService().Toast("编号不为空");
              return;
             }

             $scope.info= $scope.Form.type+";"+$scope.Form.batchNo
                   +";"+$scope.Form.country+";"+$scope.Form.userName+";"+$scope.Form.bNo;
                           var data={
                                       text:$scope.info,
                                       width: 200,
                                       height:200,
                                       colorDark : "#000000",
                                       colorLight : "#ffffff",
                                       correctLevel : QRCode.CorrectLevel.H
                               };

        var content = angular.element(document.querySelectorAll("#testInfo"));
             var qrcode = new QRCode(content[0],
                                   data);
            }

    }]);
