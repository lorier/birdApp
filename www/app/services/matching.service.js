(function() {
    'use strict';

    angular
        .module('birdApp')
        .factory('birdMatcher', birdMatcher);

 	birdMatcher.$inject=['wikiApi', 'selectionData'];

    function birdMatcher(wikiApi, selectionData) {
        var service = {
	          getMatchedData: getMatchedData
        };

        return service;

        ////////////////

        function getSelectedColors() {
        	selectionData.getColors();
        }

        function getAllBirds(){
        	return wikiApi.getBirdData();
        }

        function getMatchedData(){
        	var allBirds = getAllBirds();
        	var selectedColors = getSelectedColors;

   //      	var matchFred = _.matchesProperty('user', 'fred');
			// _.find(users, matchFred);

			console.log("Here are the selected Colors from the matching service: " + selectedColors());
			//pseudocode
			//
			//Overall strategy:
			//Trim the allBirds list by the attribute that will trim most of the results
			// - I think this may be by the SIZE attribute
			// Then filter the resulting collection by behavior then colors.
			//to find a size match:
			//	//get the first color from the selectedSize VALUE
				//for each OBJECT in the allBirds ARRAY,
				//if the VALUE of the KEY "sizes" === the selectedSize VALUE,
				//then add that OBJECT to matchedSizes ARRAY
				// 
			//to find a color match:
				//get the first color from the matchedSizes ARRAY
				//for each OBJECT in the allBirds ARRAY,
					//find the "color" KEY
					//for each item in the "color" ARRAY
					// if the item at index 0 === the first index of the selectedColors ARRAY
					// then add the "color" properties' object to the ARRAY
					// 
			// 
			// 
			// General thoughts: can I do real -time filtering on the controllers
			// with the built in Angular Filter directive?
			// -  articles I've read don't necessarily like the built in filter with angular
			// 
			// Possiblilites: http://devdocs.io/lodash/index#filter
        }
    }
})();