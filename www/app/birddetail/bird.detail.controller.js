(function() {
    'use strict';

    angular
        .module('birdApp')
        .controller('BirdDetailCtrl', BirdDetailCtrl);

    /* @ngInject */
    BirdDetailCtrl.$inject = ['$state', '$stateParams', 'wikiApi'];

    function BirdDetailCtrl($state, $stateParams, wikiApi, lodash) {
        /*jshint validthis: true */
        var vm = this;
        vm.birdData = {};
        console.log($stateParams.id);

        var birdId = Number($stateParams.id);

		wikiApi.getBirdData(function(data){
			console.log("here's the data" + data);
			vm.birdData = _.find(data, { '_id': birdId });
			console.log(vm.birdExcerpt);
		});

        //TODO copied format from Pluralsight Demo. Need to revise later with this format:
        //https://github.com/johnpapa/angularjs-styleguide#resolving-promises-for-a-controller
        //  wikiApi.getBirdData(function(data){
        //     console.log(data);
        //         vm.birdData = data;
        //        console.log(vm.birdData);
        // });

     //    activate();
     //   	function activate() {
	    //     return wikiApi.getBirdData().then(function(data) {
	    //         vm.birdData = data;
	    //         return vm.birdData;
	    //     });
	    // }

       
    }
})();