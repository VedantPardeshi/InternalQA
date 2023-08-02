let browser = Aliases.browser;
let commonControls = browser.commonControls;

function verifyRibbonDetails()
{
   //Verify Queued tasks indicator
  aqObject.CheckProperty(commonControls.queuedTaskSIndicator, "contentText", cmpEqual, "Queued Task(s)");
  //Verify Session timer
  aqObject.CheckProperty(commonControls.sessionTimer, "Exists", cmpEqual, true);
  
  //Verify username dropdown 
  aqObject.CheckProperty(commonControls.panelGayatriMedplatformBox , "Exists" , cmpEqual , true);
  aqObject.CheckProperty(commonControls.panelGayatriMedplatformBox , "contentText" , cmpEqual , Project.Variables.LoginUsername);
  
  //Verify Help link
  aqObject.CheckProperty(commonControls.linkLaunchHelp , "Exists" , cmpEqual , true);
  aqObject.CheckProperty(commonControls.linkLaunchHelp , "contentText" , cmpEqual , "Help");
  
  //Verify medAvail version
  aqObject.CheckProperty(commonControls.medavailVersion , "contentText" , cmpEqual , Project.Variables.medavailVersion);
  
  //Verify medcenter details from ribbon
  aqObject.CheckProperty(commonControls.medcenterTitle.medcenterText , "contentText" , cmpEqual , "MedCenter:");
  aqObject.CheckProperty(commonControls.medcenterTitle.medcenterNumber , "contentText" , cmpEqual , Project.Variables.MedcenterNumber);
  //Verify Kiosk details from ribbon
  aqObject.CheckProperty(commonControls.kioskTitle.kiosktext , "contentText" , cmpEqual , "Kiosk:");
  aqObject.CheckProperty(commonControls.kioskTitle.kioskNumber , "contentText" , cmpEqual , Project.Variables.KioskNumber);
  //Verify transaction type details from ribbon
  aqObject.CheckProperty(commonControls.transactionTypeTitle.transactionTypeText , "contentText" , cmpEqual , "Transaction Type:");
  aqObject.CheckProperty(commonControls.transactionTypeTitle.transactionTypeFillPrescription , "contentText" , cmpEqual , "Fill Prescription"); 
  //Verify location details from ribbon
  aqObject.CheckProperty(commonControls.locationText , "contentText" , cmpEqual , "Location:");
  //Verify customer language details from ribbon
  aqObject.CheckProperty(commonControls.customerLanguageTitle.customerLanguageText , "contentText" , cmpEqual , "Customer Language:");
  aqObject.CheckProperty(commonControls.customerLanguageTitle.customerLanguage , "contentText" , cmpEqual , Project.Variables.CustomerLanguage);
  //Verify store id details from ribbon
  aqObject.CheckProperty(commonControls.storeTitle.storeText , "contentText" , cmpEqual , "Store:");
  aqObject.CheckProperty(commonControls.storeTitle.storeNumber , "contentText" , cmpEqual , Project.Variables.StoreNumber);   

}

function verifyButtons()
{
   //verify buttons from Qa consult authorize task
  //Call kiosk button
  aqObject.CheckProperty(commonControls.callKioskButton , "Exists" , cmpEqual , true);
  aqObject.CheckProperty(commonControls.callKioskButton , "contentText" , cmpEqual , "Call Kiosk");
  //Verify button is enabled
  aqObject.CheckProperty(commonControls.callKioskButton , "className", cmpContains, "blueButton");
  
  //Get kiosk screen button
  aqObject.CheckProperty(commonControls.getKioskScreenButton , "Exists" , cmpEqual , true);
  aqObject.CheckProperty(commonControls.getKioskScreenButton , "contentText" , cmpEqual , "Get Kiosk Screen");
   //Verify Get Kiosk Screen button is enabled 
  aqObject.CheckProperty(commonControls.getKioskScreenButton , "className" , cmpContains , "glowShow");
  
  //Transfer button
  aqObject.CheckProperty(commonControls.transferTaskButton , "Exists" , cmpEqual , true);
  aqObject.CheckProperty(commonControls.transferTaskButton , "contentText" , cmpEqual , "Transfer Task");
  //Verify button is enabled 
  aqObject.CheckProperty(commonControls.transferTaskButton , "className" , cmpContains , "blueButton");
}

function verifyNotesForPatient()
{
  //Verify notes for patient
  //verify patient name
  aqObject.CheckProperty(commonControls.patientNotesSection.patientName , "contentText" , cmpEqual , Project.Variables.PatientLastName+", "+Project.Variables.PatientFirstName);
  //Verify patient notes
  //aqObject.CheckProperty(qaConsultPage.qaPatientNotesSection.patientNotes , "contentText" , cmpEqual , Project.Variables.PatientNotes1+"\n"+ );                                       //Check this code
}

function verifyScanCollateralAndNotes()
{
//Verify collateral header
  aqObject.CheckProperty(browser.pageMeddispense.collateralHeader , "contentText" , cmpEqual , "Collateral");
  //Verify add scan header
  aqObject.CheckProperty(browser.pageMeddispense.addScanHeader , "contentText" , cmpEqual, "Add Scan")
  
  //Verify Notes displayed
  aqObject.CheckProperty(commonControls.notesSection.notesHeader , "contentText" , cmpEqual , "Notes"); 
}


module.exports.verifyRibbonDetails = verifyRibbonDetails;
module.exports.verifyButtons = verifyButtons;
module.exports.verifyNotesForPatient = verifyNotesForPatient;
module.exports.verifyScanCollateralAndNotes = verifyScanCollateralAndNotes;

