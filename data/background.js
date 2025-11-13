/*	Create context menu */

browser.contextMenus.create({
	id: "tabtoqrcode-options",
	type: "normal",
	title: browser.i18n.getMessage("addonOptions"),
	icons: {
		"16": "data/logo.png",
		"32": "data/logo.png"
	},
	contexts: ["action"]
});

/* Go to Options page whan clicked menu item */

browser.menus.onClicked.addListener((info, tab) => {
	switch (info.menuItemId) {
		case "tabtoqrcode-options":
			browser.runtime.openOptionsPage();
			break;
	}
});