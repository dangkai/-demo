// url:upload to server's url; param:scope's variables in front need to be array
//<avicit-fileupload
//	url = 'http://10.216.77.219:8090/avicit-platform6-main/mobile/upload.do'
//	param = 'data'>
//</avicit-fileupload>
app.directive('avicitFileupload', function(){
	return{
		restrict:'AE',
		template: function (elem, attr) {
			var temp = "";
			temp += '<div class="padding">';
			temp += '<button class="button button-block button-positive" ng-click="popupSheet()">';
			temp += '添加附件</button>';
			temp += '</div>';
			return temp;
		},
		replace:true,
		scope: {
			param: '=',
      locationUrl:"="
		},
		controller:['$scope', '$ionicActionSheet', '$cordovaCamera', '$cordovaFileTransfer', 'PlatformConfigs',
			function($scope, $ionicActionSheet, $cordovaCamera, $cordovaFileTransfer, PlatformConfigs){
				$scope.popupSheet = function() {
					$ionicActionSheet.show({
						titleText: '上传附件',
						buttons: [
							{ text: '<i class="icon ion-images balanced"></i>照片' },
							{ text: '<i class="icon ion-camera assertive"></i>拍照' },
							{ text: '<i class="icon ion-folder royal"></i>文件' },
						],
						cancelText: '关闭',
						cancel: function() {
							console.log('CANCELLED');
						},
						buttonClicked: function(index) {
							if(PlatformConfigs.develop){
								return true;
							}
							console.log('BUTTON CLICKED:' + index);
							var options = {};
							switch(index){
								case 0:
									options = {
										destinationType: Camera.DestinationType.FILE_URI,
										sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
										mediaType : Camera.MediaType.PICTURE
									};
									break;
								case 1:
									options = {
										destinationType: Camera.DestinationType.FILE_URI,
										sourceType: Camera.PictureSourceType.CAMERA,
										mediaType : Camera.MediaType.PICTURE
									};
									break;
								case 2:
									options = {
										destinationType: Camera.DestinationType.FILE_URI,
										sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
										mediaType : Camera.MediaType.ALLMEDIA
									};
									break;
								default:
									break;
							}
							$cordovaCamera.getPicture(options).then(
								function (imageData) {
									var url = imageData;
									console.log(url);
									$scope.filetransfer(url);
								}, function (err) {
									console.log('Failed because: ');
									console.log(err);
								}
							);
							return true;
						},
					});
				};
				
				
				$scope.filetransfer = function(filePath){
					var server = $scope.avicitFileupload.url;
					console.log("server = " + server);
					var options1 = {};
		            options1.fileKey="myFile";
		            console.log(filePath);
		            options1.fileName=filePath.substr(filePath.lastIndexOf('/')+1);
		            options1.mimeType="image/jpeg";
					document.addEventListener('deviceready', function () {

						$cordovaFileTransfer.upload(server, filePath, options1)
						.then(function(result) {
							// Success!
							console.log(JSON.stringify(result));
              $scope.locationUrl=result;
							$scope.param.push(result);
							alert("Success!");
						}, function(err) {
							// Error
							alert("Error!");
						}, function (progress) {
							// constant progress updates
							console.log("progress: "+JSON.stringify(progress));
						});

					}, false);
				};
		}],
		link:function(scope, ele, attr){
			console.log(JSON.stringify(scope.param));
			scope.avicitFileupload = {};
			scope.avicitFileupload.url = 'http://10.216.77.219:8090/avicit-platform6-main/mobile/upload.do';
			if(attr.url){
				scope.avicitFileupload.url = attr.url;
			}
		}
	};
});
