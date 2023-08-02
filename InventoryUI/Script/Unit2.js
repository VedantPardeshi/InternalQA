  function ReadWholeFile()
  {
    var s = aqFile.ReadWholeTextFile("C:/Users/truptij/Documents/TestComplete 15 Projects/MedAvailAutomation/.env", aqFile.ctANSI);
    Log.Message("File entire contents:");
    const obj = JSON.parse(s);
//    Log.Message(obj.USERNAME);
//    Log.Message(obj.PASSWORD);
//    Log.Message(obj.API_KEY)
////    Log.Message(s);
  return obj
  }
module.exports.ReadWholeFile = ReadWholeFile;






//blueButton d-flex _2-AEQk-DYU5IFK3Ue4aA4d


function Test1()
{
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/MedDispense/");
  let browser = Aliases.browser;
  browser.InventoryWindow.Maximize();
  let passwordBox = browser.commonControls.formFormpinverification.passwordbox;
  passwordBox.SetText(Project.Variables.PIN);
  passwordBox.Keys("[Enter]");
  browser.medDispensePage.Wait();
  let page = browser.qaConsultAuthorizePage;
  page.viewPackageImagesButton.ClickButton();
  page.closeEditAndCompareWindow.Click();
  page.textnodePackage.textnodePickingComplete.Click();
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//span[text()='Picking complete']"), "contentText", cmpEqual, "Picking complete");
}

function Test2()
{
  let teamViewer = Aliases.TeamViewer;
  teamViewer.dlgSponsoredSession.btnOK.ClickButton();
  teamViewer.wndTeamViewer.Minimize();
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/MedDispense/identifyCustomer");
  let browser = Aliases.browser;
  browser.InventoryWindow.Maximize();
  let page = browser.commonControls;
  let textbox = page.textbox;
  textbox.Click();
  textbox.SetText("Volvo");
  textbox = page.textbox2;
  textbox.Click();
  textbox.Keys("![ReleaseLast]");
  textbox.SetText("alex");
  let dateInput = page.dateinput;
  dateInput.Click();
  dateInput.Keys("04072000");
  let page2 = browser.IdentifyCustomerPage;
  page2.searchPatientsButton.ClickButton();
  page.checkbox.ClickChecked(true);
  page2.identificationCompleteButton.ClickButton();
  page2 = browser.medDispensePage;
  page2.Wait();
  let page3 = browser.SpnRxPage;
  page3.requiredCheckbox.ClickChecked(true);
  page3.submitButton.ClickButton();
  page3.confirmButton.ClickButton();
  page2.Wait();
  let MSTaskListWClass = Aliases.explorer.wndShell_TrayWnd.ReBarWindow32.MSTaskSwWClass.MSTaskListWClass;
  MSTaskListWClass.Click(427, 27);
  let wndClientWindowSciter = teamViewer.wndClientWindowSciter;
  wndClientWindowSciter.Activate();
  let tv_remotedesktop_class = wndClientWindowSciter.FF7DB6A1FA0.TV_REMOTEDESKTOP_CLASS;
  tv_remotedesktop_class.Click(1090, 564);
  OCR.Recognize(tv_remotedesktop_class).BlockByText("Accept", spBottomMost).Click();
  MSTaskListWClass.Click(599, 30);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div[contains(@class, '_2buPbGMxsHrJeG4KbiWZAa')]"), "Visible", cmpEqual, true);
  page2 = browser.qaConsultAuthorizePage;
  page2.closeEditAndCompareWindow.Click();
  page2.packageAcceptButton.ClickButton();
  page2.checkbox.ClickChecked(true);
  wndClientWindowSciter.Activate();
  tv_remotedesktop_class.Click(879, 933);
  tv_remotedesktop_class.DblClick(879, 933);
  tv_remotedesktop_class.Click(1153, 999);
  MSTaskListWClass.Click(591, 39);
  page2.authorizeButton.ClickButton();
  let passwordBox = page.formFormpinverification.passwordbox;
  passwordBox.SetText(Project.Variables.PIN);
  passwordBox.Keys("[Enter]");
}