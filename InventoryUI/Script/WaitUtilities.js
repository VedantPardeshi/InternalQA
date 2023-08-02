let page; 
let browser = Sys.Browser("chrome");
var NavigateAndSignInToMedDispense = require("NavigateAndSignInToMedDispense");


function waitForPageToLoad(pageUrl) {
  let timeout = 120000;
    
    function isPageReady() {
             let pageLoadedCondition = browser.Page(pageUrl).Exists; 
             Log.Message(pageLoadedCondition)
            return pageLoadedCondition;
    }
    while (true) {
        browser.WaitPage(pageUrl, timeout)
        if (isPageReady()) {
            Log.Message("Page loaded successfully.");
            break
        }
        Delay(1000);
         }
        
    }

module.exports.waitForPageToLoad = waitForPageToLoad






function waitForElementVisible(element, timeoutInSeconds) {
    var startTime = new Date();
    var endTime = new Date(startTime.getTime() + (timeoutInSeconds * 1000));
    
    while (!element.VisibleOnScreen && new Date() < endTime) {
        Delay(500); 
    }
    
    if (!element.VisibleOnScreen) {
        Log.Error("Timeout: Element is not visible on the screen after " + timeoutInSeconds + " seconds.");
    }
}
module.exports.waitForElementVisible = waitForElementVisible


function reloadPage(currenrUrl) {
  let pinVerificationElement = Aliases.browser.commonControls.formFormpinverification.passwordbox;
  browser.ToUrl(currenrUrl)
  
//   Accept the alert by sending "Enter" key
  Sys.Keys("[Enter]");
  waitForElement(pinVerificationElement, 30000)
  NavigateAndSignInToMedDispense.submitPin()
  waitForPageToLoad(currenrUrl)
  
}
module.exports.reloadPage = reloadPage

function waitForElement(Selector, maxWaitTime)
{
   page = Sys.Browser().Page("*");
    while(true){
        // Wait for the element to appear on the page
        let element = page.WaitElement(Selector, maxWaitTime);
        Log.Message("Element found: " + Selector);
        break;     
    } 
}
module.exports.waitForElement = waitForElement
