(function() {
    'use strict';

    angular
        .module('birdApp')
        .controller('AllBirdsCtrl', ['$state', AllBirdsCtrl]);

    /* @ngInject */
    AllBirdsCtrl.$inject=['$state'];

    function AllBirdsCtrl($state) {
        console.log("allbirds controller called");
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'AllBirdsCtrl';

        activate();

        function activate() {
        }
    }
})();