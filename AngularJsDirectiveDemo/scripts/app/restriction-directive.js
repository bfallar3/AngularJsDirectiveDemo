(function() {
    'use strict';

    /*
     * attribute restricted
     */
    angular
        .module('app')
        .directive('myId', attributeDirective);
    
    function attributeDirective() {
        var directive = {
            link: link,
            restrict: 'A',
            templateUrl: 'templates/id.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    /*
     * element restricted
     */
    angular
        .module('app')
        .directive('myCompany', elementAttribute);

    function elementAttribute() {
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'templates/card.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();