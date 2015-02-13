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
        	setColors:setColors,
        	getSizes:getSizes,
        	setSizes:setSizes,
        	getBehaviors:getBehaviors,
        	setBehaviors:setBehaviors
        };
        
        return service;

        ////////////////

        function getColors() {
        	return colors;
        }
        function setColors(selectedColors){
        	colors = selectedColors;
        	console.log("here are the stored colors: " + colors);
            return colors;
        }

        function getSizes() {
        	return sizes;
        }
        function setSizes(selectedSizes){
        	sizes = selectedSizes;
        	console.log("here are the stored sizes: " + sizes);
            return sizes;
        }


        function getBehaviors() {
        	return behaviors;
        }
        function setBehaviors(selectedBehaviors){
        	behaviors = selectedBehaviors;
        	console.log("here are the stored behaviors: " + behaviors);
            return behaviors;
        }
    }
})();