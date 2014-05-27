---
layout: base
heading: 'Chris Alexander - On Engineering - Search'
subheading: 'Search the On Engineering blog of Chris Alexander - talking about tech, engineering, robots, and everything involving electrons'
stylesheet: 'search'
---

{% raw %}

<div ng-app="ca-search">

	<h1>Search</h1>

	<form method="GET" action="/search" ng-submit="executeSearch($event, query)" class="searchform" ng-controller="searchForm">
		<input type="text" name="query" ng-model="query" placeholder="Enter a search term" autofocus>
		<input type="submit" value="Search">
	</form>

	<div class="loading-container" ng-controller="searchResults">
		<div class="loading" ng-show="search.isLoading()">Loading...</div>
		<div class="done" ng-show="searchDone">Done!</div>
	</div>

	<div class="results" ng-controller="searchResults">
		<div class="result" ng-repeat="result in search.data()">
			<h3>{{result.title}}</h3>
			<p>{{getSnippet(result)}}</p>
			<p><a ng-href="{{result._url">{{result._url}}</a></p>
		</div>

		<div class="page">
			<a href="#" class="previous" ng-show="search.has.previous()" ng-click="search.go.previous()">&laquo;</a>
			<span class="page_number ">Page {{ search.page() }}</span>
			<a href="#" class="next" ng-show="search.has.next()" ng-click="search.go.next()">&raquo;</a>
		</div>
	</div>

</div>

{% endraw %}

<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<script src="/js/search/search.js"></script>