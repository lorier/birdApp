(function() {
    'use strict';
    // https://github.com/johnpapa/angularjs-styleguide#data-services
    angular
        .module('birdApp')
        .factory('wikiApi', wikiApi);
    /* @ngInject */
    
    wikiApi.$inject = ['$http', '$q', '$ionicLoading'];
    
    //TODO Revise later with structure defined here:
    //https://github.com/johnpapa/angularjs-styleguide#resolving-promises-for-a-controller
    function wikiApi($http, $q, $ionicLoading) {
       return {
            getBirdData: getBirdData
        };
        function getBirdData(callback) {
            return $http.get('http://dev.ransomdesign.com/birdData/fakeData.json')
                .success(function(data){
                    callback(data);
            });
            // function getWikiComplete(response) {
            //     console.log('wikiComplete fired');
            //     return response.data.results;
            // }

            // function getWikiFailed(error) {
            //    console.log('wikiFailed fired');
            //     logger.error('XHR Failed for getAvengers.' + error.data);
            // }
        }
    }
})();