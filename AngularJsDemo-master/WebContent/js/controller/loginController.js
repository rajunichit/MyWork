myApp.controller("loginController", [
		'$scope',
		'$rootScope',
		'$http',
		'DRAFT_DYNASTY_URL',
		'APIServices',
		'$localStorage',
		'$state',
		function($scope, $rootScope, $http, DRAFT_DYNASTY_URL, APIServices,
				$localStorage,$state) {
			// This is for login user
			$localStorage.myName = "Govind Narute";
			$localStorage.firstName = "Govind";
			$localStorage.lastName = "Narute";
			$localStorage.nickName = "dada";
			$localStorage.email = "govindnarute@gmail.com";

			$scope.signIn = function() {
				APIServices.validateLogin($scope.email, $scope.password)
						.success(function(data, status) {
							console.log("*********Response Login***********");
							console.log(data);
							console.log(status);
							$localStorage.firstName =data.object.firstName;
							$localStorage.lastName = data.object.lastName;
							$localStorage.nickName = data.object.nickName;
							$localStorage.email = data.object.email;
							$localStorage.password = data.object.password;
							$localStorage.profilePic=data.object.profilePic;
							$localStorage.authToken=data.object.authToken;
							$state.go('edit-profile');
							
							alert('success');
						}).error(function(data, status) {

							console.log("*********Response Login***********");
							console.log(data);
							console.log(status);
							alert('faild');
							// console(status);
							// alert("Failed");
						});
			};// sign in close

			$scope.forgotPassword = function() {
				if (!$scope.email)
					return

				

				alert('test');
				APIServices.forgotPassword($scope.email).success(
						function(data, status) {
							console.log("*********Response***********");
							console.log(data);
							console.log(status);
							alert('success');
						}).error(function(data, status) {

					console.log("*********Response***********");
					console.log(data);
					console.log(status);
					alert('faild');
				});
			};// forgot close

			$scope.logout=function(){
				
				$localStorage.firstName ="";
				$localStorage.lastName = "";
				$localStorage.nickName = "";
				$localStorage.email = "";
				$localStorage.password = "";
				$localStorage.profilePic="";
				$localStorage.authToken="";
				$state.go('home');
			};//logout()
			
		} ]);// controller close
