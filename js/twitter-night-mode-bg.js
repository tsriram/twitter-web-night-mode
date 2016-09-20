var c = chrome || browser;
var regex = /https:\/\/twitter\.com\/(.*)/;

// track usage via Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-82144226-2']);
_gaq.push(['_trackPageview']);

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
  _gaq.push(['_trackEvent', 'nightmode-action', 'disable']);
}

function setNightMode(tab) {
  c.storage.local.set({'nightmode': true}, function() {
    c.tabs.insertCSS(tab.id, { file: 'css/main.css', allFrames: true});
    c.pageAction.setIcon({tabId: tab.id, path: 'images/icon32.png'});
    c.pageAction.setTitle({tabId: tab.id, title: 'Night mode enabled. Click to disable.'});
  });
  _gaq.push(['_trackEvent', 'nightmode-action', 'enable']);
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
    c.pageAction.setTitle({tabId: tab.id, title: 'Extension will be enabled if you open twitter.com'});
  }
});

// Google Analytics
c.storage.local.get({'nightmode': true}, function(items) {
  _gaq.push(['_trackEvent', 'nightmode', items.nightmode ? 'enabled' : 'disabled']);
});
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
