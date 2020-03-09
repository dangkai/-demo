app.controller('lockCodeCtrl',['$scope', 'avicitMobileApi',
function($scope, avicitMobileApi){

  $scope.lockCodeModal={
	 	hasLock:false,
	 	time:0,
	 	psw:avicitMobileApi.storage().getLocal("lock"),
	 	id: 'modules/lock/lock-code.html',
	 	close:function(){
			if (this.id != "")
				avicitMobileApi.closeTemplete(this.id);
		},
		data:{},
	 	init:function(){
      var opt = {
        chooseType: 3,
        width: document.body.clientWidth+"px",
        height: document.body.clientWidth+"px",
        container: 'lockCode',
        canvasId:'lockCode1',
        inputEnd: function(pwd){
          if(pwd === $scope.lockCodeModal.psw){
            //alert("Password is correct!");
            //avicitMobileApi.createTemplete("modules/lock/lock-set.html", $scope);
            //lockCode.reset();
          	$scope.lockCodeModal.close();
          }else{
            lock.drawStatusPoint('notright');
            setTimeout(function(){
              lockCode.reset();
              angular.element(document.querySelector('#lock-code-msg')).html("输入解锁图案");
              angular.element(document.querySelector('#lock-code-msg')).removeClass("message");
            },1200);
          }
        }
      }
			var lockCode = new H5lock(opt);
			lockCode.init();
	 	},

	 	cancel:function(){
      		ionic.Platform.exitApp();
	 	},
	 	
	 	doLogin:function(){
	 		if($scope.lockCodeModal.data.password == 'admin'){
	 			$scope.lockCodeModal.close();
	 		}else{
	 			alert("Your password is wrong!");
	 		}
	 	},

	 }
   setTimeout(function(){
     var tmp = $scope.lockCodeModal.psw;
     if(tmp != null && tmp != ''){
       $scope.lockCodeModal.hasLock = true;
     }
     $scope.lockCodeModal.init();
   }, 0)
}]);
