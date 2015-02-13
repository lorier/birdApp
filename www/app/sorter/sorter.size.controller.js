(function() {
    'use strict';

    angular
        .module('birdApp')
        .controller('SorterSizeCtrl', SorterSizeCtrl);

    /* @ngInject */
    SorterSizeCtrl.$inject=['$state', 'selectionData'];

    function SorterSizeCtrl($state, selectionData) {
        /*jshint validthis: true */
        console.log('Stored selections: ' + selectionData.getSizes());
        var vm = this;
        //temporary data store
        vm.sizeOptions = ["Tiny", "Small to Medium", "Medium to Large", "Huge", "Not Sure"];
        vm.goToBehavior = goToBehavior;
        vm.selectedSizes = selectionData.getSizes();
        vm.toggleSelection = toggleSelection;
        
        //TODO 
        //test selections
        //  -can't include tiny and huge
        //  - what happens if they do?
        
        function toggleSelection(item) {
            var idx = vm.selectedSizes.indexOf(item);
             // is currently selected
             if (idx > -1) {
               vm.selectedSizes.splice(idx, 1);
             }
             // is newly selected
             else {
               vm.selectedSizes.push(item);
             }
             console.log("Selected sizes: " + vm.selectedSizes);

             selectionData.setSizes(vm.selectedSizes);
           }

        function goToBehavior() {
            $state.go('home.sorterbehavior');

        }
     
    }
})();