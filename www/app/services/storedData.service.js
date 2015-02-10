(function() {
    'use strict';

    angular
        .module('birdApp')
        .factory('selectionData', selectionData);

    /* @ngInject */
    function selectionData() {
        var colors = [];
        var sizes = [];
        var behaviors = [];

        var service = {
         	getColors:getColors,
        	setColors:setColors
        };
        
        return service;

        ////////////////

        function getColors() {
        }

        function setColors(selectedColors){
        	console.log("here's the stored data:" + selectedColors);
        }
    }
})();