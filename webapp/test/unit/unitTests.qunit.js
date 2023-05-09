/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"proj_nw_freestyle/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
