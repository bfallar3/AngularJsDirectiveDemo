(function () {
    'use strict';

    /*
     * enter directive
     */
    var app = angular.module('app');

    app.directive('controllerDemo', controllerDemo_directive);

    function controllerDemo_directive() {
        var url = "http://www.filltext.com/?callback=JSON_CALLBACK&rows=10&fname={firstName}&lname={lastName}&city={city}";
        return {
            restrict: 'A',
            //scope: {
            //    city: '@'
            //},
            template: '<div><h4>List of People</h4>' +
                '<table class="table table-hover table-condensed table-bordered"><tr ng-repeat="p in people">' +
                '<td>{{p.fname}}</td>' +
                '<td>{{p.lname}}</td>' +
                '<td>{{p.city}}</td>' +
                '</tr></table>' +
                '</div>',
            controller: [
                '$scope', '$http', function($scope, $http) {
                    $scope.getPeople = function() {
                        $http.jsonp(url).success(function(data) {
                            var people = [];
                            angular.forEach(data, function(value) {
                                people.push(value);
                            });
                            $scope.people = people;
                        });
                    };
                }
            ],
            link: function(scope, element, attrs) {
                scope.getPeople();

                scope.$watch('people', function(newValue) {
                    if (newValue) {
                        angular.forEach(newValue, function(person) {
                            var p = person.fname + ' ' + person.lname + ' lives at ' + person.city;
                            console.log(p);
                        });
                    }
                });
            }
        };
    }
})();