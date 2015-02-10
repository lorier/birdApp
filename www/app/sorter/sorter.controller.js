(function() {
    'use strict';

    angular
        .module('birdApp')
        .controller('SorterCtrl', ['$state', SorterCtrl]);

    /* @ngInject */
    SorterCtrl.$inject=['$state'];

    function SorterCtrl($state) {
        /*jshint validthis: true */
        console.log('sorter controller called');
        var vm = this;
        vm.sorterState = 'color';

        vm.buttonClicked = buttonClicked;
        // vm.onSwipeLeft = onSwipeLeft;
        // activate();

        // function onSwipeLeft() {
        //     console.log('swiped left');
        //     $state.go('sorter.size');
        // }
        
        function buttonClicked(e){
            console.log('go to next view');
        }
        function activate() {
        }
    }
})();