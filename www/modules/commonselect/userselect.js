app.controller('UserselectCtrl',['$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout','$sce','requestService', 
function($scope, modalService, $http, $ionicScrollDelegate, $timeout,$sce,requestService){


	$scope.selectUserModal = {
		id: 'common-select-user',
		
		userList : $scope.selectedUserList,
		/*	[ 
		               {
							no : "liuyk",
							id : "ssssss",
							name : "刘炎昆",
							selected : ""
						}, {
							no : "gyg",
							id : "aaaa",
							name : "郭宇光",
							selected : ""
						}, {
							no : "zhanglei",
							id : "bbbbb",
							name : "张磊",
							selected : ""
						},{
							no : "lichao",
							id : "afsdfa",
							name : "李超",
							selected : ""
						}
		          ],*/
		
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		}
	
	};
	
	$scope.select = function(id){
		var users = $scope.selectUserModal.userList;
        for (var i=0; i< users.length; ++i){
            if (users[i].id == id){
            	users[i].selected = !users[i].selected;
            }
        }
    }
	
	$scope.confirm = function(){
	    var objs = [];
	    var users = $scope.selectUserModal.userList;
	    if ($scope.callback != undefined){
			for (var i=0; i<users.length; ++i){
				if (users[i].selected == true){
					var obj = {id: users[i].id, name:users[i].name,no:users[i].no};
					objs.push(obj);
				}
		    }
			$scope.callback(objs);
	    }
	    $scope.selectUserModal.close();
    }
	
	$scope.searchchange = function(){
        $ionicScrollDelegate.$getByHandle('contactusers').scrollTop(true);
    }
	
	$scope.initData = function(){
		for(var i=0;i<$scope.selectUserModal.userList.length;i++){
			var user = $scope.selectUserModal.userList[i];
			user.selected=false;
			for(var j=0;j<$scope.selectedUsers.length;j++){
				var selectUser = $scope.selectedUsers[j];
				if (selectUser.no == user.no){
					user.selected = true;
				}
			}
		}
	}
	$scope.initData();

}]);