function setCaretPosition(elem, caretPos) {

  if(elem.createTextRange) {
      var range = elem.createTextRange();
      range.move('character', caretPos);
      range.select();
  }
  else {
    if(elem.selectionStart) {
      elem.focus();
      elem.setSelectionRange(caretPos, caretPos);
    }
    else
      elem.focus();
  }
}

function fillUpMail() {
  var email = '';
  chrome.storage.sync.get({
    ngAddress: 'default',
  }, function(items) {
    email = items.ngAddress;
    email = [email.slice(0, email.indexOf("@")), "+", email.slice(email.indexOf("@"))].join('');
    document.activeElement.value = email;
    setCaretPosition(document.activeElement, email.indexOf("@"));
  });
}
 
chrome.runtime.onMessage.addListener(function (msg, _, sendResponse) {
  if(msg == "modify_input") {
    fillUpMail();
  }
});