app.controller('LoginCtrl', ['$scope', 'modalService', '$http', 'requestService',
  'preferencesService', 'PlatformConfigs','avicitMobileApi','$http','interfactory',
  function ($scope, modalService, $http, requestService,
            preferencesService, PlatformConfigs,avicitMobileApi,$http,interfactory) {
    //华为云功能集成token:
    $scope.Token="";
    $scope.testLogin=function(){
			avicitMobileApi.jpushService().testJpush();
			 return;
      var  url="https://iam.cn-north-4.myhuaweicloud.com/v3/auth/tokens";
		 // var url="http://192.168.0.115:8088/ZHJKF/api/zhjkf/jcsj/basicinfo/jcsjaircraftsystem/JcsjAircraftSystemRest/search/v1";
//     var url="http://192.168.0.115:8088/ZHJKF/api/zhjkf/jcsj/basicinfo/jcsjaircraftsystem/JcsjAircraftSystemRest/search";
// 	  var url="info.json";
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
        $scope.Token =headers("X-Subject-Token");
        console.log("$scope.Token=="+$scope.Token);
        modalService
                .create(
                  "main",
                  "modules/main/main.html",
                  $scope);
      }).
      error(function(data, status, headers, config) {
						console.log("error==="+JSON.stringify(data));
      });
    };

//     var obj = {'aa':'11'};
//      var array=[{'name':'DK'},{'name':'zmj'},{'name':'dyf'}];
// 		 		 var count=0;
//     // Mock响应模板;
//     Mock.mock('http://192.168.0.115:8088/ZHJKF/api/zhjkf/jcsj/basicinfo/jcsjaircraftsystem/JcsjAircraftSystemRest/search/v1', {
// 			"user|1-3": [{   // user生成一个新数组 重估次数大于等1，小于等3 作为结果
//         'name|1 ':'1',  // 中文名称 重复1次
//         'id|1-2': 2,    // 从重复次数大于等1次小于等2次
//         'age|18-28.1-2': 0,   // 18至28以内随机整数,1-2保留大于等于1位小于等于2位, 0确定类型
// 				'sum|0-100.3': 1,   // 0至100以内随机整数,保留3位小数, 0确定类型
// 				'isMale|1': true,  // 随机生成一布尔值 true的概率1/2 false概率1/2
// 				'isFat|1-2': true,  // true的概率是1/3
// 				 'formObj|2':obj,//从obj中随机出现俩个属行
// 				'formObj2|1-3':obj,//从obj中随机出现1-3个属行
// 			  'userName|1': array, // array随机选取 1 个元素
// 				'userName2|+1': array, // array中顺序选取元素作为结果
// 				'userNameCount|1-3': array, // array中生成一个新数据，重复次数大于等1 小于等于3 作为结果
// 				'friends|2': ['jack', 'jim'] ,// 重复2次属性值生成一个新数组
// 				 'fun':function(){
// 			
// 					 count++;
// 					 return count;
// 				 } , 
// 				
// 				  'regexp1': /[a-z][A-Z][0-9]/,//正则表达式生成随机数
// 					
//         'birthday': '@date("yyyy-MM-dd")',  // 日期
//         'city': '@city(true)',   // 中国城市
//         'color': '@color',  // 16进制颜色
//   
//       },{
//         'gf': '@cname'
//       }]
//     });
//    /////////////////////////使用模板形式的
//     var obj = {'aa':'11', 'bb':'22', 'cc':'33', 'dd':'44'};
//    
//    // Mock响应模板
// 
// 
// 
// 
//   Mock.mock('info.json', 
// 		'@info'
// 		);
// 		//配置拦截接口返回时间
//    Mock.setup({
// 	 			 timeout:'500'//设置拦截后请求返回数据集合时间,
// 	 });
// 	 //占位符扩展方法 
//    Mock.Random.extend({
// 	  info:function(){
// 				 var array=['dk','dxy','dyf'];
// 			 return  this.pick(array);
// 		},
// 		});

   // Mock.Random.info();
	 
	 
    // $scope.loginModal = {
    //   id: 'loginModal',


    // $scope.loginModal = {
    //   id: 'loginModal',

    //   close: function () {
    //     if (this.id != "")
    //       modalService.close(this.id);
    //   },
    //   loginData:
    //     {
    //       'username': '',
    //       'password': ''
    //     },
    //   saving: {checked: true},
    //
    //   doLogin: function () {
    //     if($scope.loginModal.loginData.username == "") {
    //       avicitMobileApi.toastService().Toast("请输入用户名");
    //       return;
    //     } else if($scope.loginModal.loginData.password == "") {
    //       avicitMobileApi.toastService().Toast("请输入密码");
    //       return;
    //     }
    //     if ($scope.loginModal.loginData.password != 'cape') {
    //       $scope.loginModal.loginData.password = "";
    //       avicitMobileApi.toastService().Toast("密码错误");
    //     } else {
    //       requestService.loginNoCache( $scope.loginModal.loginData,function(data){
    //       			if (data.serverMsg.code == '0'){
    //       				preferencesService.get("sql", function(data){
    //       		            if(!PlatformConfigs.develop && data != '1'){
    //       		                modalService.create("loading","modules/loading/loading.html", $scope);
    //       		            }else{
    //       		            	modalService.create("home","modules/home/home.html", $scope);
    //       		            }
    //       		        }, function(data){
    //       		            console.log("no sql excutes");
    //       		        });
    //       			}else{
    //       				console.log("login failed");
    //       			}
    //       		},function(data){
    //
    //       });
    //
    //
    //
    //     }
    //   }
    // };
  }]);
// var obj = {'aa':'11', 'bb':'22', 'cc':'33', 'dd':'44'};
//
// // Mock响应模板
// Mock.mock('http://test.com', {
//   "user|1-3": [{   // 随机生成1到3个数组元素
//     'name': '@cname',  // 中文名称
//     'id|+1': 88,    // 属性值自动加 1，初始值为88
//     'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
//     'birthday': '@date("yyyy-MM-dd")',  // 日期
//     'city': '@city(true)',   // 中国城市
//     'color': '@color',  // 16进制颜色
//     'isMale|1': true,  // 布尔值
//     'isFat|1-2': true,  // true的概率是1/3
//     'fromObj|2': obj,  // 从obj对象中随机获取2个属性
//     'fromObj2|1-3': obj,  // 从obj对象中随机获取1至3个属性
//     'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
//     'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
//     'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
//   },{
//     'gf': '@cname'
//   }]
// });
