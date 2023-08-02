function FindElements_Example()
{

  var browser = Sys.Browser();
  var page = browser.Page("*services.smartbear.com/samples/TestComplete*/smartstore*");
  var articles = page.FindElements("//article");

  if (articles.length > 0)
  {
    for (var i = 0; i < articles.length; i++)
    {
      Log.Message(articles[i].innerText);
    }
  }
  else
  {
    Log.Message("No ARTICLE element is found on the page.");
  }

}