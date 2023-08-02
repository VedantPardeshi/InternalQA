let waitUtility = require("WaitUtilities")
let browser = Aliases.browser;
let spnrxTask = browser.SpnRxPage;

function receiveSelectPatientAndRxTask()
{
     //Wait until receives spnrx task appears                                                                                                                                       
    waitUtility.waitForPageToLoad("https://qa1.medplatform.medavail.com/MedDispense/spnrx")
}

function submitRx()
{
  //Select required checkbox
  spnrxTask.requiredCheckbox.Click();
  //click on submit button
  spnrxTask.submitButton.Click();
}

function confirmRx()
{
  spnrxTask.confirmButton.Click();
}

module.exports.submitRx = submitRx;
module.exports.confirmRx = confirmRx;
module.exports.receiveSelectPatientAndRxTask = receiveSelectPatientAndRxTask;