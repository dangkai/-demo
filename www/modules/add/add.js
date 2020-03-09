﻿app.controller('AddCtrl',['$scope', 'modalService', 
'$http', '$cordovaDatePicker', '$timeout', '$cordovaFileTransfer',
function($scope, modalService, $http, $cordovaDatePicker, $timeout, $cordovaFileTransfer){
	$scope.addModal = {
		id: 'add',
		
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
		
		loadData:function(){

		},
		
	};
	
	$scope.value1 = true;
	$scope.value2 = 'YES'
	
	$scope.color = 'blue';
	$scope.specialValue = {
		"id": "12345",
		"value": "green"
	};
	
	
	
	var options,
        dateType,
        msg = 'not picked yet',
        handleDatePicker = function (date) {
        	alert(date);
          $scope.data[dateType] = date;
          //$scope.$apply();
        };

    $scope.data = {
      date: msg,
      time: msg
    };


    $scope.pick = function (type) {
      options = {
        date: new Date(),
        mode: type
      };
      dateType = type;
      $cordovaDatePicker.show(options).then(handleDatePicker);
    };
	
	
	$scope.downloadFile = function () {
      document.addEventListener('deviceready', function () {
        var url = "http://cdn.wall-pix.net/albums/art-space/00030109.jpg";
        var fileDir = cordova.file.externalRootDirectory + "testImage.png";

        var download = $cordovaFileTransfer.download(url, fileDir).then(function (success) {
          console.log("success " + JSON.stringify(success));
          $timeout(function () {
            $scope.downloadProgress = 100
          }, 1000);
        }, function (error) {
          console.log("Error " + JSON.stringify(error));
        }, function (progress) {
          $timeout(function () {
            $scope.downloadProgress = (progress.loaded / progress.total) * 100;

          });
        });


        if ($scope.downloadProgress > 0.1) {
          download.abort();
        }
      })
    };
	
	
}]);