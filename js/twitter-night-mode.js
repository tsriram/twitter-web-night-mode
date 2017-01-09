chrome.storage.local.get({'nightmode': true}, function(items) {
  if(items.nightmode) {
    setNightMode();
  }
});

function setNightMode() {
  var regex = /https:\/\/twitter\.com\/(.*)/;

  if(regex.test(document.URL)) {
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL('css/main.css');
    (document.head||document.documentElement).appendChild(style);
  }
}

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text && (msg.text == "removeUserStyle")) {
        removeUserStyle();
    }
});


// twitter allows users to select a theme form Edit Profile. Some theme colors don't go
// well with the night mode colors. Hence removing the styles for user selected theme so that
// night mode works with twitter's default theme.
function removeUserStyle() {
  var initDataField = document.getElementById('init-data');
  if(initDataField) {
    var initData = JSON.parse(initDataField.value);
    var screenName = initData && initData.screenName;
    if(screenName) {
      var userStyleId = 'user-style-' + screenName;
      var userStyle = document.getElementById(userStyleId);
      userStyle && userStyle.remove();
    }
  }
}