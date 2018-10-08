chrome.commands.onCommand.addListener(function(command) {
  
  if(command == "fill_up_email") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.executeScript(null, {file: "content.js"}, function () {
        chrome.tabs.sendMessage(tabs[0].id, "modify_input");
      });
    });
  }
});