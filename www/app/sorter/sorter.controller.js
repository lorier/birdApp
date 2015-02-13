(function() {
    'use strict';

    angular
        .module('birdApp')
        .controller('SorterCtrl', SorterCtrl);

    /* @ngInject */
    SorterCtrl.$inject=['$state'];

    function SorterCtrl($state) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'Bird Sorter';

    }
})();