let browser = Aliases.browser;
let qaConsultPage = browser.qaConsultAuthorizePage;
let commonControl = browser.commonControls;
let waitUtility = require("WaitUtilities")

function receiveQAConsultAuthorizeTask()
{
     //Wait until receives QA/Consult/Authorize task appears                                                                                                                                  
    waitUtility.waitForPageToLoad("https://qa1.medplatform.medavail.com/MedDispense/qaConsultAuthorize")
}

//function to verify transaction table before accepting agreement and after adding signature
function verifyTransactionTableBeforeAcceptAndAfterSignature()
{
  //verify transaction progress table before accepting 
  //aqObject.CheckProperty(qaConsultPage.transactionProgressSection, "contentText", cmpEqual, "Transaction Progress\nPackage:\nPicking complete\nPayment:\n$0.00 | Done\nSignature(s):\nRequired\nCounseling\n:\n"+Project.Variables.CounsellingStatus);
  Delay(15000);
   //verify transaction progress table after signature
  aqObject.CheckProperty(qaConsultPage.transactionProgressSection, "contentText", cmpEqual, "Transaction Progress\nPackage:\nPicking complete\nPayment:\n$0.00 | Done\nSignature(s):\nComplete\nCounseling\n:\n"+Project.Variables.CounsellingStatus);
}

//function to verify QA buttons
function verifyQaButtons()
{
  //Authorize button
  aqObject.CheckProperty(qaConsultPage.authorizeButton , "Exists" , cmpEqual , true);
  aqObject.CheckProperty(qaConsultPage.authorizeButton , "contentText" , cmpEqual , "Authorize");
  //Verify button is disabled 
  aqObject.CheckProperty(qaConsultPage.authorizeButton , "className" , cmpContains , "greyButton");
  
  //Discard and Restart button
  aqObject.CheckProperty(meddispensePage.discardAndRestartButton , "Exists" , cmpEqual , true);
  aqObject.CheckProperty(meddispensePage.discardAndRestartButton , "contentText" , cmpEqual , "Discard and Restart");
  //Verify button is disabled 
  aqObject.CheckProperty(meddispensePage.discardAndRestartButton , "className" , cmpContains , "greyButton");
  
  //Discard and End Transaction button
  aqObject.CheckProperty(meddispensePage.discardAndEndTransactionButton , "Exists" , cmpEqual , true);
  aqObject.CheckProperty(meddispensePage.discardAndEndTransactionButton , "contentText" , cmpEqual , "Discard and End Transaction");
  //Verify button is disabled 
  aqObject.CheckProperty(meddispensePage.discardAndEndTransactionButton , "className" , cmpContains , "greyButton");

}

//Function to verify UI of QA Consult Authorize task
function verifyUiOfQaConsultAuthorizeTask()
{  
//  //verify elements from ribbon
//  //Verfiy search and ifdentify task tab
//  aqObject.CheckProperty(meddispensePage.searchAndIdentifyCustomerTab , "Exists" , cmpEqual , true);
//  aqObject.CheckProperty(meddispensePage.searchAndIdentifyCustomerTab , "outerText" , cmpEqual , "SEARCH AND IDENTIFY CUSTOMER");
//  //Verfiy select patient and rx tab
//  aqObject.CheckProperty(meddispensePage.selectPatientsAndRxsTab , "Exists" , cmpEqual , true);
//  aqObject.CheckProperty(meddispensePage.selectPatientsAndRxsTab  , "outerText" , cmpEqual , "SELECT PATIENTS AND RXS");
//  //Verfiy QA consult and authorize tab
//  aqObject.CheckProperty(meddispensePage.qaConsultAuthorizeTab , "Exists" , cmpEqual , true);
//  aqObject.CheckProperty(meddispensePage.qaConsultAuthorizeTab  , "outerText" , cmpEqual , "QA/ CONSULT/ AUTHORIZE");
//  
  
//  
//    

//  
  
//  
  //Verify Complete these steps section displayed.
  aqObject.CheckProperty(qaConsultPage.completeTheseStepsSection.tastInstructions , "contentText" , cmpEqual , "Validate correct medication(s) selected\nValidate correct label(s) applied\nValidate lot and expiration date\nPrint or download any signed documents for your records");
  //Verify "I have printed a copy of the Pickup Acknowledgement." message
  aqObject.CheckProperty(qaConsultPage.completeTheseStepsSection.RequiredCheckboxText , "contentText" , cmpEqual , "I have printed a copy of the Pickup Acknowledgement.");
  //Verify required checkbox exists
  aqObject.CheckProperty(qaConsultPage.completeTheseStepsSection.requiredCheckbox , "Exists" , cmpEqual , true);
  
  

  //Verify saftey card
  //Verify name
  aqObject.CheckProperty(qaConsultPage.patientSafteyCard.patientName , "contentText" , cmpEqual , Project.Variables.PatientLastName+", "+Project.Variables.PatientFirstName);
  //Verify DOB
  aqObject.CheckProperty(qaConsultPage.patientSafteyCard.dateOfBirth , "contentText" , cmpEqual , Project.Variables.DateOfBirth);
  //Verify age                                                                                                                                                                      //add age code
  //verify patient phone number
  aqObject.CheckProperty(qaConsultPage.patientSafteyCard.patientPhoneNumber , "contentText" , cmpEqual , Project.Variables.patientPhoneNumber);
  //verify rx number
  aqObject.CheckProperty(qaConsultPage.patientSafteyCard.rxNumber , "contentText", cmpEqual, "Rx #\n"+Project.Variables.RxNumber);
  //verify fill type
  aqObject.CheckProperty(qaConsultPage.patientSafteyCard.fillType , "contentText" , cmpEqual , Project.Variables.FillType);
  //verify counselling status
  aqObject.CheckProperty(qaConsultPage.patientSafteyCard.counsellingStatus , "contentText" , cmpEqual , Project.Variables.CounsellingStatus);
  //verify rx name and rx number
  aqObject.CheckProperty(qaConsultPage.patientSafteyCard.rxNumberAndRxName , "contentText" , cmpEqual , Project.Variables.RxNumberAndRxName);
  //verify drug instructions
  aqObject.CheckProperty(qaConsultPage.patientSafteyCard.drugsDirection , "contentText" , cmpEqual , Project.Variables.DrugInstructions);
  //verify package review
  aqObject.CheckProperty(qaConsultPage.patientSafteyCard.packageReviewBar , "contentText" , cmpEqual , "Package Review");
  //verify view package image button
  aqObject.CheckProperty(qaConsultPage.viewPackageImagesButton , "innerText" , cmpEqual , "View Package Images");
  
  //verify thumbs up and verify thumbs down button
  //thumbs up button
  aqObject.CheckProperty(qaConsultPage.packageAcceptButton , "Exists" , cmpEqual , true);
  aqObject.CheckProperty(qaConsultPage.packageAcceptButton , "title" , cmpEqual , "Accept");
  //thumbs down button
  aqObject.CheckProperty(qaConsultPage.packageRejectButton , "Exists" , cmpEqual , true);
  aqObject.CheckProperty(qaConsultPage.packageRejectButton , "title" , cmpEqual , "Reject");
  
  //Verify 'Name:', 'Package:', 'Product:' and 'Quantity:' details 
  aqObject.CheckProperty(qaConsultPage.packageDetails , "contentText" , cmpContains , Project.Variables.productName);
  aqObject.CheckProperty(qaConsultPage.packageDetails , "contentText" , cmpContains , Project.Variables.productCode);
  aqObject.CheckProperty(qaConsultPage.packageDetails , "contentText" , cmpContains , Project.Variables.packageCode);
  aqObject.CheckProperty(qaConsultPage.packageDetails , "contentText" , cmpContains , Project.Variables.packageQuantity);
}

//function to verify click and view package image
function ClickViewPackageImageButton()
{
  //Click on view package image button
  qaConsultPage.viewPackageImagesButton.Click();
  //Verify edit and compare image window is open
  aqObject.CheckProperty(qaConsultPage.editCompareImagesHeader , "contentText" , cmpEqual ,"Edit & Compare Images");
  Log.Message("Edit and compare image window is open");
}

//function to verify Ui of  edit and compare window
function VerifyUiOfEditAndCompareWindow()
{
  //verify pre label section exists
  aqObject.CheckProperty(qaConsultPage.preLabelSection , "Exists" , cmpEqual , true);

  //verify post label section exists
  aqObject.CheckProperty(qaConsultPage.postLabelSection , "Exists" , cmpEqual , true);
  
  //verify select category to compare label
  aqObject.CheckProperty(qaConsultPage.selectCategoryToCompareLabel , "contentText" , cmpEqual , "Select Category to Compare");
  aqObject.CheckProperty(qaConsultPage.selectCategoryToCompareDropdown , "Exists" , cmpEqual , true);
  
  //Verify close icon
  aqObject.CheckProperty(qaConsultPage.closeEditAndCompareWindow , "Exists" , cmpEqual , true)
  
  //Verify help link
  aqObject.CheckProperty(qaConsultPage.helpLink, "contentText" , cmpEqual , "Help");
  
  //Verify pre label header
  aqObject.CheckProperty(qaConsultPage.preLabelHeader, "contentText" , cmpEqual , "Pre-Label");
  
  //Verify pre label header
  aqObject.CheckProperty(qaConsultPage.postLabelHeader, "contentText" , cmpEqual , "Post-Label");
  
  //verify following buttons for pre label section
  //Zoom button
  aqObject.CheckProperty(qaConsultPage.preLabelSection.zoomButton , "contentText" , cmpEqual , "Zoom")
  //Magnify button
  aqObject.CheckProperty(qaConsultPage.preLabelSection.MagnifyButton , "contentText" , cmpEqual , "Magnify")
  //Crop button
  aqObject.CheckProperty(qaConsultPage.preLabelSection.cropButton , "contentText" , cmpEqual , "Crop")
  //Rotate Left button
  aqObject.CheckProperty(qaConsultPage.preLabelSection.rotateLeftButton , "contentText" , cmpEqual , "Rotate Left")
  //Rotate Right button
  aqObject.CheckProperty(qaConsultPage.preLabelSection.rotateRightButton , "contentText" , cmpEqual , "Rotate Right")  
  //Brightness/Contrast
  aqObject.CheckProperty(qaConsultPage.preLabelSection.brightnessContrastButton , "contentText" , cmpEqual , "Brightness / Contrast")
  //Hue/Saturation Button
  aqObject.CheckProperty(qaConsultPage.preLabelSection.hueSaturationButton , "contentText" , cmpEqual , "Hue / Saturation")
  
  //verify following buttons for post label section
  //Zoom button
  aqObject.CheckProperty(qaConsultPage.postLabelSection.zoomButton , "contentText" , cmpEqual , "Zoom")
  //Magnify button
  aqObject.CheckProperty(qaConsultPage.postLabelSection.MagnifyButton , "contentText" , cmpEqual , "Magnify")
  //Crop button
  aqObject.CheckProperty(qaConsultPage.postLabelSection.cropButton , "contentText" , cmpEqual , "Crop")
  //Rotate Left button
  aqObject.CheckProperty(qaConsultPage.postLabelSection.rotateLeftButton , "contentText" , cmpEqual , "Rotate Left")
  //Rotate Right button
  aqObject.CheckProperty(qaConsultPage.postLabelSection.rotateRightButton , "contentText" , cmpEqual , "Rotate Right")  
  //Brightness/Contrast
  aqObject.CheckProperty(qaConsultPage.postLabelSection.brightnessContrastButton , "contentText" , cmpEqual , "Brightness / Contrast")
  //Hue/Saturation Button
  aqObject.CheckProperty(qaConsultPage.postLabelSection.hueSaturationButton , "contentText" , cmpEqual , "Hue / Saturation");
}

//function to close edit and compare window
function closeEditAndCompareWindow()
{
  qaConsultPage.closeEditAndCompareWindow.Click();
}

//function to accept package
function AcceptPackage()
{
  //Click on accept button
  qaConsultPage.packageAcceptButton.Click();
  //Verify robotic package accept message
  aqObject.CheckProperty(qaConsultPage.roboticPackagingAcceptedMessage , "contentText" , cmpEqual , "Robotic Packaging Accepted by User");
  //Verify Authorize button is enabled 
  aqObject.CheckProperty(qaConsultPage.authorizeButton , "className" , cmpContains , "greyButton");
  //Verify /Discard and Restart button is enabled 
//  aqObject.CheckProperty(meddispensePage.discardAndRestartButton , "className" , cmpContains , "greyButton");
  //Verify Discard and End Transaction button is enabled 
//  aqObject.CheckProperty(meddispensePage.discardAndEndTransactionButton , "className" , cmpContains , "greyButton");
}


function clickAuthorizeButton()
{
  //Click on Authorize button
  qaConsultPage.authorizeButton.Click();
  //Verify authorize popup appears
  aqObject.CheckProperty(qaConsultPage.authorizePopup , "Exists" , cmpEqual , true);
}
function VerifyUiOfAuthorizePopup()
{
  //Verify authorize username field appears
  aqObject.CheckProperty(qaConsultPage.authorizePopup.authorizeUsernameField , "Exists" , cmpEqual , true);
  aqObject.CheckProperty(qaConsultPage.authorizePopup.authorizeUsernameField , "contentText" , cmpEqual , "Username");
  //Verify authorize pin field appears
  aqObject.CheckProperty(qaConsultPage.authorizePopup.authorizePinField , "Exists" , cmpEqual , true);
  aqObject.CheckProperty(qaConsultPage.authorizePopup.authorizePinField , "contentText" , cmpEqual , "PIN");
  //Verify authorize button appears
  aqObject.CheckProperty(qaConsultPage.authorizePopup.authorizePopupAuthorizeButtoon , "value" , cmpEqual , "Authorize");
   //Verify cancel button appears
  aqObject.CheckProperty(qaConsultPage.authorizePopup.authorizePopupCancelButton , "value" , cmpEqual , "Cancel");
}

function AuthorizeDispense()
{
  let page = browser.commonControls;
  let page2 = browser.qaConsultAuthorizePage;
  let passwordBox = page.formFormpinverification.passwordbox;
  passwordBox.Click();
  passwordBox.SetText(Project.Variables.PIN);
  page2.submitbuttonAuthorize.ClickButton()
}

function cancelAuthorization()
{
  //Click on cancel button
  qaConsultPage.authorizePopup.authorizePopupCancelButton.Click();
  aqObject.CheckProperty(qaConsultPage.authorizePopup , "Exists" , cmpEqual , false);
}

function selectRequiredCheckbox()
{
  //qaConsultPage.completeTheseStepsSection.requiredCheckbox.setAttribute("checked", true);
  Aliases.browser.qaConsultAuthorizePage.checkbox.Click()
}


module.exports.verifyTransactionTableBeforeAcceptAndAfterSignature = verifyTransactionTableBeforeAcceptAndAfterSignature;
module.exports.verifyQaButtons = verifyQaButtons;
module.exports.ClickViewPackageImageButton = ClickViewPackageImageButton;
module.exports.VerifyUiOfEditAndCompareWindow = VerifyUiOfEditAndCompareWindow; 
module.exports.closeEditAndCompareWindow = closeEditAndCompareWindow; 
module.exports.AcceptPackage = AcceptPackage; 
module.exports.clickAuthorizeButton = clickAuthorizeButton; 
module.exports.VerifyUiOfAuthorizePopup = VerifyUiOfAuthorizePopup; 
module.exports.cancelAuthorization = cancelAuthorization;  
module.exports.receiveQAConsultAuthorizeTask = receiveQAConsultAuthorizeTask;
module.exports.selectRequiredCheckbox = selectRequiredCheckbox;
module.exports.AuthorizeDispense = AuthorizeDispense