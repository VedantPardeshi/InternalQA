//@tag1

var NavigateAndSignInToMedDispense = require("NavigateAndSignInToMedDispense");

var SearchAndIdentifyCustomerTask = require("SearchAndIdentifyCustomerTask")
var SelectPatientAndRxTask = require("SelectPatientAndRxTask"); 
var QaConsultAuthorizeTask = require("QaConsultAuthorizeTask"); 
var commonControlsPage = require("commonControlsPage"); 
function verifyUIForQATask()
{
 /* //Navigate To meddispense
  NavigateAndSignInToMedDispense.navigateToMedDispense();
  NavigateAndSignInToMedDispense.signIn();
  NavigateAndSignInToMedDispense.submitPin();

  //Search patient and complete identification
  SearchAndIdentifyCustomerTask.receiveSearchPatientTask();
  SearchAndIdentifyCustomerTask.searchPatient();
  SearchAndIdentifyCustomerTask.selectPatientCard();
  SearchAndIdentifyCustomerTask.completeIdentification();
  
  //Select Rx And confirm rx
  SelectPatientAndRxTask.submitRx();
  SelectPatientAndRxTask.confirmRx();*/
  
  //
  QaConsultAuthorizeTask.verifyTransactionTableBeforeAcceptAndAfterSignature();
  commonControlsPage.verifyRibbonDetails();
  commonControlsPage.verifyButtons();
  QaConsultAuthorizeTask.verifyQaButtons();
  commonControlsPage.verifyNotesForPatient();
  commonControlsPage.verifyScanCollateralAndNotes();
  QaConsultAuthorizeTask.ClickViewPackageImageButton();
  QaConsultAuthorizeTask.VerifyUiOfEditAndCompareWindow();
  QaConsultAuthorizeTask.closeEditAndCompareWindow();  
  QaConsultAuthorizeTask.AcceptPackage();
  QaConsultAuthorizeTask.clickAuthorizeButton();
  QaConsultAuthorizeTask.VerifyUiOfAuthorizePopup();
  QaConsultAuthorizeTask.cancelAuthorization();
  
}