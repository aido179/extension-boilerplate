// Listen for events
// ie. When the user clicks the "doAction" button in the extension popup.
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Multiple messages might be passed, so we look for one with the
  // specified request.messageType
  if (request.messageType == "popup_doAction"){
    alert(request.greeting)
    var box = $('<div />').appendTo('body');
    box.text("Special message. Click to remove.")
    box.attr('id', 'extension_content');
    // remove the box when it is clicked.
    box.on('click', function(){
      box.remove()
    });
  }
});
