// url:upload to server's url; param:scope's variables in front need to be array
//<avicit-fileupload
//	url = 'http://10.216.77.219:8090/avicit-platform6-main/mobile/upload.do'
//	param = 'data'>
//</avicit-fileupload>
app.directive('modelDirective', function(){
	return {
    restrict: 'AE',
    replace: true,
    controller: ['$scope', 'modalService', 'PlatformConfigs',
      function ($scope, modalService, PlatformConfigs) {
        /**
         * @author
         * @description
         * 关闭
         * params [id]
         *  String id  //对应界面id 名称
         */
        $scope.goBack = function (id) {
          modalService.close(id);
        };
        /**
         * @author dk
         *  @description
         *   加载更多
         */
        $scope.loadMore = function () {

        };
        /**
         * @author dk
         *  @description
         *  刷新方法
         */
        $scope.Refresh = function () {

        };
        /**
         * @author
         * @description
         * 初始化方法
         */
        $scope, initLoad = function () {
        };
        /**
         * @author
         * @description
         * 进行进入详情方法
         * params {object,id,path};
         * object obj //列表对象
         * String id:对应详情界面标记
         * String path:对应详情界面路径
         */
        $scope.goDeatil = function (obj, id, path) {
          $scope.detail = obj;
          modalService.create(id, path, $scope);
        };
        $scope, initLoad();
      }],
    link: function (scope, ele, attr) {

    },
  }
 });
