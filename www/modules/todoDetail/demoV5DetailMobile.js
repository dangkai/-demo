app.controller('DemoV5DetailMobileCtrl',['$scope', 'modalService', '$http', '$ionicScrollDelegate', '$timeout','$sce','requestService', 
function($scope, modalService, $http, $ionicScrollDelegate, $timeout,$sce,requestService){


	$scope.detailModal = {
		id: 'demoTodoDetail',
		
		userList : [ 
		              {index:0,userdata:[
		               {
							no : "liuyk",
							id : "ssssss",
							name : "刘炎昆"
						}, {
							no : "gyg",
							id : "aaaa",
							name : "郭宇光"
						}, {
							no : "zhanglei",
							id : "bbbbb",
							name : "张磊"
						} ]
		             }
					 , 
					  {index:1,userdata:[
					   {
							no : "liuyk",
							id : "ssssss",
							name : "刘炎昆"
						}, {
							no : "gyg",
							id : "aaaa",
							name : "郭宇光"
						}]
					 }
					  
		          ],
		
		close:function(){
			if (this.id != "")
				modalService.close(this.id);
		},
		delReceiver:function(id,index){
			var userlist = this.userList[index].userdata;
			for (var i=0 ; i< userlist.length; ++i){
	            if (userlist[i].id == id){
	            	userlist.splice(i,1);
	                return;
	            }
	        }
		}
	
	};
	

}]);