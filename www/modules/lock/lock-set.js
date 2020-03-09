app.controller('lockSetCtrl',['$scope', 'avicitMobileApi',
function($scope, avicitMobileApi){

  $scope.lockSetModal={
	 	hasLock:false,
	 	time:0,
	 	pswOne:'',
	 	id: 'modules/lock/lock-set.html',
	 	close:function(){
			if (this.id != "")
				avicitMobileApi.closeTemplete(this.id);
		},
	 	init:function(){
      var opt = {
        chooseType: 3,
        width: document.body.clientWidth+"px",
        height: document.body.clientWidth+"px",
        container: 'lockSet',
        canvasId:'lockSet1',
        inputEnd: function(psw){
          if($scope.lockSetModal.time=='0'){
  					$scope.lockSetModal.pswOne=psw;
  					angular.element(document.querySelector('#lock-set-msg')).html("再输入一次");
  					$scope.lockSetModal.time++;
  					lockset.reset();
  				}else if($scope.lockSetModal.time=='1'){
  					if($scope.lockSetModal.pswOne!=psw){
  						angular.element(document.querySelector('#lock-set-msg')).html("两次密码不一致请从新输入");
  						angular.element(document.querySelector('#lock-set-msg')).addClass("message");
  						$scope.lockSetModal.time=0;
  						lockset.drawStatusPoint('notright');
  						setTimeout(function(){
  							lockset.reset();
  							angular.element(document.querySelector('#lock-set-msg')).html("绘制解锁图案");
  							angular.element(document.querySelector('#lock-set-msg')).removeClass("message");
  						},1200);
  					}else{
  						angular.element(document.querySelector('#lock-set-msg')).html("设置成功");
  						angular.element(document.querySelector('#lock-set-msg')).removeClass("message");
              console.log("password is " + psw);
  						avicitMobileApi.storage().setLocal("lock", psw);
              $scope.lockModal.hasLock = true;
              $scope.lockModal.psw = psw;
              $scope.lockSetModal.cancel();
  					}
          }
        }
      }
			var lockset = new H5lock(opt);
			lockset.init();
	 	},

	 	cancel:function(){
      $scope.lockSetModal.close();
	 	},

    addLock:function(){
      //$scope.lockModal.hasLock = true;
      avicitMobileApi.createTemplete("modules/lock/lock-set.html", $scope);
    }

	 }
   setTimeout(function(){
     $scope.lockSetModal.init();
   },50)
}]);
