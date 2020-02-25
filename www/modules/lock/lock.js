app.controller('lockCtrl',['$scope', 'avicitMobileApi',
function($scope, avicitMobileApi){

  $scope.lockModal={
	 	hasLock:false,
	 	time:0,
	 	psw:avicitMobileApi.storage().getLocal("lock"),
	 	id: 'lock',
	 	close:function(){
			if (this.id != "")
				avicitMobileApi.closeTemplete(this.id);
		},
	 	init:function(){
      var opt = {
        chooseType: 3,
        width: document.body.clientWidth+"px",
        height: document.body.clientWidth+"px",
        container: 'lock',
        canvasId:'lock1',
        inputEnd: function(pwd){
          if(pwd === $scope.lockModal.psw){
            alert("Password is correct!");
            avicitMobileApi.createTemplete("modules/lock/lock-set.html", $scope);
            lock.reset();
          }else{
            lock.drawStatusPoint('notright');
            setTimeout(function(){
              lock.reset();
              angular.element(document.querySelector('#lock-msg')).html("输入解锁图案");
              angular.element(document.querySelector('#lock-msg')).removeClass("message");
            },1200);
          }
        }
      }
			var lock = new H5lock(opt);
			lock.init();
	 	},

	 	cancel:function(){
      $scope.lockModal.close();
	 	},

    addLock:function(){
      avicitMobileApi.createTemplete("modules/lock/lock-set.html", $scope);
    }

	 }
   setTimeout(function(){
     var tmp = $scope.lockModal.psw;
     console.log(tmp);
     if(tmp != null && tmp != ''){
       $scope.lockModal.hasLock = true;
     }
     $scope.lockModal.init();
   }, 0)
}]);
