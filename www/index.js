
var fs = new CordovaPromiseFS({ persistent: typeof cordova !== 'undefined' });
//var SERVER = 'http://localhost:3000/';
var SERVER = 'http://219.141.240.105:8009/avicit-platform6-main-mgate/static/';
// var SERVER = 'http://114.116.122.201:8012/';

var loader = window.loader = new CordovaAppLoader({
  fs: fs,
  localRoot: 'app',
  serverRoot: SERVER,
  mode: 'mirror',
  cacheBuster: true
});

fs.fs.then(undefined,function(){
setStatus('ERROR: Only Chrome and Cordova-iOS/Android are supported!');
});
//window.plugins.appPreferences.fetch(function(data){
//	console.log(data)
//}, function(error){
//	console.log(error);
//}, '', 'manifest');
window.ok = function(ok){console.log('ok',ok);};
window.err = function(err){console.log('err',err);};
window.BOOTSTRAP_OK = true;
function setStatus(msg){
  console.log(msg);
	//console.log(loader.newManifest.root);
}
function onProgress(ev){
  console.log((ev.percentage * 100) + '%');
}

var cacheBuster = "?"+Math.random();
var needupdate = false;
loader.check(SERVER + "manifest.json" + cacheBuster).then(function(msg){
  console.log("msg="+msg);
  if(msg){
    loader.download(onProgress).then(setStatus,setStatus)
    .then(function(){
      return loader.update();
    },function(err){
      console.error('Auto-update error:',err);
    });
  }else{
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['starter']);
    });
  }
},function(){
	console.log("loader.check ERROR!!!");
  angular.element(document).ready(function() {
      angular.bootstrap(document, ['starter']);
  });
});
