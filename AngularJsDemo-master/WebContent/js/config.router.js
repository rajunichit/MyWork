myApp
		.config(function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/home');

			$stateProvider

					// HOME STATES AND NESTED VIEWS
					// ========================================
					.state('home', {
						url : '/home',
						templateUrl : 'template/home.html'
					})
					// lOGIN
					// =================================
					.state(
							'login',
							{
								url : '/login',
								templateUrl : 'template/login.html',
								resolve : {
									deps : [
											'$ocLazyLoad',
											function($ocLazyLoad) {
												return $ocLazyLoad
														.load([ 'js/controller/loginController.js' ]);
											} ]
								}
							}).state('signup', {
						url : '/signup',
						templateUrl : 'template/signup.html'
					}).state('forgot-password', {
						url : '/forgot-password',
						templateUrl : 'template/forgot-password.html'
					})
					.state('edit-profile', {
						url : '/edit-profile',
						templateUrl : 'template/edit-profile.html'
					})

			;

		});