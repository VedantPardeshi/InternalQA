let browser = Aliases.browser;
let signInPage= browser.meddispenseSignInPage;
let loginPage = signInPage.medDispenseLoginForm;
let waitUtility = require("WaitUtilities")

function navigateToMedDispense()
{
  //Navigate To meddispense page
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/MedDispense?provider=MedAvailFederation");
  //Wait to open login window
  browser.LoginWindow.WaitProperty("WndCaption", "Sign In - Google Chrome");
  browser.LoginWindow.Maximize();
  //Validate login window is open
  aqObject.CheckProperty(signInPage.medDispenseLogo, "Exists" , cmpEqual , true);
  Log.Message("Navigated to meddispense page");
}

function signIn(){
  //Enter UserName
  loginPage.usernameTextField.SetText(Project.Variables.LoginUsername);
  Log.Message("Username entered.");
  //Enter Password
  loginPage.passwordTextField.SetText(Project.Variables.LoginPassword);
  Log.Message("Password entered.");
  signInPage.medDispenseLogo.Click();
  //Click on Submit button
  loginPage.SignInButton.Click();
  Log.Message("Clicked On sign In button.");
  
  waitUtility.waitForElement(browser.medDispensePage.pinVerificationHeader,30000)                                                                                                                              //Wait until receives Pin verification popup
  //Verify pin verification popup appears                                                                                                                                        
  aqObject.CheckProperty(browser.medDispensePage.pinVerificationHeader , "contentText", cmpEqual, "PIN Verification");
  Log.Message("Pin Verification popup appeared");
}

function submitPin()
{
  //Enter PIN
  browser.medDispensePage.pinVerificationForm.pinBox.SetText(Project.Variables.PIN);
  Log.Message("PIN entered");
  //Click on submit button
  browser.medDispensePage.pinSubmitButton.Click();
  Log.Message("Clicked on Submit button.");
                                                                                                                                          //Wait until receives Contact Center Agent page appears
  aqObject.CheckProperty(browser.medDispensePage.contactCenterAgentHeader , "contentText", cmpEqual, "Contact Center Agent");
  Log.Message("User logged in successfully");
}
module.exports.navigateToMedDispense = navigateToMedDispense;
module.exports.signIn = signIn;
module.exports.submitPin = submitPin;