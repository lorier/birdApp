(function() {
    'use strict';

    angular
        .module('birdApp')
        .controller('SorterBehaviorCtrl', SorterBehaviorCtrl);

    /* @ngInject */
    SorterBehaviorCtrl.$inject=['$state', 'selectionData'];

    function SorterBehaviorCtrl($state, selectionData) {
        /*jshint validthis: true */
        console.log('sorter behavior controller called');
        var vm = this;
        //temporary data store
        vm.behaviorOptions = ["Perching", "Wading", "Clinging", "Soaring", "Walking", "Hovering"];
        vm.seeResults = seeResults;
        vm.selectedBehaviors = selectionData.getBehaviors();
        vm.toggleSelection = toggleSelection;
        
        //TODO 
        //test selections
        //  -can't include tiny and huge
        //  - what happens if they do?
        
        function toggleSelection(item) {
            var idx = vm.selectedBehaviors.indexOf(item);
             // is currently selected
             if (idx > -1) {
               vm.selectedBehaviors.splice(idx, 1);
             }
             // is newly selected
             else {
               vm.selectedBehaviors.push(item);
             }
             console.log(vm.selectedBehaviors);

             selectionData.setBehaviors(vm.selectedBehaviors);
           }

        function seeResults() {
            console.log('sorter button clicked!');
            $state.go('home.sorterresults');

        }
     
    }
})();