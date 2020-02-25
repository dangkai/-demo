/**
 * @desecription
 * 描述二维码信息模块
 */
app.controller(
  'modelScannerCtrl',
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

    //显示父级类型返回数据
      $scope.sccnarType=$scope.clickTypeAtta;
    /**
       * @description
       *  返回方法
       */
      $scope.goBack=function(){
        modalService.close("sccaner");
      };
      /**
       * @description
       *  返回方法
       */
      $scope.getImgUrl=function(type){
        return  "img/"+type+".png";
      };
      /**
       * @description
       *  返回方法
       */
      $scope.showSccanerFun=function(){
        switch($scope.sccnarType){
          case  0:
            //中航技
            $scope.imgIosUrl=$scope.getImgUrl("zhjkf_ios");
            $scope.imgAndroidUrl=$scope.getImgUrl("zhjkf_android");
            $scope.userName="sym1501044";
            $scope.passWord="cape";
            $scope.getFlag=true;
          break;
          case  1:
            //中航国际
            $scope.imgIosUrl=$scope.getImgUrl("myca_android");
            $scope.imgAndroidUrl=$scope.getImgUrl("myca_ios");
            $scope.userName="admin";
            $scope.passWord="admin@1";
            $scope.getFlag=true;
          break;
          case  2:
            //飞龙
            $scope.imgIosUrl=$scope.getImgUrl("cdk");
            $scope.userName="admin";
            $scope.passWord="admin@1";
            $scope.getFlag=false;
          break;
          case  3:
            //保密
            $scope.imgIosUrl=$scope.getImgUrl("seos_ios");
            $scope.imgAndroidUrl=$scope.getImgUrl("seos_android");
            $scope.userName="admin";
            $scope.passWord="cape";
            $scope.getFlag=true;
          break;
          case  4:
            //民机
            $scope.imgIosUrl=$scope.getImgUrl("mjkf_ios");
            $scope.imgAndroidUrl=$scope.getImgUrl("mjkf_android");
            $scope.userName="admin";
            $scope.passWord="xacsnet*46196";
            $scope.getFlag=true;
          break;
          case  5:
            //空天 611
            $scope.imgIosUrl=$scope.getImgUrl("611ios");
            $scope.imgAndroidUrl=$scope.getImgUrl("611android");
            $scope.userName="appTest";
            $scope.passWord="appTest@192";
            $scope.getFlag=true;
            break;
          default:
          break;
        }
      };
      //方法
      $scope.showSccanerFun();
    }]);
