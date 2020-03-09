app.controller('ContactCtrl',['$scope', 'modalService', '$http', 
'$ionicScrollDelegate', '$timeout', 'sqlService',
function($scope, modalService, $http, 
$ionicScrollDelegate, $timeout, sqlService){
	$scope.contactModal = {
		id: 'contact',
		
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
		
		loadData:function(){

		},
		
		user:{},
		
	};
	
	$scope.contactlist = [];
	$scope.chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
					'q','r','s','t','u','v','w','x','y','z'];
	var callback = function(res){
			if(res != 'undefined' && res != null){
	        for(var i = 0; i < res.rows.length; i++){
	            $scope.contactlist.push(res.rows.item(i));
	        }
		}
	}
	sqlService.getContact(callback);
	
	$scope.searchchange = function(){
        $ionicScrollDelegate.$getByHandle('contactusers').scrollTop(true);
    }
	
	$scope.scrollto = function(c){
        $scope.searchvalue = "";
        var index = $scope.getIndexByChar(c);
        if(index == -1)
            return;
        $ionicScrollDelegate.$getByHandle('contactusers').scrollTo(0, index*80, true);
    };
    
    $scope.getIndexByChar = function(c){
        for (var i=0; i<$scope.contactlist.length; ++i){
            if ($scope.contactlist[i].LOGIN_NAME.toLowerCase().indexOf(c)==0)
                return i;
        }
        return -1;
    };
	
	$scope.next = function(user) {
		$scope.contactdetail = user;
		modalService.create("contact-detail","modules/contact/contact-detail.html", $scope);
    };
	
}]);