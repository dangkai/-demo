app.controller('flightAddCtrl',['$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout',
function($scope, modalService, $http, $ionicScrollDelegate, $timeout){
  /**
   * @author  dk
   * @params  { id}
   * String id ://对映界面id
   */
  $scope.goBack=function(){
    modalService.close("flight-add");
  };
}]);
