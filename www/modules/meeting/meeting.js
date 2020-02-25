

app.controller('MeetingCtrl',['$scope', 'modalService', '$http', '$ionicScrollDelegate',
  '$timeout', 'requestService','$ionicPopover','$ionicLoading',
function($scope, modalService, $http, $ionicScrollDelegate, $timeout,requestService,$ionicPopover,$ionicLoading){
  //显示数据
  $scope.Data=[{},{},{},{},{}];
  $scope.ModelSeting={
      Model_Flight:"0",
       Model_Fault:"1",
  };
  $scope.data={
    "image":"",
  }
  $scope.Form={
    name:"",
    sex:"",
    ethnicity:"",
    birth:"",
    address:"",
    number:"",
    buyer_name:'',
    total:'',
    buyer_address:'',
  };
  $scope.type=0;
  $scope.LoactionUrl="https://ocr.cn-north-4.myhuaweicloud.com/";
  /**
   * @auther dk
   * @description
   * 返回方法
   * params [String]
   *       String  //显示返回的标记
   */
  $scope.goBack=function(){
    modalService.close("meeting");
  };
  //width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
  $scope.getBase64Image=function (img, width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width ? width : img.width;
    canvas.height = height ? height : img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL();
    return dataURL;
  }


   //根据图片转化为base64编码
  function getCanvasBase64(img){
    var image = new Image();
    //至关重要
    image.crossOrigin = '';
    image.src = img;
    //至关重要
    var deferred = $.Deferred();
    if (img) {
       image.onload = function () {
        deferred.resolve($scope.getBase64Image(image));//将base64传给done上传处理
        console.log("image=="+image);
        document.getElementById("container2").appendChild(image);
      }
      console.log("deferred.promise()=="+JSON.stringify(deferred.promise()));
      return deferred.promise();//问题要让onload完成后再return sessionStorage['imgTest']
    }

  };
  /**
   * 请求获取识别图片方式
   * @type {{image: string}}
   */

  $scope.base64Image=function(url,img){
    getCanvasBase64(img)
      .then(function (base64) {
        $scope.base64=base64.substr(22,base64.length);
        $scope.data.image=$scope.base64;
        $scope.DistinguishFun(url,$scope.data);
        console.log("方式二》》》》》》》》》",base64);
      }, function (err) {
        console.log(err);
      });
  };
  /**
   * @auther dk
   * @description
   * 返回方法
   * params [String]
   *       String //识别分类
   */

  $scope.Distinguish=function(TYPE){
    $scope.type=TYPE;
    var url="";
    var img="";
    switch(TYPE) {
      case 0:
        //识别身份证
        url = $scope.LoactionUrl + "v1.0/ocr/id-card";
        img = "../modules/meeting/web.jpg";
        break;
      case 1:
        //识别护照
        url = $scope.LoactionUrl + "v1.0/ocr/passport";
        img = "../modules/meeting/passport.jpg";
        break;
      case 2:
        //识别表格
        url = $scope.LoactionUrl + "v1.0/ocr/general-table";
        img = "../modules/meeting/table.jpg";
        break;
      case 3:
        //
        url = $scope.LoactionUrl + "v1.0/ocr/vat-invoice";
        img = "../modules/meeting/pickter.jpg";
        break;
    }
    $scope.base64Image(url,img);
  };
  /**
   * @author DK
   * @description
   * 识别身份证
   */

  $scope.DistinguishFun=function(url,data){
		    $ionicLoading.show({duration:'30000'});
		$scope.Form=[];
    var url= url;
      transFn=function(data) {
        return $.param(data);
      },
      config={
        headers:{'Content-Type':'application/json;charset=UTF-8','X-Auth-Token':$scope.Token},
        // transformRequest: transFn
      };

    $http.post(url,data, config).
    success(function(data, status, headers, config) {
      console.log("身份证=="+JSON.stringify(data));
			$ionicLoading.hide();
      if($scope.type==0){
        $scope.Form=data.result
      }else if($scope.type==1){
        $scope.Form=data.result.extra_info.local_language;
      }else if($scope.type==2){
        $scope.Form=data.result.words_region_list[0].words_block_list;
      }else if($scope.type==3){
        $scope.Form=data.result;
      }

    }).
    error(function(data, status, headers, config) {

    });
  }
  $scope.Distinguish($scope.type);

  
}]);
