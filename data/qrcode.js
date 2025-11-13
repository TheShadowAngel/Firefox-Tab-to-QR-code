// Get value from storage
browser.storage.local.get(data => {
	if (data.qrsize) {
		qrrender = data.qrrender;
		qrsize = data.qrsize;
		qrfill = data.qrfill;
		qrback = data.qrback;
		qrminver = data.qrminver;
		qreclevel = data.qreclevel;
		qrquiet = data.qrquiet;
		qrrounded = data.qrrounded;
		QRCodeGen();
	}
	else {
		var text = document.getElementById("options_link").textContent;
		document.getElementById("options_link").textContent = "⚙ " + browser.i18n.getMessage("addonOptions");
		let qrrender = 'canvas';
		let qrsize = '250';
		let qrfill = '#333333';
		let qrback = '#ffffff';
		let qrminver = '1';
		let qreclevel = 'H';
		let qrquiet = '1';
		let qrrounded = '20';
		browser.storage.local.set({ qrrender, qrsize, qrfill, qrback, qrminver, qreclevel, qrquiet, qrrounded });
		QRCodeGen();
	}
});

// QR-Code Generator
function QRCodeGen() {
	if (browser.tabs && browser.tabs.query) {
		function getActiveTab() {
			return browser.tabs.query({ currentWindow: true, active: true });
		}
		getActiveTab().then(function (data) {
			/* Get opened tab url to generate */
			data = data[0];
			/* QR-code settings */
			var el = kjua({
				render: qrrender,
				fill: qrfill,
				back: qrback,
				minVersion: qrminver,
				ecLevel: qreclevel,
				size: qrsize,
				quiet: qrquiet,
				rounded: qrrounded,
				text: data.url,
			});
			el.className = "qrcode"
			el.style = "width:100%; height: 100%; display: block;";
			document.querySelector('body').appendChild(el);
		});
	}
}