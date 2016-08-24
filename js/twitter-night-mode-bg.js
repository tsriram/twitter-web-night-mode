var c = chrome || browser;

function setNightMode(tab) {
	c.tabs.insertCSS(tab.id, { file: 'css/main.css', allFrames: true});
}

c.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(tab.url && tab.url === 'https://twitter.com/') {
		setNightMode(tab);
	}
});