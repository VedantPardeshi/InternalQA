let browser = Aliases.browser;
let meddispensePage= browser.medDispensePage;
function logout()
{
  //click on username dropdown
  browser.commonControls.panelGayatriMedplatformBox.Click();
  //Click on Sign out menu
  meddispensePage.UsernameDropDownBox.SignOutMenu.Click();
  //Verify sign out message
  aqObject.CheckProperty(browser.meddispenseSignOutPage.signOutMessage, "contentText", cmpEqual, "Sign-Out Page\nYou have signed out.\nFor improved security, we recommend that you close all browser windows at the end of your online session.");
}
module.exports.logout = logout;