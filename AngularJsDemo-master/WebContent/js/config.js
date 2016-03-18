var app = angular
		.module('myApp')
		.run(
				function($http) {

					$http.defaults.headers.common['Token'] = "3yUEbW_MsUCgrMJ1pRWF";
					$http.defaults.headers.common['Authorization'] = "Basic bG9jYWxtb3RpdmVzOmxvY2FsbW90aXZlcw==";
					$http.defaults.headers.common['Content-Type'] = "application/json";
					$http.defaults.headers.common.language = 'en-US';
				})
		.config(
				[
						'$httpProvider',
						function($httpProvider) {

							$httpProvider.defaults.headers.common['Authorization'] = "Basic bG9jYWxtb3RpdmVzOmxvY2FsbW90aXZlcw==";
						} ]); // close module

