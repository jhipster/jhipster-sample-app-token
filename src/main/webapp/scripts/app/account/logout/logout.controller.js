'use strict';

angular.module('sampletokenApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
