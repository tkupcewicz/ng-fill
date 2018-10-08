function save_options() {
  var address = document.getElementById('address').value;
  chrome.storage.sync.set({
    ngAddress: address,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    ngAddress: 'default',
  }, function(items) {
    document.getElementById('address').value = items.ngAddress;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);