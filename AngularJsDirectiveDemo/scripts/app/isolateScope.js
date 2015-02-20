(function() {
    'use strict';

    /*
     * enter directive
     */
    var app = angular.module('app');

    app.directive('localIsolateScope', localIsolateScope_directive);
    app.directive('modelIsolateScope', modelIsolateScope_directive);
    app.directive('funcIsolateScope', funcIsolateScope_directive);

    function localIsolateScope_directive() {
        return {
            restrict: 'AE',
            scope: {
                name: '@',
                city: '@'
            },
            template: 'My name is {{name}}, i lived in {{city}}.'
        };
    }

    function modelIsolateScope_directive() {
        return {
            restrict: 'AE',
            scope: {
                colors: '='
            },
            template: "<ul><li ng-repeat='c in colors'>{{c}}</li></ul>"
        };
    }

    function funcIsolateScope_directive() {
        return {
            restrict: 'AE',
            scope: {
                submit: '&',
                data: '='
            },
            template: "<input class='form-control' ng-model='data' /><br/>" +
                "<button ng-click='submit()' class='btn btn-primary'>Save</button>"
        };
    }
})();