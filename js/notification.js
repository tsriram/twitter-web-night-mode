var c = chrome || browser;
var today = new Date().toISOString();
var blogUrl = "https://goo.gl/ypAq23";

function showNotification() {
  var notification = document.createElement('div');
  notification.classList.add('ext-notification');
  notification.innerHTML = 'Twitter Web - Night Mode extension is being retired. <a target="_blank" href="' + blogUrl + '">Read more.</a>';
  document.body.appendChild(notification);
  c.storage.local.set({'notifiedOn': today});
}

c.storage.local.get('notifiedOn', function(items) {
  var lastNotifiedDate = items.notifiedOn;
  if(!lastNotifiedDate) {
    showNotification();
    return;
  }
  var diff = new Date(today) - new Date(lastNotifiedDate);
  var day = 1000*60*60*24;
  var daysSinceLastNotification = diff / day;
  if(daysSinceLastNotification >= 7) {
    showNotification();
  }
});