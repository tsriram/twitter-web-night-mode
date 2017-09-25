# twitter-web-night-mode

#### Update (Sep 25, 2017) - This extension is retired and will no longer be supported as twitter has launched official night mode for the website. [Read more](https://goo.gl/ypAq23).

This is a web extension to bring [twitter's night mode](https://twitter.com/twitter/status/757969656493649921) to both Chrome & Firefox.

You can access install from here:

**Chrome** - [https://chrome.google.com/webstore/detail/twitter-web-night-mode/cadmiljohldbooihfbkjkobepojailca](https://chrome.google.com/webstore/detail/twitter-web-night-mode/cadmiljohldbooihfbkjkobepojailca)

**Firefox** - [https://addons.mozilla.org/en-US/firefox/addon/twitter-web-night-mode/](https://addons.mozilla.org/en-US/firefox/addon/twitter-web-night-mode/)

## Developemnt

* clone the repo and do `npm install`
* run `gulp watch` and start hacking
* edit code in `js` & `sass` directories as needed
* run `gulp` or `npm run build` to build `dist/chrome` and `dist/firefox`

**TODO**:
- [x] Add night mode theme to other twitter pages (currently applies only to home tab)
- [ ] Clean up Sass - preferably multiple .scss files - each one for page specific styles and one for common styles 
- [x] Gulp watch (didn't need it much so far)
- [ ] Add CONTRIBUTION.md
