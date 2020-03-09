app.controller('ListCtrl1',
  ['$scope', 'modalService', '$http', '$ionicScrollDelegate', 
	'$timeout', 'requestService', '$ionicLoading',
    function ($scope, modalService, $http, $ionicScrollDelegate, $timeout, 
		requestService, $ionicLoading) {
           //显示选中标记
           $scope.flagShow=false;
		   $scope.flagTest=false;
      /**
       * @params [string]  返回字符串
       * @descriptionflagShow
       *  返回函数
       */
       $scope.goBack=function(){
         modalService.close("list");
        };

      /**
       * @description
       *  点击方法
       */
      $scope.deleteFun=function(){
        $scope.flagShow=! $scope.flagShow;
				
      };
			 
			/* 
			    选择方法
			 */
		 $scope.selectFun=function(){
	    $scope.flagShow=! $scope.flagShow;
				// $scope.flagTest=!$scope.flagTest;
				console.log(	$scope.flagTest);
			};
      /**
       * @description
       * 显示id
       */
//       $scope.detail=function(item){
// 			
//  /*      if($scope.flagShow==true){
//        }else if($scope.flagShow==false){
//          modalService.create("detail","modules/list/detail.html",$scope);       } */
//       };

			
		
			 
			/*@description
			数据初始化请求方法
			 */
			 var  url="https://iam.cn-north-4.myhuaweicloud.com/v3/auth/tokens";
			$scope.initData=function(){
			data={
			"auth": {
			"identity": {
			"methods": ["password"],
			"password": {
			"user": {
				"name": "hw01316305",
				"password": "dangkai9527",
				"domain": {
					"name": "hw01316305"
				}
			}
			}
			},
			"scope": {
			"project": {
			"name": "cn-north-4"
			}
			}
			}
			},
			transFn=function(data) {
			return $.param(data);
			},
			config={
			headers:{'Content-Type':'application/json;charset=UTF-8'},
			// transformRequest: transFn
			};
			$http.post(url, data, config).
			success(function(data, status, headers, config) {
			$scope.list_Data=data.List;
			
			}).
			error(function(data, status, headers, config) {
			console.log("error==="+JSON.stringify(data));
			});

			};
							 
					 Mock.mock(url,{
									"List|5-10":[{
									"title":'@csentence(5)',
									'url':'@imageurl',
									'text':'@sentence(3,5)',
									'time':'@date(yyyy-MM-dd)'
								}
							]
						} );
						Mock.Random.extend({
							imageurl:function(){
								var imageData=['img/myinfo_normal.png','img/myinfo_normal.png','img/myinfo_normal.png'];
								return this.pick(imageData);
							}
						});
						Mock.Random.extend({
							wordData:function(){
								var word=['VUE','React','Android'];
								return this.pick(word);
							}
						});
			//调用初始化方法
			$scope.initData();
    }]);
