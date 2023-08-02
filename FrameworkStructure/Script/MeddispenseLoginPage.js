// @ Tag1
function navigateToMedDispense()
{
  
  Browsers.Item(btChrome).Navigate(ProjectSuite.Variables.MeddispenseLoginUrl);
  Log.Message("Navigated to Meddispense");
}
module.exports.navigateToMedispense = navigateToMedDispense;