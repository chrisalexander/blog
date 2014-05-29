/**
 * Module for the search page
 */
var search = angular.module("ca-search", []);

search.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

/**
 * Controller for the search box
 */
search.controller("searchForm", function($scope, $location, $location, searchService) {

	$scope.search = searchService;

	$scope.query = $location.search().hasOwnProperty("query") ? $location.search()["query"] : "";

	$scope.executeSearch = function(event, query) {
		event ? event.preventDefault() : false;
		searchService.query(query);
	}

	if ($scope.query.length) {
		$scope.executeSearch(false, $scope.query);
	}

});

/**
 * Controller for the search results
 */
search.controller("searchResults", function($scope, $timeout, searchService) {

	$scope.search = searchService;

	$scope.searchDone = false;

	$scope.currentSearchTimeout = false;

	$scope.$on("loading", function(_, loading) {
		if (loading) {
			$scope.searchDone = false;
			if ($scope.currentSearchTimeout) {
				clearTimeout($scope.currentSearchTimeout);
			}
		} else {
			$scope.searchDone = true;
			if ($scope.currentSearchTimeout) {
				clearTimeout($scope.currentSearchTimeout);
			}
			$scope.currentSearchTimeout = $timeout(function() {
				$scope.searchDone = false;
			}, 1000);
		}
	});

	$scope.getSnippet = function(result) {
		if (!result.hasOwnProperty("content")) {
			return "";
		}
		var content = [].concat(result["content"]).join(" ");
		var targetLength = 175;
		if (content.length < targetLength) {
			return content;
		} else {
			return content.substr(0, targetLength) + "...";
		}
	}

	$scope.getImage = function(result) {
		if (!result.hasOwnProperty("images")) {
			return "";
		}
		var images = [].concat(result["images"]);
		if (!images.length) {
			return "";
		}
		return 'url(' + images[0] + ')';
	}

});

/**
 * Service for doing searches and managing the data
 */
search.factory("searchService", function($http, $rootScope) {

	// Which page we are currently looking at
	var page = 1;

	// How many items per page to run
	var itemsPerPage = 10;

	// What the input query is
	var query = "";

	// The computed max number of pages for this query
	var maxPage = 1;

	// What the current page of data is
	var data = [];

	// Whether or not we are loading
	var loading = false;

	var setLoadingState = function(state) {
		loading = state;
		$rootScope.$broadcast("loading", state);
	}

	var executeSearch = function(clearExistingResults) {
		if (!query.length || loading) {
			return;
		}

		setLoadingState(true);

		if (clearExistingResults) {
			data = [];
		}

		$http({
			"method": "GET",
			"url": "https://chrisalexanderdotcodotuk.east-us.azr.facetflow.io/blog/post/_search?q=" + encodeURIComponent(query) + "&df=title&df=content&from=" + ((page-1) * itemsPerPage) + "&size=" + itemsPerPage
		}).success(function(resultData, status, headers, config) {
			var tmpData = [];
			resultData.hits.hits.map(function(hit) {
				tmpData.push(hit._source);
			});
			data = tmpData;
			updateMaxPages(resultData.hits.total);
			loading = false;
			setLoadingState(false);
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}).error(function(resultData, status, headers, config) {
			data = [];
			setLoadingState(false);
		});
	}

	var updateMaxPages = function(totalResults) {
		maxPage = Math.ceil(totalResults / itemsPerPage);
	}

	var iface = {
		"go": {
			"next": function() {
				if (!iface.has.next()) {
					return;
				}
				page++;
				executeSearch();
			},
			"previous": function() {
				if (!iface.has.previous()) {
					return;
				}
				page--;
				executeSearch();
			}
		},
		"has": {
			"next": function() {
				return query && data.length && maxPage >= page + 1;
			},
			"previous": function() {
				return page > 1;
			}
		},
		"query": function(q) {
			query = q;
			page = 1;
			executeSearch(true);
		},
		"page": function() {
			return page;
		},
		"data": function() {
			return data;
		},
		"isLoading": function() {
			return loading;
		}
	}

	return iface;

});