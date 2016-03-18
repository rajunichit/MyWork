//var serviceUrl = "http://52.10.100.99:3000/"; // localmotives
var serviceUrl = "http://192.168.10.119:8080/DraftDynasty/api/";// pooja local
// var serviceUrl = "/Inka/api/inkaAdminWebservice/"; // inka Local

myApp.constant('DRAFT_DYNASTY_URL', {
	loginUrl : serviceUrl + "user/logIn",
	forgotPassword : serviceUrl + "forgot-password",
	registerUrl : serviceUrl + "user"
});// DRAFT_DYNASTY_URL close Constant
