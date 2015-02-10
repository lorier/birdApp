(function() {
    'use strict';

    angular
        .module('birdApp')
        .controller('SorterSizeCtrl', ['$state', SorterSizeCtrl]);

    /* @ngInject */
    SorterSizeCtrl.$inject=[''];

    function SorterSizeCtrl($state) {
        /*jshint validthis: true */
        console.log('sorter controller called');
        var vm = this;
        vm.title = 'SorterSizeCtrl';
        vm.goToBehavior = goToBehavior;
        activate();

        function goToBehavior() {
            console.log('sorter button clicked!');
            $state.go('home.sorterbehavior');

        }
        function activate() {
        }
    }
})();