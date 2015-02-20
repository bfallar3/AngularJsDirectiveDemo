(function() {
    'use strict';

    /*
     * enter directive
     */
    var app = angular.module('app');

    app.directive('templatedDirective', tmpl_directive);

    function tmpl_directive() {
        return {
            restrict: 'AE',
            templateUrl: 'templates/userTemplate.html',
            link: function(scope, element, attrs) {
            }
        }
    }
})();