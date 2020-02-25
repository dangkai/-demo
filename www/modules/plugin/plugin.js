app.controller('BarcodeCtrl',['$scope', 'modalService', '$cordovaBarcodeScanner',
function($scope, modalService, $cordovaBarcodeScanner){
	$scope.barcodeModal = {
		id: 'barcode',
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
	};
	
	$scope.scan = function () {
		$cordovaBarcodeScanner.scan().then(
			function (result) {
				$scope.scanResult = result;
			}, function (err) {
				$scope.scanResult = 'SCAN ERROR (see console)';
				console.error(err);
			}
		);
    };
	
}]);

app.controller('CameraCtrl',['$scope', 'modalService', '$cordovaCamera',
function($scope, modalService, $cordovaCamera){
	$scope.cameraModal = {
		id: 'camera',
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
	};
	$scope.takePicture = function () {
		var options = {
			quality: 50,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA
		};

		// udpate camera image directive
		$cordovaCamera.getPicture(options).then(
			function (imageData) {
				$scope.cameraimage = "data:image/jpeg;base64," + imageData;
			}, function (err) {
				console.log('Failed because: ');
				console.log(err);
			}
		);
	};
	$scope.getPicture = function () {
		var options = {
			quality: 50,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY
		};

		// udpate camera image directive
		$cordovaCamera.getPicture(options).then(
			function (imageData) {
				$scope.cameraimage = "data:image/jpeg;base64," + imageData;
			}, function (err) {
				console.log('Failed because: ');
				console.log(err);
			}
		);
	};
}]);

app.controller('ngContactCtrl',['$scope', 'modalService', '$cordovaContacts',
function($scope, modalService, $cordovaContacts){
	$scope.ngcontactModal = {
		id: 'ngcontact',
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
	};
	$scope.pickContact = function () {
      document.addEventListener("deviceready", function () {
        $cordovaContacts.pickContact().then(function (result) {
          console.log(JSON.stringify(result));
          $scope.selectedContact = result;
        })
      }, false);
    };
}]);

app.controller('DatePickerCtrl',['$scope', 'modalService', '$cordovaDatePicker',
function($scope, modalService, $cordovaDatePicker){
	$scope.datepickerModal = {
		id: 'datepicker',
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
	};
	var options,
        dateType,
        msg = '请选择',
        handleDatePicker = function (date) {
          $scope.data1[dateType] = date;
          //$scope.$apply();
        };

    $scope.data1 = {
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
}]);
app.controller('DeviceCtrl',['$scope', 'modalService', '$cordovaDevice', '$cordovaAppVersion',
function($scope, modalService, $cordovaDevice, $cordovaAppVersion){
	$scope.deviceModal = {
		id: 'device',
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
	};
	var init = function () {
      console.log("initializing device");
      try {
        document.addEventListener("deviceready", function () {
          $scope.available = $cordovaDevice.getDevice().available;
          $scope.cordova = $cordovaDevice.getCordova();
          $scope.model = $cordovaDevice.getModel();
          $scope.platform = $cordovaDevice.getPlatform();
          $scope.uuid = $cordovaDevice.getUUID();
          $scope.version = $cordovaDevice.getVersion();
		  $cordovaAppVersion.getVersionNumber().then(function (version) {
				$scope.appversion = version;
			  });
		  
		  $cordovaAppVersion.getVersionCode().then(function (build) {
				$scope.appcode = build;
			  });
		  
		  $cordovaAppVersion.getVersionCode().then(function (name) {
				$scope.appname = name;
			  });
		  
		  $cordovaAppVersion.getVersionCode().then(function (data) {
				$scope.packagename = data;
			  });
        }, false);
      }
      catch (err) {
        console.log("Error " + err.message);
        alert("error " + err.$$failure.message);
      }
    };

    init();
}]);

app.controller('FileDownloadCtrl',['$scope', 'modalService', '$cordovaFileTransfer', '$timeout',
function($scope, modalService, $cordovaFileTransfer, $timeout){
	$scope.filedownloadModal = {
		id: 'filedownload',
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
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

app.controller('FlashlightCtrl',['$scope', 'modalService', '$cordovaFlashlight',
function($scope, modalService, $cordovaFlashlight){
	$scope.flashlightModal = {
		id: 'flashlight',
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
	};
	$scope.on = function () {
		$cordovaFlashlight.switchOn();
	};
	$scope.off = function () {
		$cordovaFlashlight.switchOff();
	};
}]);

app.controller('MediaCtrl',['$scope', 'modalService', '$cordovaMedia', '$ionicPlatform',
function($scope, modalService, $cordovaMedia, $ionicPlatform){
	$scope.mediaModal = {
		id: 'media',
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
	};
	var thisMedia;

    $ionicPlatform.ready(function () {
      thisMedia = $cordovaMedia.newMedia('modules/plugin/sample.mp3');
    });


    $scope.playMedia = function () {

      thisMedia.play().then(function(){
      // success
      //Perform some action when playback finishes like playNext()
      console.log("fire when playback finishes");

        }, null, function(data){

        if(data.status){
          //Watch for status changes from the Media plugin, perform some action on start, stop, pause etc
          //Media.MEDIA_NONE = 0;
          //Media.MEDIA_STARTING = 1;
          //Media.MEDIA_RUNNING = 2;
          //Media.MEDIA_PAUSED = 3;
          //Media.MEDIA_STOPPED = 4;
          console.log(data.status);
        };

        if(data.duration){
          //gets the duration of the current track, perform some action with the duration
          console.log("track duration: " +data.duration);
        };

        if(data.position){
          //Update the current playback position every second
          console.log('track progress: ' + data.position);
        };

        });
      console.log("play media");
    };

    $scope.stopMedia = function () {
      thisMedia.pause();
    };

    $scope.getCurrentPosition = function () {
      thisMedia.currentTime().then(function(position){
        console.log("current playback position is:" + position);
      });
    };

    $scope.getDuration = function () {
      thisMedia.getDuration().then(function(duration){
        console.log("media duration is:" + duration);
      });
    };
}]);

app.controller('NetworkCtrl',['$scope', 'modalService', '$cordovaNetwork',
function($scope, modalService, $cordovaNetwork){
	$scope.networkModal = {
		id: 'network',
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
	};
	$scope.networkType = null;
    $scope.connectionType = null;

    document.addEventListener("deviceready", function () {
      $scope.networkType = $cordovaNetwork.getNetwork();

      if ($cordovaNetwork.isOnline()) {
        $scope.connectionType = 'Online';
      }
      else if ($cordovaNetwork.isOffline()) {
        $scope.connectionType = 'Offline';
      }
      else {
        $scope.errorMsg = 'Error getting isOffline / isOnline methods';
      }
    }, false);

}]);

app.controller('PreferenceCtrl',['$scope', 'modalService', '$cordovaPreferences',
function($scope, modalService, $cordovaPreferences){
	$scope.preferenceModal = {
		id: 'preference',
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
	};
	var key = 'exampleKey';
    $scope.data = {};
    $scope.data.showMore = false;
    $scope.data.key = key;

    $scope.preferencesSet = function () {
      $cordovaPreferences.set(key, $scope.data.value)
        .then(function (result) {
          if (result) {
            $log.log(key + ' was succesfully set to:', $scope.data.value);
            $scope.data.showMore = true;
          } else {
            $log.log(key + ' was not set to: ' + $scope.data.value + ' we got ', result);
          }
        }, function (err) {
          $log.log(key + ' was not set to: ' + $scope.data.value + ' due to', err);
        });
    };

    $scope.preferencesGet = function () {
      $cordovaPreferences.get(key)
        .then(function (value) {
          $log.log(key + ' get was succesfully:', value);
          $scope.data.pref = value;
        }, function (err) {
          $log.log(key + ' get was not succesfully: ' + $scope.data.value + ' due to', err);
        });
    };
}]);

app.controller('SqliteCtrl',['$scope', 'modalService', '$cordovaSQLite',
function($scope, modalService, $cordovaSQLite){
	$scope.sqliteModal = {
		id: 'sqlite',
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
	};
	//var db = $cordovaSQLite.openDB({ name: "my.db" });

	//$scope.execute = function() {
	//	var query = "INSERT INTO test_table (data, data_num) VALUES (?,?)";
	//		$cordovaSQLite.execute(db, query, ["test", 100]).then(function(res) {
	//		console.log("insertId: " + res.insertId);
	//	}, function (err) {
	//		console.error(err);
	//	});
	//};
}]);

app.controller('ToastCtrl',['$scope', 'modalService', '$cordovaToast',
function($scope, modalService, $cordovaToast){
	$scope.toastModal = {
		id: 'toast',
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
	};
	$scope.toastMessage = '请输入显示的文字';

    $scope.center = function (message) {
      $cordovaToast.show(message, 'long', 'center')
        .then(function (success) {
          console.log("center msg displayed");
        }, function (error) {
          $scope.msg = error.message;
        });
    };

    $scope.top = function (message) {
      $cordovaToast
        .showShortTop(message)
        .then(function (success) {
          console.log("short top displayed ");
        }, function (error) {
          $scope.msg = error.message;
        });
    };

    $scope.bottom = function (message) {
      $cordovaToast
        .showLongBottom(message)
        .then(function (success) {
          console.log("long bottom displayed");
        }, function (error) {
          $scope.msg = error.message;
        });
    }
}]);

app.controller('OpenCtrl',['$scope', 'modalService', '$cordovaFileOpener2', '$cordovaCamera',
function($scope, modalService, $cordovaFileOpener2, $cordovaCamera){
	$scope.openModal = {
		id: 'open',
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
		goAdd:function(){
			console.log(JSON.stringify($scope.data));
		}
	};
	
	$scope.data = [];
	
	$scope.getFile = function () {
		var open = cordova.plugins.disusered.open;
		function success() {
			console.log('Success');
		}
		 
		function error(code) {
			if (code === 1) {
				console.log('No file handler found');
			} else {
				console.log('Undefined error');
			}
		}
		
		var options = {
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			mediaType : Camera.MediaType.ALLMEDIA
		};

		// udpate camera image directive
		$cordovaCamera.getPicture(options).then(
			function (imageData) {
				var url = 'file:' + imageData;
				console.log(url);
				open(url, success, error);
			}, function (err) {
				console.log('Failed because: ');
				console.log(err);
			}
		);
	};
	$scope.open = function(id){
		var open = cordova.plugins.disusered.open;
		function success() {
			console.log('Success');
		}
		 
		function error(code) {
			if (code === 1) {
				console.log('No file handler found');
			} else {
				console.log('Undefined error');
			}
		}
		switch(id){
			case 1:
				open('file:/storage/emulated/0/xfservice/aa.png', success, error);
				break;
			case 2:
				open('file:/storage/emulated/0/xfservice/p1.pdf', success, error);
				break;
			case 3:
				$cordovaFileOpener2.open(
					'/storage/emulated/0/xfservice/p1.pdf',
					'application/pdf'
					).then(function() {
					// file opened successfully
					}, function(err) {
					// An error occurred. Show a message to the user
				});
				break;
		}
	}
}]);
