(function() {
    'use strict';
    // https://github.com/johnpapa/angularjs-styleguide#data-services
    angular
        .module('birdApp')
        .factory('wikiApi', wikiApi);
    /* @ngInject */
    
    wikiApi.$inject = ['$http', '$q', '$ionicLoading', 'logger'];

    function wikiApi($http, $q, $ionicLoading, logger) {
       return {
            birdData: birdData
        };
        
        function birdData(callback) {
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