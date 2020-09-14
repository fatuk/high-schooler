chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true}, function(tabs) {
    var tab = tabs[0];
    chrome.tabs.executeScript(tab.id, {
      code: "var a,w=document.createTreeWalker(document,NodeFilter.SHOW_TEXT);while(a=w.nextNode()){if(a.textContent.trim().length)a.textContent='Одиннадцатиклассница пошла посмотреть на достопримечательность, она шла долго, несколько строчек, пока не пришла'};"
    });
  });
});
