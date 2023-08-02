let NavigateAndSignInToMedOps = require("NavigateAndSignInToMedOps")
let NavigateToMedCenterPage = require("NavigateToMedCenterPage")
let LogoutMedOps = require("LogoutMedOps")
var NavigateAndSignInToMedDispense = require("NavigateAndSignInToMedDispense");
var SearchAndIdentifyCustomerTask = require("SearchAndIdentifyCustomerTask")
var VerifyInventoryPage = require("VerifyInventoryPage");
var EndTransaction = require("EndTransactionOnIdentifyAndSpnRx") 
let waitUtility = require("WaitUtilities")


function VerifyPackagesInInventory()
{
   let maxWaitTime = 50000
  NavigateAndSignInToMedOps.navigateToMedOps();
  NavigateAndSignInToMedOps.signInToMedOps();
  NavigateToMedCenterPage.NavigateToMedCenterPage();
  NavigateToMedCenterPage.selectMedCenter();
  NavigateToMedCenterPage.ClickOnPackageSubmenu();
  let packagesInVault = NavigateToMedCenterPage.verifyPackages(Aliases.browser.pageOrganizationunit.panelNote)
  Log.Message(packagesInVault)
  LogoutMedOps.logOut()
  
  NavigateAndSignInToMedDispense.navigateToMedDispense()
  NavigateAndSignInToMedDispense.signIn()
  NavigateAndSignInToMedDispense.submitPin()
  
  waitUtility.waitForPageToLoad("https://qa1.medplatform.medavail.com/MedDispense/identifyCustomer", maxWaitTime)
  VerifyInventoryPage.OpenInventoryWindow()
  let packagesInInventory = VerifyInventoryPage.verifyPackagesInInventory(Aliases.browser.InventoryPage.DrugTable)
  Log.Message(packagesInInventory)
  
  VerifyInventoryPage.closeInventory()
  const results = areSubstringsPresent(packagesInInventory, packagesInVault);
 Log.Message(results);

  EndTransaction.EndTransaction()

  
  
}



function areSubstringsPresent(arr1, arr2) {
  
 if (!Array.isArray(arr1) || arr1.length === 0 || !Array.isArray(arr2) || arr2.length === 0) {
    return [];
  }
  const lowerArr1 = arr1.map(str => str.toLowerCase());
  const lowerArr2 = arr2.map(str => str.toLowerCase());
  const results = [];

  for (const str1 of lowerArr1) {
    Log.Message(str1)
    const isSubstringPresent = lowerArr2.some(str2 => str2.includes(str1));
    if(isSubstringPresent)
    {
    results.push(isSubstringPresent);
    }
  }

  return results;
}