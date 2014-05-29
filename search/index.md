---
layout: base
heading: 'Chris Alexander - On Engineering - Search'
subheading: 'Search the On Engineering blog of Chris Alexander - talking about tech, engineering, robots, and everything involving electrons'
stylesheet: 'search'
---

{% raw %}

<div ng-app="ca-search" class="search">

	<h1>Search</h1>
	<p class="footer small"><a href="/" target="_self">Home</a></p>

	<form method="GET" action="/search" ng-submit="executeSearch($event, query)" class="searchform" ng-controller="searchForm">
		<input type="text" class="text" name="query" ng-model="query" placeholder="Enter a search term" autofocus ng-disabled="search.loading">
		<input type="submit" class="submit" value="Go" ng-disabled="search.loading">
	</form>

	<div ng-controller="searchResults">
		<div class="loading-container" ng-class="{ 'show': search.isLoading() || searchDone }">
			<p class="loading" ng-hide="searchDone">Loading...</p>
			<p class="done" ng-show="searchDone">Done!</p>
		</div>

		<div class="results" ng-show="search.data().length">
			<div class="result" ng-repeat="result in search.data()" ng-class="{ 'has-image': getImage(result) }">
				<div class="image" ng-show="getImage(result)" ng-style="{ 'background-image': getImage(result) }"></div>
				<h3><a ng-href="{{result._url}}" target="_self">{{result.title}}</a></h3>
				<p>{{getSnippet(result)}}</p>
				<p><a ng-href="{{result._url}}" target="_self">{{result._url}}</a></p>
			</div>
		</div>

		<p class="pagination" ng-show="search.data().length">
			<a href="#" class="previous" ng-show="search.has.previous()" ng-click="search.go.previous()">&laquo;</a>
			<span class="page_number ">Page {{ search.page() }}</span>
			<a href="#" class="next" ng-show="search.has.next()" ng-click="search.go.next()">&raquo;</a>
		</p>
	</div>

</div>

{% endraw %}

<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<script src="/js/search/search.js"></script>