app.controller('mainCtrl', ['$scope', 'modalService', '$http', 'requestService',
  'preferencesService', 'PlatformConfigs','$ionicPlatform','$ionicPopup',
  '$ionicSideMenuDelegate','avicitMobileApi',
  function ($scope, modalService, $http, requestService,
            preferencesService, PlatformConfigs,
            $ionicPlatform, $ionicPopup,
			$ionicSideMenuDelegate,avicitMobileApi){
           //显示二维码
           $scope.modelModel=[{name:'中航技',checked:'false'},{name:'中航国际',checked:'false'},
             {name:'飞龙',checked:'false'},{name:'保密考试',checked:'false'},
             {name:'民机快响',checked:'false'},{name:'空天 611',checked:'false'}
          ];
           //显示消息
           $scope.modelData=[{name:'VUE',typeColor:'yellow',time:'2019-09-09',iType:'1'},
             {name:'React',typeColor:'red',time:'2019-10-09',iType:'2'},
             {name:'Android',typeColor:'green',time:'2019-06-09',iType:'3'}];
			  var  url="https://iam.cn-north-4.myhuaweicloud.com/v3/auth/tokens";
		//发送一个连接方法
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
				 console.log(JSON.stringify(data));
				 $scope.loginInfo=data.user.data;
				  $scope.mainList=data.user.List;
// 			   $scope.Token =headers("X-Subject-Token");
// 			   console.log("$scope.Token=="+$scope.Token);
// 			   modalService
// 			           .create(
// 			             "main",
// 			             "modules/main/main.html",
// 			             $scope);
			 }).
			 error(function(data, status, headers, config) {
			 			console.log("error==="+JSON.stringify(data));
			 });
			
		 };
		 
		   Mock.mock(url,{
			"user":{'data':{
				'userName':'@cname',
				'dept':'@dept',
				 'iphone':'@iphone',
				 'city':'@city(true)',
				 'email':'@email',
				},
				'List|3':[
					{
					'name':'@wordData',
					 'time':'@date(yyyy-MM-dd)',
					 'text':'@sentence(3)',
					 'typeColor':'@typeColor',
					  'iType|1-3':1,
					}
				]
				}});
				Mock.Random.extend({
					typeColor:function(){
						var typeColor=['yellow','red','green'];
						return this.pick(typeColor);
					}
				});
				Mock.Random.extend({
					wordData:function(){
						var word=['VUE','React','Android'];
						return this.pick(word);
					}
				});
				
				Mock.Random.extend({
					dept:function(){
						var dept=['客户服务部','技术部','销售部','工程应用部'];
						return this.pick(dept);
					}
				});
				
				Mock.Random.extend({
					iphone:function(){
						var iphone=['13572998745','13572437244','13572437298','13573452345'];
						return this.pick(iphone);
					}
				});
			//调用方法
			  $scope.initData();
     /**
     *
     * @type {string[]}
     */
        $scope.clickType=function(type){
          $scope.clickTypeAtta=type;
          modalService.create("sccaner","modules/main/model_Sccaner.html",$scope);
     };
    //显示
			$scope.Data=["","",""];
			//声明副标题按钮标记
			$scope.btn_flag=1;
			//返回标记
			$scope.back_flag=false;
			//标点
			$scope.currIndex=0;
			//获取屏幕宽度
			$scope.circleWidth= (document.body.clientWidth/4)-10;

     /**
     * @auther dk
     * @description
     * 返回方法
     * params [String]
     *       String  //显示返回的标记
     */
    $scope.goBack=function(){
      modalService.close("main");
    };
    /**
     * @descirption
     *  @params [flag];
      * int  flag : 1 表示风格一 ;2 表示风格二 ;3 表示风格三
     *
     */
    $scope.btn_flag_fun=function(flag){
        $scope.btn_flag=flag;//赋值
    };
    /**
     * @author
     * @description
     * 滑动方法
     *params [object]
     *  int index:  滑动框对应索引
     */
    $scope.slideHasChanged=function(index){
      $scope.currIndex=index;
    };
    /**
     * @author
     * @params  { TYPE}
      *   NUMBER  type : 选中模块类型
     *  @desciription
     *  界面跳转方法
     */
    $scope.GO_Model_Fun=function(type){
      switch(TYPE){
        // case ModelSeting.Model_Flight:
        //   //飞行模块
        //    break;
        // case ModelSeting.Model_Fault:
        //   //故障模块
        //   break;

      }
    }
    /**
     *
     */
    $scope.testList=function(TYPE){
      switch(TYPE){
        case 0:
		 //显示图表信息
		modalService.create("char","modules/char/char.html",$scope);
          //二维码模块
        // modalService.create("loginNoList","modules/main/loginNoList.html",$scope);
           break;
        case 1:
          //图文识别模块
          modalService.create("meeting","modules/meeting/meeting.html",$scope);
          break;
        case 2:
          //列表
					 modalService.create("list3","modules/list/list3.html",$scope);
					   // modalService.create("list2","modules/list/list2.html",$scope);
          break;
        case 3:
          //联系人
          modalService.create("todo","modules/todo/todo.html",$scope);
          break;
      }

    };
	 
	/**@descrption
	    tab模块选择方法
	 */ 
	
	$scope.selectTabFun=function(){
	avicitMobileApi.toastService().Toast("模块正在整合中。。。。。");
	};
    /**
     *  滑动代码框
     */
    $scope.toggleLeftFun=function(){
      $ionicSideMenuDelegate.toggleLeft();
    };
    /**
     * @description
     * 点击更多方法
     */
    $scope.moreFun=function(){
			modalService.create("list2","modules/list/list2.html",$scope);
      // modalService.create("list","modules/list/list.html",$scope);
    };
    /**
     * @author dk
     * @descriptions
     * 返回键方法
     */
    var deregister=$ionicPlatform.registerBackButtonAction(function(e){

      var servicePopup = $ionicPopup.show({
        title: '提示',
        subTitle: '你确定要退出应用吗？',
        scope: $rootScope,
        buttons: [
          {
            text: '取消',
            type: 'button-clear button-assertive',
            onTap: function () {
              return 'cancel';
            }
          },
          {
            text: '确认',
            type: 'button-clear button-assertive border-left',
            onTap: function (e) {
              $scope.back_flag=e;
              return 'active';
            }
          },
        ]
      });
      //设置返回键作用
      servicePopup.then(function (res) {

        if (res ) {
          // 退出app
          ionic.Platform.exitApp();
        }
      });
    },101);
    $scope.$on('$destroy', deregister);
  }]);
