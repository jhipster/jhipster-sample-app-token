 'use strict';

angular.module('sampletokenApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sampletokenApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sampletokenApp-params')});
                }
                return response;
            },
        };
    });