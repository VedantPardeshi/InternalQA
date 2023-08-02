const environmentVariable = Project.Variables.environment


function startBrowser(url)
{
  Browsers.Item(btChrome).Run(url);
  browser = Sys.Browser("chrome");
}


function TestEvent_OnStartTest(Sender)
{
  let url = setEnvironment()
  Log.Message("Inside set env2")
  startBrowser(url)
  Log.Checkpoint("| Test Environmnet Set | - " + environmentVariable);
}

function setEnvironment()
{
  Log.Message("Inside set env")
  Project.Variables.medDispenseUrl = "https://" + environmentVariable +".medplatform.medavail.com/MedDispense/?provider=MedAvailFederation";
  return Project.Variables.medDispenseUrl;
}