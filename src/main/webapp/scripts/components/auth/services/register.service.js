'use strict';

angular.module('sampleTokenApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


