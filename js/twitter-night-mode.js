var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('twitter-night-mode.css');
(document.head||document.documentElement).appendChild(style);