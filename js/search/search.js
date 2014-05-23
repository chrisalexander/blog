/**
 * Module for the search page
 */
var search = angular.module("ca-search", []);

/**
 * Controller for the search box
 */
search.controller("searchForm", function($scope) {

	$scope.query = "";

	$scope.executeSearch = function(event, query) {
		event.preventDefault();
		
	}

});

/**
 * Controller for the search results
 */

/**
 * Directive for the page and initialisation
 */

/**
 * Service for doing searches and managing the data
 */
search.factory("searchService", function() {

	// Which page we are currently looking at
	var page = 1;

	// What the input query is
	var query = "";

	// What the current page of data is
	var data = [];

	// Whether or not we are loading
	var loading = true;

	var executeSearch = function() {
		loading = true;
	}

	return {
		"go": {
			"next": function() {

			},
			"previous": function() {
				if (page <= 1) {
					return;
				}
				page--;
				executeSearch();
			}
		},
		"has": {
			"next": function() {

			},
			"previous": function() {

			}
		},
		"query": function(query) {

		},
		"data": function() {
			return data;
		},
		"isLoading": function() {
			return loading;
		}
	}

});