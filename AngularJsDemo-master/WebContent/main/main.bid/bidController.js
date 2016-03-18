'use strict';

angular.module('loginDemo')
    .controller('bidController', ['$scope', function ($scope) {

        $scope.players =[ {name:"English", value:0},
                          {name:"Spanish", value:1},
                          {name:"German", value:3},
                          {name:"Russian", value:2},
                          {name:"Korean", value:1}
                         ];
        
    }]);