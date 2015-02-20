(function () {
    'use strict';

    /*
     * superhero directive
     */
    angular
        .module('app')
        .directive('superhero', superhero_directive);

    superhero_directive.$inject = ['$window'];

    function superhero_directive($window) {
        var directive = {
            restrict: 'EA',
            template: '<div>Here I am to save the day!</div>'
        };
        return directive;
    }

    /*
     * another directive example
     */
    angular
        .module('app')
        .directive('anotherDirective', another_directive);

    function another_directive() {
        var directive = {
            link: link,
            restrict: 'EA'
        }
        return directive;

        function link(scope, element, attrs) {
            element[0].innerText = scope.vm.greet + ' ' + attrs.name;
        }
    }

})();