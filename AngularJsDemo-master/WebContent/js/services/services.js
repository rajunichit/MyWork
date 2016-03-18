'use strict';

/* Services */

app.factory('APIServices', [
		'$http',
		'DRAFT_DYNASTY_URL',
		function($http, DRAFT_DYNASTY_URL) {

			var draftDynastyAPI = {};
			// ***********Login***********
			draftDynastyAPI.validateLogin = function(email, pass) {
				return $http.put(DRAFT_DYNASTY_URL.loginUrl, {
					email : email,
					password : pass
				});
			}; // validateLogin()

			// ***********Sign Up***********
			draftDynastyAPI.registerUser = function(firstName, lastName,
					profilePic, email, password, nickName) {
				return $http.post(DRAFT_DYNASTY_URL.registerUrl, {
					firstName : firstName,
					lastName : lastName,
					profilePic : profilePic,
					email : email,
					password : password,
					nickName : nickName

				});
			};// registerUser()

			// ***********Forgot Password***********
			draftDynastyAPI.forgotPassword = function(email) {
				return $http.post(DRAFT_DYNASTY_URL.forgotPassword, {
					email : email
				});
			};// forgotPassword()

			// ***********Sign Up***********
			draftDynastyAPI.updateProfile = function(firstName, lastName,
					profilePic, email, password, nickName) {
				return $http.put(DRAFT_DYNASTY_URL.registerUrl, {
					firstName : firstName,
					lastName : lastName,
					profilePic : profilePic,
					email : email,
					password : password,
					nickName : nickName

				});
			};// registerUser()
			
			return draftDynastyAPI;
		} ]);
