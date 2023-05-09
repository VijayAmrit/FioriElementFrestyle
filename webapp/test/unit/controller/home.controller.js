/*global QUnit*/

sap.ui.define([
	"proj_nw_freestyle/controller/home.controller"
], function (Controller) {
	"use strict";

	QUnit.module("home Controller");

	QUnit.test("I should test the home controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
