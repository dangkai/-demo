app.controller('ListCtrl3',['$scope', 'modalService', '$ionicScrollDelegate', '$timeout',
function($scope, modalService,  $ionicScrollDelegate, $timeout){

  /**
   * @author  dk
   * @params  { id}
   * String id ://对映界面id
   */
  $scope.goBack=function(){
    modalService.close("flight-detail");
  };


}]);
