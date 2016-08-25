chrome.storage.local.get({'nightmode': true}, function(items) {
  if(items.nightmode) {
    setNightMode();
  }
});

function setNightMode() {
  if(document.URL == 'https://twitter.com/'
    || document.URL == 'https://twitter.com'
    || document.URL.indexOf('https://twitter.com/i/cards/') === 0) {

    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL('css/main.css');
    (document.head||document.documentElement).appendChild(style);
  }
}

