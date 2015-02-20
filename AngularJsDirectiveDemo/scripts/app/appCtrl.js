(function () {
    'use strict';

    angular
        .module('app')
        .controller('appCtrl', appCtrl);

    appCtrl.$inject = ['$scope'];

    function appCtrl($scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.name = 'Benjamin';
        vm.greet = 'Good day, ';
        vm.mousestate = '';

        vm.user = {
            firstName: 'Benjamin',
            lastName: 'Fallar III',
            city: 'Manila',
            company: 'Wizardsgroup, Inc.',
            email: 'b.p.fallar@accenture.com',
            role: 'Programmer'
        };

        vm.colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White'];
        vm.favoriteColor = 'Blue';

        vm.clickMe = function() {
            var color = vm.favoriteColor;
            alert('Your form has been submitted with your favorite colors ' + color);
        };

        activate();

        function activate() {
            var hours = new Date().getHours();
            checkGreeting(hours);
        }

        function checkGreeting(hours) {
            if (hours >= 1 && hours <= 11) {
                vm.greet = 'Good day, ';
            }
            else if (hours >= 12 && hours <= 17) {
                vm.greet = 'Good afternoon, ';
            }
            else {
                vm.greet = 'Good evening, ';
            }
        }
    }
})();
