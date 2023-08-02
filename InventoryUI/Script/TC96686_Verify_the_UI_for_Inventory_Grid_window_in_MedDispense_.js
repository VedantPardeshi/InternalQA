var NavigateAndSignInToMedDispense = require("NavigateAndSignInToMedDispense");
var VerifyInventoryPage =require("VerifyInventoryPage");
var EndTransactionOnIdentifyAndSpnRx = require("EndTransactionOnIdentifyAndSpnRx");
var LogoutMeddispense = require("LogoutMeddispense");
function TC_96686()
{
  //Navigate To meddispense
  NavigateAndSignInToMedDispense.navigateToMedDispense();
  NavigateAndSignInToMedDispense.signIn();
  NavigateAndSignInToMedDispense.submitPin();
  
  //open , verify and close inventory
  VerifyInventoryPage.OpenInventoryWindow();
  VerifyInventoryPage.VerifyInventoryUI();
  VerifyInventoryPage.closeInventory();
  
  //End transaction
  EndTransactionOnIdentifyAndSpnRx.EndTransaction();
  
  //Logout
  LogoutMeddispense.logout();
  
  
}