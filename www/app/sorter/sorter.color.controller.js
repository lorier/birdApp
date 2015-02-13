(function() {
    'use strict';

    angular
        .module('birdApp')
        .controller('SorterColorCtrl', SorterColorCtrl);

    /* @ngInject */
    SorterColorCtrl.$inject=['$state', 'selectionData'];

    function SorterColorCtrl($state, selectionData) {
        /*jshint validthis: true */
        var vm = this;
        vm.goToSize = goToSize;
        vm.toggleSelection = toggleSelection;
        vm.selectedColors = selectionData.getColors();

        //TO DO place the expanded version of this in a service
        vm.colorOptions = ["Reds", "Yellows", "Greens", "Blues", "Black", "Gray", "White", "Other", "Not Sure"];

        //Toggle selection adapted from
        //http://www.programming-free.com/2014/05/angularjs-retrieve-multiple-checkbox-selected-options.html
        function toggleSelection(item) {
            var idx = vm.selectedColors.indexOf(item);
             // is currently selected
             if (idx > -1) {
               vm.selectedColors.splice(idx, 1);
             }
             // is newly selected
             else {
               vm.selectedColors.push(item);
             }
             console.log("Selected colors: " + vm.selectedColors);

             selectionData.setColors(vm.selectedColors);
           }
        //THE FUNCTION BELOW WORKS BUT WE DON'T NEED IT TILL LATER
        // wikiApi.birdData(function(data){
        //     vm.finalData = data;
        //     console.log(vm.finalData);
        // });
        
        //Temporary nav 
        function goToSize(e){
            $state.go('home.sortersize');
        }
        
    }
})();