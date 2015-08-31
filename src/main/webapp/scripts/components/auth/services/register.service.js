'use strict';

angular.module('sampletokenApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


