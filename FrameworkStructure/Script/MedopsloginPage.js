
function navigateToMedops()
{
  Browsers.Item(btChrome).Navigate("https://qa1.medplatform.medavail.com/Meddispense");
  Log.Message("Navigated to Medops");
}
module.exports.navigateToMedops = navigateToMedops;