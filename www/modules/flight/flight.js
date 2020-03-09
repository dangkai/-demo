app.controller('flightCtrl1',
  ['$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout', 'requestService', '$ionicLoading',
    function ($scope, modalService, $http, $ionicScrollDelegate, $timeout, requestService, $ionicLoading) {
     $scope.flightArr=[{batchNo:'Y-11',name:'$:2.00',userName:'黄飞鸿'},
       {batchNo:'Y-11',name:'$:2.00',userName:'黄飞鸿'},{batchNo:'Y-11',name:'$:2.00',userName:'黄飞鸿'},
       {batchNo:'Y-11',name:'$:2.00',userName:'黄飞鸿'}];

     /**
       * @author  dk
       * @params  { id}
       * String id ://对映界面id
       */
        $scope.goBack=function(){
          modalService.close("flight");
        };
      /**
       * @author  dk
       * @params  { id}
       * String id ://对映界面id
       */
      $scope.goAdd=function(){
        modalService.create("flight-add",'modules/flight/flightAdd.html',$scope);
      };

      /**
       * @author  dk
       * @params  { id}
       * String id ://对映界面id
       */
      $scope.goDetail=function(){
        modalService.create("flight-detail",'modules/flight/flightDetail.html',$scope);
      };

      // //底部tab页 类型   1 列表一  2 列表二  3 列表三
      // $scope.selectFooterType = 1;
      // $scope.showLoading = true;
      // //顶部页面名称
      // $scope.listTitle = "列表一";
      // $scope.listModal1 = {
      //   id: 'list1',
      //   close: function () {
      //     if (this.id != "")
      //       modalService.close(this.id);
      //   },
      //
      //   listData: [
      //     {
      //       "eqSheetNo": "QJSQ-GU-20191005-002",
      //       "attribute01CompanyName": "A国",
      //       "attribute02BaseName": "Q基地",
      //       "attribute08Name": "交付后",
      //       "sheetApplyDate": 1570291200000,
      //       "attribute05": "1",
      //       "attribute05Name": "一般",
      //       "imgSrc": 'img/libiya.jpg'
      //     },
      //     {
      //       "eqSheetNo": "QJSQ-GU-20190922-001",
      //       "attribute01CompanyName": "A国",
      //       "attribute02BaseName": "Q基地",
      //       "attribute08Name": "其他",
      //       "sheetApplyDate": 1569081600000,
      //       "attribute05": "3",
      //       "attribute05Name": "特急",
      //       "imgSrc": 'img/libiya.jpg'
      //     },
      //     {
      //       "eqSheetNo": "QJSQ-WD1-20190919-002",
      //       "attribute01CompanyName": "S国",
      //       "attribute02BaseName": "Jazan基地",
      //       "attribute08Name": "其他",
      //       "sheetApplyDate": 1568822400000,
      //       "attribute05": "2",
      //       "attribute05Name": "紧急",
      //       "imgSrc": 'img/libiya.jpg'
      //     },
      //     {
      //       "eqSheetNo": "QJSQ-GU-20191030-003",
      //       "attribute01CompanyName": "A国",
      //       "attribute02BaseName": "Q基地",
      //       "attribute08Name": "交付后",
      //       "sheetApplyDate": 1572451200000,
      //       "attribute05": "1",
      //       "attribute05Name": "一般",
      //       "imgSrc": 'img/libiya.jpg'
      //     },
      //     {
      //       "eqSheetNo": "QJSQ-GU-20191030-002",
      //       "attribute01CompanyName": "A国",
      //       "attribute02BaseName": "Q基地",
      //       "attribute08Name": "交付后",
      //       "sheetApplyDate": 1572451200000,
      //       "attribute05": "2",
      //       "attribute05Name": "紧急",
      //       "imgSrc": 'img/libiya.jpg'
      //     },
      //     {
      //       "eqSheetNo": "QJSQ-GU-20191030-001",
      //       "attribute01CompanyName": "A国",
      //       "attribute02BaseName": "Q基地",
      //       "attribute08Name": "交付后",
      //       "sheetApplyDate": 1572451200000,
      //       "attribute05": "1",
      //       "attribute05Name": "一般",
      //       "imgSrc": 'img/libiya.jpg'
      //     },
      //     {
      //       "eqSheetNo": "QJSQ-GU-20191030-001",
      //       "attribute01CompanyName": "A国",
      //       "attribute02BaseName": "Q基地",
      //       "attribute08Name": "交付后",
      //       "sheetApplyDate": 1572451200000,
      //       "attribute05": "3",
      //       "attribute05Name": "紧急",
      //       "imgSrc": 'img/libiya.jpg'
      //     },
      //     {
      //       "eqSheetNo": "QJSQ-GU-20191007-001",
      //       "attribute01CompanyName": "A国",
      //       "attribute02BaseName": "K基地",
      //       "attribute08Name": "其他",
      //       "sheetApplyDate": 1570464000000,
      //       "attribute05": "1",
      //       "attribute05Name": "一般",
      //       "imgSrc": 'img/libiya.jpg'
      //     },
      //     {
      //       "eqSheetNo": "QJSQ-GU-20191006-001",
      //       "attribute01CompanyName": "A国",
      //       "attribute02BaseName": "Q基地",
      //       "attribute08Name": "交付后",
      //       "sheetApplyDate": 1570291200000,
      //       "attribute05": "1",
      //       "attribute05Name": "一般"
      //     },
      //     {
      //       "eqSheetNo": "QJSQ-GU-20191005-001",
      //       "attribute01CompanyName": "A国",
      //       "attribute02BaseName": "Q基地",
      //       "attribute08Name": "交付后",
      //       "sheetApplyDate": 1570291200000,
      //       "attribute05": "2",
      //       "attribute05Name": "紧急"
      //     }
      //   ],
      //   edit: function (item) {
      //     alert('Edit Item: ' + item.id);
      //   },
      //
      //   share: function (item) {
      //     alert('Share Item: ' + item.id);
      //   },
      //
      //   moredata: true,
      //   doRefresh: function () {
      //     console.log("222222222");
      //     $scope.$broadcast('scroll.refreshComplete');
      //   },
      //
      //   loadMore: function () {
      //     $timeout(function () {
      //       $scope.$broadcast('scroll.infiniteScrollComplete');
      //       $scope.listModal1.moredata = false;
      //       console.log("22222222222222222222222222222" + $scope.listModal1.moredata);
      //     }, 1000);
      //   },
      //   goAdd: function () {
      //     modalService.create("add", "modules/add/add.html", $scope);
      //   },
      //   //底部tab切换方法
      //   selectFooter: function (type) {
      //     $scope.selectFooterType = type;
      //     switch (type) {
      //       case 1:
      //         $scope.listTitle = "列表一";
      //         $scope.selectFooterType_2_bg = '';
      //         break;
      //       case 2:
      //         $scope.listTitle = "列表二";
      //         $scope.selectFooterType_2_bg = 'selectFooterType_2_bg';
      //         // $scope.showLoading = false;
      //         // $ionicLoading.show({
      //         //   animation: 'fade-in',
      //         //   showBackdrop: true,
      //         //   // noBackdrop:'false',
      //         //   template:'<ion-spinner icon="circles" class="spinner-positive"></ion-spinner>',
      //         //   // duration: '30000'
      //         // });
      //         // $("#progressFill").animate({
      //         //   width: "100%"
      //         // }, 10 * 1000);
      //         // $scope.count = 0;
      //         // var timer = setInterval(function () {
      //         //   $scope.count++;
      //         //   var percentageValue = $scope.count + '%';
      //         //   $("#percentage").html(percentageValue);
      //         //   console.log("count", $scope.count);
      //         //   if ($scope.count >= 100) clearInterval(timer);
      //         // }, 99);
      //         break;
      //       case 3:
      //         $scope.listTitle = "列表三";
      //         $scope.selectFooterType_2_bg = 'selectFooterType_2_bg';
      //         break;
      //     }
      //   }
      // };
    }]);
