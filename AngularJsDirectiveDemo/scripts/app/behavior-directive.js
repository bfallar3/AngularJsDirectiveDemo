(function() {
    'use strict';

    /*
     * enter directive
     */
    angular
        .module('app')
        .directive('enter', enter_directive);
    
    function enter_directive() {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            element.bind('mouseenter', function () {
                var color = attrs.enter || 'green';
                element.css('color', color);
                scope.$apply(function () {
                    scope.vm.mousestate = "I'm inside the element!";
                });
                
            });
        }
    }

    /*
     * leave directive
     */
    angular
        .module('app')
        .directive('leave', leave_directive);

    function leave_directive() {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            element.bind('mouseleave', function () {
                var color = attrs.leave || 'red';
                element.css('color', color);
                scope.$apply(function () {
                    scope.vm.mousestate = "I'm outside the element!";
                });
            });
        }
    }

})();