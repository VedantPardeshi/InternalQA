
var MeddispenseloginPage = require("MeddispenseloginPage");
var SignInToMeddispense =require("SignInToMeddispense");
// @Tag1
function TC_2()
{
  MeddispenseloginPage.navigateToMedispense();
  SignInToMeddispense.SignIn();
  SignInToMeddispense.SubmitPin();
  
  
  
}