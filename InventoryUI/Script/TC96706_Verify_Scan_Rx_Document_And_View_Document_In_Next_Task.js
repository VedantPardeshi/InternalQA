var NavigateAndSignInToMedDispense = require("NavigateAndSignInToMedDispense");
var SearchAndIdentifyCustomerTask = require("SearchAndIdentifyCustomerTask");
var SelectPatientAndRxTask = require("SelectPatientAndRxTask"); 
var QaConsultAuthorizeTask = require("QaConsultAuthorizeTask"); 
let waitUtility = require("WaitUtilities")

function scanRxDocumentOnOneTask()
{
  let url = "https://qa1.medplatform.medavail.com/MedDispense/identifyCustomer"
  NavigateAndSignInToMedDispense.navigateToMedDispense();
  NavigateAndSignInToMedDispense.signIn();
  NavigateAndSignInToMedDispense.submitPin()
  SearchAndIdentifyCustomerTask.receiveSearchPatientTask()
  let page = Aliases.browser.commonControls;
  page.panelAddScan.Click();
  page.textnodePatientId.textnodeRxDocument.Click();
  page.submitbuttonOk.ClickButton();
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div[.='Rx Document']"), "contentText", cmpEqual, "Rx Document");
  aqObject.CheckProperty(page.panelLoading, "Visible", cmpEqual, true); 
  
  waitUtility.reloadPage(url)
  Aliases.browser.medDispensePage.panelRxDocument.Click()
  waitUtility.waitForElement(Aliases.browser.medDispensePage.imageEscrowIcon,50000)
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div[2]/div[2]/img[contains(@src, 'MedDispense')]"), "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//*[name()='svg'][.='Rescan']"), "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//*[name()='svg'][.='Rescan']"), "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("(//img)[3]"), "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("(//img)[3]"), "Visible", cmpEqual, true);
  
  
   page = Aliases.browser.commonControls;
  let image = page.imageGetencapsulateddatathumbnai;
  image.Click();
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//canvas[contains(@class, 'mh-100')]"), "Visible", cmpEqual, true);
  page.vgImg.Click();
  page.imageGetencapsulateddatathumbnai2.Click();
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//canvas[contains(@class, 'mh-100')]"), "Visible", cmpEqual, true);
//  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div[contains(@class, 'LPo-XIfzwXqHinYc_nDTz')]"), "Visible", cmpEqual, true);
  page.vgImg.Click();
  
  SearchAndIdentifyCustomerTask.searchPatient();
  SearchAndIdentifyCustomerTask.selectPatientCard()
  SearchAndIdentifyCustomerTask.completeIdentification()
  
  SelectPatientAndRxTask.receiveSelectPatientAndRxTask();
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div[.='Rx Document']"), "contentText", cmpEqual, "Rx Document");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div//img[contains(@src, 'GetEncapsulatedDataThumbnail')]"), "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div[2]/div/img[contains(@src, 'GetEncapsulatedDataThumbnail')]"), "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div[contains(@class, 'pt-2')]"), "Visible", cmpEqual, true);
  
  Delay(5000)
  SelectPatientAndRxTask.submitRx()
  SelectPatientAndRxTask.confirmRx()
  
  QaConsultAuthorizeTask.receiveQAConsultAuthorizeTask()
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div//img[contains(@src, 'GetEncapsulatedDataThumbnail')]"), "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div[2]/div/img[contains(@src, 'GetEncapsulatedDataThumbnail')]"), "Visible", cmpEqual, true);
  
  waitUtility.waitForElement(Aliases.browser.qaConsultAuthorizePage.viewPackageImagesButton,50000)
  
  
  QaConsultAuthorizeTask.ClickViewPackageImageButton()
  QaConsultAuthorizeTask.closeEditAndCompareWindow()
  QaConsultAuthorizeTask.AcceptPackage()
  QaConsultAuthorizeTask.selectRequiredCheckbox()
  QaConsultAuthorizeTask.clickAuthorizeButton()
  QaConsultAuthorizeTask.VerifyUiOfAuthorizePopup()
  QaConsultAuthorizeTask.AuthorizeDispense()
}



function Test1()
{
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/MedDispense/identifyCustomer");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//*[name()='svg'][.='Rescan']"), "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//*[name()='svg'][.='Rescan']"), "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("(//img)[3]"), "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("(//img)[3]"), "Visible", cmpEqual, true);
}


function Test2()
{
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/MedDispense/spnrx");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div[.='Rx Document']"), "contentText", cmpEqual, "Rx Document");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div//img[contains(@src, 'GetEncapsulatedDataThumbnail')]"), "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div[2]/div/img[contains(@src, 'GetEncapsulatedDataThumbnail')]"), "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div[contains(@class, 'pt-2')]"), "Visible", cmpEqual, true);
 
}




function Test3()
{
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/MedDispense/qaConsultAuthorize");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div//img[contains(@src, 'GetEncapsulatedDataThumbnail')]"), "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.FindElement("//div[2]/div/img[contains(@src, 'GetEncapsulatedDataThumbnail')]"), "Visible", cmpEqual, true);
  let browser = Aliases.browser;
  browser.medDispensePage.imageGetencapsulateddatathumbnai.Click();
  let page = browser.commonControls;
  page.vgImg.Click();
  let page2 = browser.qaConsultAuthorizePage;
  page2.authorizeButton.ClickButton();
  let passwordBox = page.formFormpinverification.passwordbox;
  passwordBox.Click();
  passwordBox.SetText(Project.Variables.PIN);
  page2.submitbuttonAuthorize.ClickButton();
}

function Test4()
{
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/MedDispense/identifyCustomer");
  let browser = Aliases.browser;
  browser.InventoryWindow.Maximize();
  let page = browser.commonControls;
  let dateInput = page.dateinput;
  dateInput.Click();
  dateInput.Keys("04072000");
  let submitButton = browser.IdentifyCustomerPage.searchPatientsButton;
  submitButton.ClickButton();
  page.submitbuttonOk.ClickButton();
  let textbox = page.textbox;
  textbox.Click();
  textbox.SetText("Volvo");
  textbox = page.textbox2;
  textbox.Click();
  textbox.SetText("alex");
  submitButton.ClickButton();
}