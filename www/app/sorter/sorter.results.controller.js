(function() {
    'use strict';

    angular
        .module('birdApp')
        .controller('SorterResultsCtrl', SorterResultsCtrl);

    /* @ngInject */
    SorterResultsCtrl.$inject=['$state', 'selectionData', 'birdMatcher'];

    function SorterResultsCtrl($state, selectionData, birdMatcher) {
        /*jshint validthis: true */
        var vm = this;
        console.log("Here is the matched data: " + birdMatcher.getMatchedData());
        // console.log
        //Pseudocode
        //
        //on instantiation
            //pull 3 data sets from the storeData Service
            //call a "compare service" that 
            //  =filters out the list of birds that match the criteria
            //  =returns an object that contains a list of matches
            //display count of contents of the object
            //display contents of the returned object





        // vm.onSwipeLeft = onSwipeLeft;
        // activate();

        // function onSwipeLeft() {
        //     console.log('swiped left');
        //     $state.go('sorter.size');
        // }

    }
})();