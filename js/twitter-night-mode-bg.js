function setNightMode(tab) {
	chrome.tabs.insertCSS(tab.id, { file: 'twitter-night-mode.css', allFrames: true});
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(tab.url && tab.url === 'https://twitter.com/') {
		setNightMode(tab);
	}
});

