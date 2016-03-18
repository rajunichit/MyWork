
'use strict';

angular.module('loginDemo')
    .controller('mainController', ['$scope','$state','$rootScope', function ($scope,$state,$rootScope) {


    	$scope.changeState=function(newUrl)
    	{
    		$state.go("newUrl");
    	};
							        
    }]);