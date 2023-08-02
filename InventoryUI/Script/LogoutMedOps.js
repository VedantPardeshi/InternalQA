let browser = Aliases.browser;
let page = browser.pageOrganizationunit;


function logOut()
{
  //click on username dropdown
  page.panelTruptijadhavMedplatformBox.Click();
  
  //Click on Sign out menu
  page.textnodeSignOut.formLogoutform.panelSignOut.Click();
  
  // Verify Signout Page appears
  aqObject.CheckProperty(Aliases.browser.pageMedopsSignOut.panelSignOutPage, "contentText", cmpEqual, "Sign-Out Page\nYou have signed out.\nFor improved security, we recommend that you close all browser windows at the end of your online session.");
}

module.exports.logOut = logOut;