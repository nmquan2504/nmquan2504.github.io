sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"HelloWorld/controller/HelloDialog",
	"sap/ui/model/odata/v2/ODataModel"
], function (UIComponent, JSONModel, HelloDialog, ODataModel) {
	"use strict";

	return UIComponent.extend("HelloWorld.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {

			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set invoice model - local
			var oConfig = this.getMetadata().getConfig();
			var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
			var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal));
			this.setModel(oInvoiceModel, "invoice");
			
			// set dialog
			this.helloDialog = new HelloDialog();

			// create the views based on the url/hash
			this.getRouter().initialize();
		}
	});

});
