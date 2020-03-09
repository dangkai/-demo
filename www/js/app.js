var app = angular.module('starter', [
  'ionic',
  'ngCordova',
  'platform.config']);
app.run(['$ionicPlatform', '$rootScope', 'Configs', 'PlatformConfigs', 'avicitMobileApi',
  function ($ionicPlatform, $rootScope, Configs, PlatformConfigs, avicitMobileApi) {
    $rootScope.backColor = "red";
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
      //左侧滑动
      $rootScope.backColorArr = ["red", 'yellow', 'blue'];
      $rootScope.i = 0;
      $rootScope.leftBack = function () {
        if ($rootScope.i == 2) {
          return;
        }
        $rootScope.i++;
        alert(i);
        $rootScope.backColor = $rootScope.backColorArr[i];
      };
      //右侧滑动
      $rootScope.rightBack = function () {
        if ($rootScope.i == 0) {
          return;
        }
        $rootScope.i--;
        $rootScope.backColor = $rootScope.backColorArr[i];
      };

      //document.addEventListener("resume", resumetoapp, false);

      function resumetoapp() {
        //alert(avicitMobileApi.rtdata().security.accesstoken);
        var tmp = avicitMobileApi.modal().getLastModule();
        console.log(tmp.key.indexOf('lock-code'));
        var token = avicitMobileApi.rtdata().security.accesstoken;
        if (token != '' && token != undefined && tmp.key.indexOf('lock-code') == -1) {
          avicitMobileApi.createTemplete("modules/lock/lock-code.html", $rootScope)
        }
      };

      //$rootScope.init();

      avicitMobileApi.rtdata().init();
      Configs.platform = ionic.Platform.platform();
      PlatformConfigs.setDevelop(true);
      avicitMobileApi.preference().get("setting.opt.animation", function (data) {
        if (data) {
          PlatformConfigs.settingOpt[0].checked = data;
        }
      }, function (data) {
        console.log("no preference excutes");
      });
      avicitMobileApi.preference().get("setting.opt.http", function (data) {
        if (data) {
          PlatformConfigs.settingOpt[1].checked = data;
        }
      }, function (data) {
        console.log("no preference excutes");
      });
      avicitMobileApi.preference().get("platform.url", function (data) {
        if (data) {
          PlatformConfigs.setUrl(data);
        }
      }, function (data) {
        console.log("no preference excutes");
      });

      $rootScope.rows = Configs.rows;
      avicitMobileApi
        .createTemplete(
          "modules/login/login.html",
          $rootScope);
      // if(PlatformConfigs.develop){
      // 	// avicitMobileApi.createTemplete("modules/login/login.html", $rootScope);
      // 	//avicitMobileApi.createTemplete("modules/home/home.html", $rootScope);
      // 	//avicitMobileApi.createTemplete("modules/launch/launch.html", $rootScope);
      // 	//avicitMobileApi.createTemplete("modules/detail/detail.html", $rootScope);
      // 	//avicitMobileApi.createTemplete("modules/add/add.html", $rootScope);
      // 	//avicitMobileApi.createTemplete("modules/demo/demo-add.html", $rootScope);
      // }else{
      // 	avicitMobileApi.preference().get("isfirst", function(data){
      // 		console.log(data);
      // 		if(data == 1){
      // 			avicitMobileApi.createTemplete("modules/login/login.html", $rootScope);
      // 		}else{
      // 			avicitMobileApi.createTemplete("modules/launch/launch.html", $rootScope);
      // 		}
      // 	}, function(data){
      // 		console.log("no preference excutes");
      // 	});
      // }

    });
    $rootScope.refreshFinished = function () {
      $rootScope.$broadcast('scroll.refreshComplete');
    };
    $rootScope.infiniteFinished = function () {
      $rootScope.$broadcast('scroll.infiniteScrollComplete');
    };

  }]);
app.config(['$ionicConfigProvider', '$sceDelegateProvider','$httpProvider',
  function ($ionicConfigProvider, $sceDelegateProvider,$httpProvider) {
  $ionicConfigProvider.tabs.position("bottom");
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://localhost:8080/**',
    'http://10.216.77.219:8089/**',
    'http://10.216.77.195:8080/**',
    'http://219.141.240.105:8009/**',
    'http://weixin.avicit.com:8009/**',
    'http://117.38.14.60/**',
    'http://10.219.77.208:8080/**']);
  //拦截器
    $httpProvider.interceptors.push('interfactory');
}

]);

