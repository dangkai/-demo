/*



* get all http url
*/
angular.module('myToastModule', ['ionic-toast'])
  .factory('ToastService', [
    '$cordovaToast',
    'PlatformConfigs',
    'ionicToast',
    function ($cordovaToast, PlatformConfigs, ionicToast) {
      return {
			
        Toast: function (message) {
          if (false) {
            ionicToast.show(message, 'middle', false, 3000);
          }else{
			     	$cordovaToast.showShortBottom(message);
					}
        },
        showToast: function (message) {
          ionicToast.show(message, 'middle', false, 3000);
        }
      }
    }]);

