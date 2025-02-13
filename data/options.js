// Get parameter value from options page
const qrrenderOption = document.querySelector("#qrrender");
const qrsizeOption = document.querySelector("#qrsize");
const qrfillOption = document.querySelector("#qrfill");
const qrbackOption = document.querySelector("#qrback");
const qrminverOption = document.querySelector("#qrminver");
const qreclevelOption = document.querySelector("#qreclevel");
const qrquietOption = document.querySelector("#qrquiet");
const qrroundedOption = document.querySelector("#qrrounded");

// Set data to storage
function storeSettings() {
	let qrrender = qrrenderOption.value;
	let qrsize = qrsizeOption.value;
	let qrfill = qrfillOption.value;
	let qrback = qrbackOption.value;
	let qrminver = qrminverOption.value;
	let qreclevel = qreclevelOption.value;
	let qrquiet = qrquietOption.value;
	let qrrounded = qrroundedOption.value;
	browser.storage.local.set({	qrrender, qrsize, qrfill, qrback, qrminver, qreclevel, qrquiet, qrrounded });
}

// Update the options UI with the settings values retrieved from storage, or the default settings if the stored settings are empty.
function updateUI(restoredSettings) {
	qrrenderOption.value = restoredSettings.qrrender;
	qrsizeOption.value = restoredSettings.qrsize;
	qrfillOption.value = restoredSettings.qrfill;
	qrbackOption.value = restoredSettings.qrback;
	qrminverOption.value = restoredSettings.qrminver;
	qreclevelOption.value = restoredSettings.qreclevel;
	qrquietOption.value = restoredSettings.qrquiet;
	qrroundedOption.value = restoredSettings.qrrounded;
}

function onError(e) {
	console.error(e);
}

// On opening the options page, fetch stored settings and update the UI with them.
browser.storage.local.get().then(updateUI, onError);

// Whenever the options changes, save the new values
qrrenderOption.addEventListener("change", storeSettings);
qrsizeOption.addEventListener("change", storeSettings);
qrfillOption.addEventListener("change", storeSettings);
qrbackOption.addEventListener("change", storeSettings);
qrminverOption.addEventListener("change", storeSettings);
qreclevelOption.addEventListener("change", storeSettings);
qrquietOption.addEventListener("change", storeSettings);
qrroundedOption.addEventListener("change", storeSettings);