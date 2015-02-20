(function() {
    'use strict';

    /*
     * enter directive
     */
    var app = angular.module('app');

    app.directive('isolatedScopeTransclude', isolatedScopeTransclude_directive);

    function isolatedScopeTransclude_directive() {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                tasks: '=datasource'
            },
            controller: function ($scope) {
                $scope.addTask = function() {
                    if (!$scope.tasks) $scope.tasks = [];
                    $scope.tasks.push({ title: $scope.title });
                };
            },
            templateUrl: 'templates/transclude.html'
        };
    }
})();