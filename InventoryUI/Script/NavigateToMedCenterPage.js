let browser = Aliases.browser
let medOpsDashboardPage = browser.pageMedopsDashboard
let page = browser.pageOrganizationunit


function NavigateToMedCenterPage()
{
  // Click on MedCenter Menu
  medOpsDashboardPage.medcenterMenu.Click()
  page.Wait();
  
  // Verify Medcenter Page appears
   aqObject.CheckProperty(page.textnodeRootOu, "VisibleOnScreen", cmpEqual, true);
 } 
  
function selectMedCenter()
{
  page.Wait()
  aqObject.CheckProperty(page.textnodeRootOu.textnodeRootOu2.textnodeV400023.textnodeV4000232, "contentText", cmpEqual, "V4-00023");
  page.textnodeRootOu.textnodeRootOu2.textnodeV400023.textnodeV4000232.Click();
}

function ClickOnPackageSubmenu()
{  
  //Click on Packages SubMenu
  page.textnodeProperties.linkPackages.Click();
//  aqObject.CheckProperty(page.panelCymbalta30mgCapsules30, "contentText", cmpEqual, "CYMBALTA 30MG CAPSULES #30");
//  aqObject.CheckProperty(Aliases.browser.pageOrganizationunit.FindElement("//div[.='14']"), "contentText", cmpEqual, "14");
}

function verifyPackages(webElement)
{
   let packagesList = new Array()
   page.Wait()
   Delay(10000)
   //webElement = Sys.Browser("*").Page("https://qa1.medplatform.medavail.com/MedOps/MedCenters/OrganizationUnit")
   if (webElement.Exists)
  {
    let packages = webElement.FindElements("//div[@class='grid-canvas grid-canvas-top grid-canvas-left']//div//div[2]");

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


module.exports.NavigateToMedCenterPage = NavigateToMedCenterPage;
module.exports.selectMedCenter = selectMedCenter;
module.exports.ClickOnPackageSubmenu = ClickOnPackageSubmenu;
module.exports.verifyPackages = verifyPackages;