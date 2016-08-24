function setNightMode() {
	var style = document.createElement('link');
	style.rel = 'stylesheet';
	style.type = 'text/css';
	style.href = chrome.extension.getURL('css/main.css');
	(document.head||document.documentElement).appendChild(style);
}

if(document.URL == 'https://twitter.com/'
		|| document.URL == 'https://twitter.com'
		|| document.URL.indexOf('https://twitter.com/i/cards/') === 0) {
	setNightMode();
}