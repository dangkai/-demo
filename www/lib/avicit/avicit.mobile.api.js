angular.module('avicit.mobile.api', [])
  .factory('avicitMobileApi',
    ['modalService',
      'rtdataService',
      'handleService',
      'httpService',
      'preferencesService',
      'requestService',
      'sqlService',
      'storageService',
      'urlService',
      'ToastService',
			'JpushService',
      function (modalService,
                rtdataService,
                handleService,
                httpService,
                preferencesService,
                requestService,
                sqlService,
                storageService,
                urlService,
                ToastService,
								JpushService) {
        return {
          //turn to html, id is the html file's location ex:modules/home/home.html
          createTemplete: function (id, scope) {
            modalService.create(id, id, scope);
          },
          //close current html
          closeTemplete: function (id) {
            modalService.close(id);
          },
          //return modal service
          modal: function () {
            return modalService;
          },
          //return runtime data service, that save local cache
          rtdata: function () {
            return rtdataService;
          },
          //return handle service, that check http request parameters
          handle: function () {
            return handleService;
          },
          //return http service
          http: function () {
            return httpService;
          },
          //return preference service
          preference: function () {
            return preferencesService;
          },
          //send request service
          sendRequest: function (isCache, data, succCb, failCb) {
            if (isCache) {
              requestService.requestData(data, succCb, failCb);
            } else {
              requestService.requestDataNoCache(data, succCb, failCb);
            }
          },
          //return request service
          request: function () {
            return requestService;
          },
          toastService: function () {
            return ToastService;
          },
          //return sqlite service
          sql: function () {
            return sqlService;
          },
          //return storage service, localstorage and sessionstorage
          storage: function () {
            return storageService;
          },
          //return url service
          url: function () {
            return urlService;
          },
					  //return jpush service
					jpushService: function () {
					  return JpushService;
					}
        }

      }]);
