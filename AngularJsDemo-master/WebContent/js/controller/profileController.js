myApp.controller("profileController", [
		'$scope',
		'$rootScope',
		'$http',
		'DRAFT_DYNASTY_URL',
		'APIServices',
		'$localStorage',
		'$state',
		function($scope, $rootScope, $http, DRAFT_DYNASTY_URL, APIServices,
				$localStorage,$state) {
			
			$scope.myImage = '';
			$scope.myCroppedImage = '';
			var handleFileSelect = function(evt) {
				var file = evt.currentTarget.files[0];
				var reader = new FileReader();
				reader.onload = function(evt) {
					$scope.$apply(function($scope) {
						$scope.myImage = evt.target.result;
						$scope.profilePic=$scope.myImage;

					});
				};
				reader.readAsDataURL(file);
			};
			angular.element(
					document.querySelector('#fileInput')).on(
					'change', handleFileSelect);
			if(!$localStorage.authToken)
				{
				alert('Not Authenticated')
				$state.go('home');
				}
			
			// This is for login user
			$scope.firstName=$localStorage.firstName;
			$scope.lastName=$localStorage.lastName;
			$scope.nickName=$localStorage.nickName;
			$scope.email=$localStorage.email;
			// $scope.profilePic=$localStorage.profilePic;
			$scope.profilePic="http://lorempixel.com/200/200/people/9/"
			$scope.password=$localStorage.password;
			$scope.confirmPassword=$localStorage.password;
			
			
			
			
            $scope.updateProfile=function(){
            	if($scope.password!=$scope.confirmPassword)
            		{
            		return 
            		}
            	
            	if($scope.myImage)
            		{
            		$scope.path = $scope.myImage.split(",")
					.pop();
            		}
            	else
            		$scope.path=$localStorage.profilePic;
            	alert($scope.path)
            	APIServices.updateProfile($scope.firstName,
    			$scope.lastName,
    			$scope.path,
    			$scope.email,
    			$scope.password,
    			$scope.nickName
    			).success(
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
            	
            };// updateProfile()

$scope.logout=function(){
				
				$localStorage.firstName ="";
				$localStorage.lastName = "";
				$localStorage.nickName = "";
				$localStorage.email = "";
				$localStorage.password = "";
				$localStorage.profilePic="";
				$localStorage.authToken="";
				$state.go('home');
			};// logout()
			
			$scope.resetData=function(){
				$scope.firstName=$localStorage.firstName;
				$scope.lastName=$localStorage.lastName;
				$scope.nickName=$localStorage.nickName;
				$scope.email=$localStorage.email;
				$scope.profilePic=$localStorage.profilePic;
				$scope.password=$localStorage.password;
				$scope.confirmPassword=$localStorage.password;
			};// resetData()
		} ]);// controller close
