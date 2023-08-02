let envt = qa1

function setEnvironment(envt) {
  ProjectSuite.Variables.Environment = envt;
  ProjectSuite.Variables.Site = "https://"+envt+".medplatform.medavail.com/MedDispense/?provider=MedAvailFederation" // using your own website url
  CommonMAIN.launchChromeBrowser(ProjectSuite.Variables.Site);
  Log.Checkpoint("| Test Environmnet Set | - " + ProjectSuite.Variables.Environment);
}