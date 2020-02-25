angular.module('platform.config.model', []).factory('ModelSeting', ['$scope',' $ionicPlatform','$ionicPopup', function ($scope,$ionicPlatform,$ionicPopup) {

  return {

    Model_Flight: 0, //二维码

    Model_Fault: 1, //文字识别

    registerBack: function (id,fun) {
      var deregister = $ionicPlatform.registerBackButtonAction(function (e) {
            fun();
      }, id);
      $scope.$on('$destroy', deregister);
    }
  }
}]);
