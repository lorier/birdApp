(function() {
    'use strict';

    angular
        .module('birdApp')
        .controller('AllBirdsCtrl', AllBirdsCtrl);

    /* @ngInject */
    AllBirdsCtrl.$inject=['$state', 'wikiApi'];

    function AllBirdsCtrl($state, wikiApi) {
        console.log("allbirds controller called");
        /*jshint validthis: true */
        var vm = this;
        vm.birdData = {};
        vm.loadBirdDetail = loadBirdDetail;

        console.log(vm.birdData);

        //copied format from Pluralsight Demo. Need to revise later
         wikiApi.getBirdData(function(data){
            console.log(data);
                vm.birdData = data;
               console.log(vm.birdData);
        });

        function loadBirdDetail(birdName){
            console.log('bird detail load');
        }

    }
})();