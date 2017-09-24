var c = chrome || browser;
var regex = /https:\/\/twitter\.com\/(.*)/;

c.pageAction.onClicked.addListener(function(tab) {
  c.storage.local.get({'nightmode': true}, function(items) {
    if(items.nightmode) {
      unsetNightMode(tab);
      c.tabs.reload(tab.id);
    }else {
      setNightMode(tab);
    }
  });
});

function unsetNightMode(tab) {
  c.storage.local.set({'nightmode': false}, function() {
    c.pageAction.setIcon({tabId: tab.id, path: 'images/icon32-blue.png'});
    c.pageAction.setTitle({tabId: tab.id, title: 'Night mode disabled. Click to enable.'});
  });
}

function setNightMode(tab) {
  c.storage.local.set({'nightmode': true}, function() {
    c.tabs.insertCSS(tab.id, { file: 'css/main.css', allFrames: true});
    c.pageAction.setIcon({tabId: tab.id, path: 'images/icon32.png'});
    c.pageAction.setTitle({tabId: tab.id, title: 'Night mode enabled. Click to disable.'});
    c.tabs.sendMessage(tab.id, { text: "removeUserStyle" });
  });
}

c.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(tab.url && regex.test(tab.url)) {
    c.pageAction.show(tab.id);
    c.storage.local.get({'nightmode': true}, function(items) {
      if(items.nightmode) {
        setNightMode(tab);
      }else {
        unsetNightMode(tab);
      }
    });
	}else {
    c.pageAction.setTitle({tabId: tab.id, title: 'Extension will be enabled when you open twitter.com'});
  }
});
