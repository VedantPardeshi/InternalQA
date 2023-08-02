function SignIn()
{
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageSignIn;
  let form = page.formLoginform;
  let emailInput = form.emailinputUsernameinput;
  emailInput.SetText("gayatri@medplatform.box");
  Log.Message("Entered Email");
  let passwordBox = form.passwordboxPasswordinput;
  passwordBox.Click();
  passwordBox.SetText(Project.Variables.Password1);
  page.imageCompanylogo.Click();
  form.textnodeSubmitbutton.Click();
  page.Wait();
  aqObject.CheckProperty(Aliases.browser.pageMeddispense.FindElement("//h2[.='PIN Verification']"), "contentText", cmpEqual, "PIN Verification");
  
}


function SubmitPin()
{
  let browser = Aliases.browser;
  let page = browser.pageSignIn;
  page = browser.pageMeddispense;
  page.formFormpinverification.passwordbox.SetText(Project.Variables.Password2);
  page.submitbuttonSubmit.ClickButton();
  aqObject.CheckProperty(Aliases.browser.pageMeddispense.FindElement("//h1[.='Contact Center Agent']"), "contentText", cmpEqual, "Contact Center Agent");
}

module.exports.SignIn = SignIn;
module.exports.SubmitPin = SubmitPin;