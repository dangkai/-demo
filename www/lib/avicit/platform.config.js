var platformconfig = angular.module('platform.config', [
  'avicit.mobile.api',
  'avicit.mobile.plugin',
  'avicit.platform.mobile.services.modalService',
  'avicit.platform.mobile.services.handle',
  'avicit.platform.mobile.services.http',
  'avicit.platform.mobile.services.request',
  'avicit.platform.mobile.services.storage',
  'avicit.platform.mobile.services.url',
  'avicit.platform.mobile.services.sqlinit',
  'avicit.platform.mobile.services.preferences',
  'avicit.platform.mobile.runtime.data',
  'myToastModule',
  'platform.config.model',
  'avicit.platform.mobile.my.services.request',
	'avicit.platform.mobile.services.jpush',
  'myApp',

]);

platformconfig.factory('PlatformConfigs', ['$ionicModal', function ($ionicModal) {

  return {
    debug: true,//log will be show in console

    develop: true,//all plugin not be used

    timestamp: 30000,
    http: {
      'timeout': 30000,
    },

    //different result when click back button
    backAction: {
      'popup': 'home',
      'exit': 'modules/login/login.html',
      'exit1': 'modules/lock/lock-code.html',
      'exit2': 'modules/launch/launch.html'
    },

    //Animation effect optimization, Http request effect optimization
    settingOpt: [
      {type: "anim", text: "动画优化", checked: false},
      {type: "http", text: "http请求优化", checked: false}
    ],

    //http request server's url
    url: 'http://192.168.1.102:8080/ZHJKF/',

    setDevelop: function (develop_) {
      this.develop = develop_;
    },

    setHttp: function (http_) {
      this.http = http_;
    },

    setBackAction: function (backButton_) {
      this.backAction = backButton_;
    },

    setSettingOpt: function (settingOpt_) {
      this.settingOpt = settingOpt_;
    },

    setDebug: function (debug_) {
      this.debug = debug_;
    },

    setTimestamp: function (timestamp_) {
      this.timestamp = timestamp_;
    },

    setUrl: function (url_) {
      this.url = url_;
    }

  }

}]);


