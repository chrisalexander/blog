---
layout: base
heading: 'Chris Alexander - On Engineering - Search'
subheading: 'Search the On Engineering blog of Chris Alexander - talking about tech, engineering, robots, and everything involving electrons'
---

<div ng-app="ca-search">

	<h1>Search</h1>

	<form method="GET" action="/search" ng-submit="executeSearch($event, query)" class="searchform" ng-controller="searchForm">
		<input type="text" name="query" ng-model="query" placeholder="Enter a search term" autofocus>
		<input type="submit" value="Search">
	</form>

</div>

<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<script src="/js/search/search.js"></script>