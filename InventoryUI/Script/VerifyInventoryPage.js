
let browser = Aliases.browser;
let inventoryPage= browser.InventoryPage;
function OpenInventoryWindow()
{
  //Click On Inventory button
  browser.IdentifyCustomerPage.viewInventorybutton.ClickButton();
  //Verify caption of inventory page
  aqObject.CheckProperty(browser.InventoryWindow, "WndCaption", cmpEqual, "MedDispense - Google Chrome");
  browser.InventoryWindow.Maximize();
}

function VerifyInventoryUI(){
  //Verify The title of the window is 'MedDispense - Google Chrome'
  aqObject.CheckProperty(browser.InventoryWindow, "WndCaption", cmpEqual, "MedDispense - Google Chrome");
  Log.Message("Window caption verified successfully.");
  
  //Verify Header as MedCenter:<MedCenter_Name>
  aqObject.CheckProperty(inventoryPage.medCenterHeader, "contentText", cmpEqual, "MedCenter:\nV4-00023");
  
  //Validate Searchbox of inventory
  aqObject.CheckProperty(inventoryPage.inventorySeachBox, "Exists" , cmpEqual, true);
  aqObject.CheckProperty(inventoryPage.searchIcon, "Exists" , cmpEqual, true);
  aqObject.CheckProperty(inventoryPage.searchPlaceholder, "placeholder", cmpEqual, "Search");
  Log.Message("Searchbox of inventory verified successfully.");
  
  //Validate product name and its filter box
  aqObject.CheckProperty(inventoryPage.productName, "Exists" , cmpEqual , true);
  aqObject.CheckProperty(inventoryPage.productName.productNameText, "contentText", cmpEqual, "Product Name");
  aqObject.CheckProperty(inventoryPage.productName.productNameFilterbox, "Exists", cmpEqual, true);
  Log.Message("Product name and its filter box is exists");
  
  //Validate package descriptioncolumn and its filter box
  aqObject.CheckProperty(inventoryPage.packageDescription, "Exists" , cmpEqual , true);
  aqObject.CheckProperty(inventoryPage.packageDescription.packageDescriptionText, "contentText", cmpEqual, "Package Description");
  aqObject.CheckProperty(inventoryPage.packageDescription.packageDescriptionFilterbox, "Exists", cmpEqual, true);
  Log.Message("Package description and its filter box is exists");

  //Validate product code column and its filter box
  aqObject.CheckProperty(inventoryPage.productCode, "Exists" , cmpEqual , true);
  aqObject.CheckProperty(inventoryPage.productCode.productCodeText, "contentText", cmpEqual, "Product Code");
  aqObject.CheckProperty(inventoryPage.productCode.productCodeFilterbox, "Exists", cmpEqual, true);
  Log.Message("Product Code and its filter box is exists");
  
  //Validate Quantity in package column
  aqObject.CheckProperty(inventoryPage.quantityInPackage, "contentText", cmpEqual, "Quantity In Package");
  Log.Message("Quantity in Package column exists.");
  
  //Validate Manufacturer column and its filter box
  aqObject.CheckProperty(inventoryPage.manufacturer, "Exists" , cmpEqual , true);
  aqObject.CheckProperty(inventoryPage.manufacturer.manufacturerText, "contentText", cmpEqual, "Manufacturer");
  aqObject.CheckProperty(inventoryPage.manufacturer.manufacturerFilterbox, "Exists", cmpEqual, true);
  Log.Message("Manufacturer and its filter box is exists");    
  
  //Validate package code column and its filter box
  aqObject.CheckProperty(inventoryPage.packageCode, "Exists" , cmpEqual , true);
  aqObject.CheckProperty(inventoryPage.packageCode.packageCodeText, "contentText", cmpEqual, "Package Code");
  aqObject.CheckProperty(inventoryPage.packageCode.packageCodeFilterbox, "Exists", cmpEqual, true);
  Log.Message("Package Code and its filter box is exists");
  
  //Validate Soonest Expiration column
  aqObject.CheckProperty(inventoryPage.soonestExpirationText, "contentText", cmpEqual, "Soonest Expiration");
  Log.Message("Soonest Expiration column exists.");
  
  //Validate Available Packages column
  aqObject.CheckProperty(inventoryPage.availablePackagesText, "contentText", cmpEqual, "Available Packages");
  Log.Message("Available Packages column exists.");
  
  //Validate Is Demo Package column
  aqObject.CheckProperty(inventoryPage.isDemoPackageText, "contentText", cmpEqual, "Is Demo Package");
  Log.Message("Is Demo Package column exists.");
  
 
}

function maxAndMinInventoryPage()
{
  
  
}


function closeInventory()
{
  //Close inventory window
  browser.InventoryPage.Close();
 
}


function verifyPackagesInInventory(webElement)
{
   let packagesList = new Array()
   inventoryPage.Wait()
   if (webElement.Exists)
  {
    let packages = webElement.FindElements("//div[@class='WzVcYlXql-4ydhSVtF-qU']//ul//li[2]");

    if (packages.length > 0)
    {
      for (let i = 0; i < packages.length; i++)
      {
        Log.Message(packages[i].innerText);
        packagesList.push(packages[i].innerText)
      }
      return packagesList;
    }
    else
    {
      Log.Message("No Package element is found on the page.");
    }
  }
  else
    Log.Message("The"+ webElement+ " is not found.");
  
  
}
module.exports.verifyPackagesInInventory = verifyPackagesInInventory;


module.exports.OpenInventoryWindow = OpenInventoryWindow;
module.exports.VerifyInventoryUI = VerifyInventoryUI;
module.exports.closeInventory = closeInventory;