/*
Popup.js
This file is run when the popup.html file is rendered.
ie. When the user clicks on the extension icon.
*/
//convenienve function to update the UI
function message(val){
  $(".message").text(val);
}

$(document).ready(function(){
  // Listen for clicks on the "#doAction" button
  document.getElementById('doAction').addEventListener('click', doAction);

});


// Do an action. (Eg. Show a message in the current active tab)
function doAction() {
  // Send message to the contentScript in the active tab.
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {messageType: "popup_doAction", greeting: "hello"});
  });
}
