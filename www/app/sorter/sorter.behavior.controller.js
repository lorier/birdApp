(function() {
    'use strict';

    angular
        .module('birdApp')
        .controller('SorterBehaviorCtrl', ['$state', SorterBehaviorCtrl]);

    /* @ngInject */
    SorterBehaviorCtrl.$inject=['$state'];

    function SorterBehaviorCtrl($state) {
        /*jshint validthis: true */
        console.log('sorter color controller called');
        var vm = this;
        vm.title = 'Sort by Behavior';
        vm.goToResults = goToResults;
        
        function goToResults(e){
            console.log('Button Clicked!');
            $state.go('home.sorterresults');
        }
        function activate() {
        }
    }
})();