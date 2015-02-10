(function() {
    'use strict';

    angular
        .module('birdApp')
        .controller('SorterResultsCtrl', ['$state', SorterResultsCtrl]);

    /* @ngInject */
    SorterResultsCtrl.$inject=['$state'];

    function SorterResultsCtrl($state) {
        /*jshint validthis: true */
        console.log('sorter color controller called');
        var vm = this;
        vm.title = 'SorterResultsCtrl';
        vm.goToSize = goToSize;
        // vm.onSwipeLeft = onSwipeLeft;
        // activate();

        // function onSwipeLeft() {
        //     console.log('swiped left');
        //     $state.go('sorter.size');
        // }
        
        function goToSize(e){
            console.log('Button Clicked!');
            // $state.go('home.sortersize');
        }
        function activate() {
        }
    }
})();