function fillUpMail() {
  var email = '';
  chrome.storage.sync.get({
    ngAddress: 'default',
  }, function(items) {
    email = items.ngAddress;
    address = [email.slice(0, email.indexOf("@")), "+"].join('');
    domain =  email.slice(email.indexOf("@"));
    if(document.activeElement.value == "") 
      document.activeElement.value = address;
    else if(document.activeElement.value != address && !document.activeElement.value.includes(domain)) {
      document.activeElement.value += domain;
    }
  });
}
 
chrome.runtime.onMessage.addListener(function (msg, _, sendResponse) {
  if(msg == "modify_input") {
    fillUpMail();
  }
});