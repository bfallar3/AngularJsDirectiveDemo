(function() {
    'use strict';

    /*
     * enter directive
     */
    var app = angular.module('app');

    app.directive('elementDirective', element_directive);
    app.directive('attrDirective', attr_directive);
    app.directive('classDirective', class_directive);
    app.directive('commentDirective', comment_directive);

    function element_directive() {
        return {
            restrict: 'E',
            template: '<div>This is an element restricted directive.</div>',
            link: function(scope, element, attrs) {
            }
        }
    }

    function attr_directive() {
        return {
            restrict: 'A',
            template: '<div>This is an attribute restricted directive.</div>',
            link: function (scope, element, attrs) {
            }
        }
    }

    function class_directive() {
        return {
            restrict: 'C',
            template: '<div>This is a class restricted directive.</div>',
            link: function (scope, element, attrs) {
            }
        }
    }

    function comment_directive() {
        return {
            restrict: 'M',
            link: function (scope, element, attrs) {
                alert('This is a comment directive');
            }
        }
    }
})();