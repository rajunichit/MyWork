
$stateProvider.state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "facts.html",
          controller: "loginController"
        }
      }
    });