let browser = Aliases.browser;
let signInPage= browser.meddispenseSignInPage;
let loginPage = signInPage.medDispenseLoginForm;
let medOpsDashboardPage = browser.pageMedopsDashboard
let util = require("Unit2")
const env = util.ReadWholeFile()


//function Test1()
//{
//  Browsers.Item(btChrome).Run("https://qa1-adfs.medplatform.medavail.com/adfs/ls/?wtrealm=https%3A%2F%2Fqa1.medplatform.medavail.com%2FMedOps&wctx=WsFedOwinState%3DXGOQ_xBlYQSKL4r4AT4jmAnZR4oGJPKArBQRWgJjuEt7NFG1nAHzuyULUmBCfCUWtLZ2m54xTHPkqShrgUlYapHfnV0tT71SUADocyj2SzaHXcP9SwSA3SJGoPFVQtEK9DArPfAlD7O0ug95zLOMOqFMFmO3h67uIv6n9qX3z1M6ONbV&wa=wsignin1.0&wreply=https%3A%2F%2Fqa1.medplatform.medavail.com%2FMedOps%2FHome%2FLoginMedAvail");
//  let browser = Aliases.browser;
//  browser.BrowserWindow.Maximize();
//  let page = browser.meddispenseSignInPage;
//  page.Wait();
//  aqObject.CheckProperty(Aliases.browser.meddispenseSignInPage.medOpsLogo, "Exists", cmpEqual, true);
//  aqObject.CheckProperty(Aliases.browser.meddispenseSignInPage.FindElement("//input[@id=(//label[.='User Account']/@for)]"), "Visible", cmpEqual, true);
//  aqObject.CheckProperty(Aliases.browser.meddispenseSignInPage.FindElement("//input[@id=(//label[.='Password']/@for)]"), "Text", cmpEqual, "");
//  aqObject.CheckProperty(Aliases.browser.meddispenseSignInPage.FindElement("//input[@id=(//label[.='Password']/@for)]"), "VisibleOnScreen", cmpEqual, true);
//  aqObject.CheckProperty(Aliases.browser.meddispenseSignInPage.FindElement("#submitButton"), "Enabled", cmpEqual, true);
//  aqObject.CheckProperty(Aliases.browser.meddispenseSignInPage.FindElement("#submitButton"), "contentText", cmpEqual, "Sign in");
//  let emailInput = page.medDispenseLoginForm;
//  let emailInput2 = emailInput.usernameTextField;
//  emailInput2.Click();
//  emailInput2.SetText("truptijadhav@medplatform.box");
//  let passwordBox = emailInput.passwordTextField;
//  passwordBox.Click();
//  passwordBox.SetText(Project.Variables.Password1);
//  emailInput.SignInButton.Click();
//  aqObject.CheckProperty(Aliases.browser.pageMedopsDashboard.FindElement("#menu-dashboard"), "VisibleOnScreen", cmpEqual, true);
//  aqObject.CheckProperty(Aliases.browser.pageMedopsDashboard.FindElement("#menu-dashboard"), "contentText", cmpEqual, "Dashboard");
//  aqObject.CheckProperty(Aliases.browser.pageMedopsDashboard.FindElement("#menu-dashboard"), "href", cmpEqual, "https://qa1.medplatform.medavail.com/MedOps/Dashboard/Index");
//}

function navigateToMedOps()
{
  
  //Navigate To meddispense page
//  Browsers.Item(btChrome).Navigate("https://qa1-adfs.medplatform.medavail.com/adfs/ls/?wtrealm=https%3A%2F%2Fqa1.medplatform.medavail.com%2FMedOps&wctx=WsFedOwinState%3DXGOQ_xBlYQSKL4r4AT4jmAnZR4oGJPKArBQRWgJjuEt7NFG1nAHzuyULUmBCfCUWtLZ2m54xTHPkqShrgUlYapHfnV0tT71SUADocyj2SzaHXcP9SwSA3SJGoPFVQtEK9DArPfAlD7O0ug95zLOMOqFMFmO3h67uIv6n9qX3z1M6ONbV&wa=wsignin1.0&wreply=https%3A%2F%2Fqa1.medplatform.medavail.com%2FMedOps%2FHome%2FLoginMedAvail");
  
  Browsers.Item(btChrome).Navigate(env.URL);
  
  //Wait to open login window
  browser.LoginWindow.WaitProperty("WndCaption", "Sign In - Google Chrome");
  browser.LoginWindow.Maximize();
  //Validate login window is open
  aqObject.CheckProperty(signInPage.medOpsLogo, "Exists" , cmpEqual , true);
  Log.Message("Navigated to meddispense page");
}

function signInToMedOps(){
  //Enter UserName
//  loginPage.usernameTextField.SetText(Project.Variables.LoginUsername);
loginPage.usernameTextField.SetText(env.USERNAME); 
  Log.Message("Username entered.");
  
  //Enter Password
  loginPage.passwordTextField.SetText(Project.Variables.LoginPassword);
  Log.Message("Password entered.");
  signInPage.medDispenseLogo.Click();
  
  //Verify Submit button
  aqObject.CheckProperty(loginPage.SignInButton, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(loginPage.SignInButton, "contentText", cmpEqual, "Sign in");
  
  //Click on Submit button
  loginPage.SignInButton.Click();
  Log.Message("Clicked On sign In button.");
                                                                                                                                        //Wait until receives Pin verification popup
  //Verify MedOps Dashboard appears                                                                                                                                        
  aqObject.CheckProperty(medOpsDashboardPage.linkMenuDashboard, "VisibleOnScreen", cmpEqual, true);
  aqObject.CheckProperty(medOpsDashboardPage.linkMenuDashboard, "contentText", cmpEqual, "Dashboard");
  aqObject.CheckProperty(medOpsDashboardPage.linkMenuDashboard, "href", cmpEqual, "https://qa1.medplatform.medavail.com/MedOps/Dashboard/Index");
}


module.exports.navigateToMedOps = navigateToMedOps;
module.exports.signInToMedOps = signInToMedOps;