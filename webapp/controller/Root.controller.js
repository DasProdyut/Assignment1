sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.gyansysHomeassignment.controller.Root", {
		onRowShiftAction: function (oEvent) {
			var oSource = oEvent.getSource(),
				oRow = oSource.getParent();
			if (oSource.getSrc() === "sap-icon://expand") {
				oSource.setSrc("sap-icon://collapse");
				oRow.getCells()[11].setVisible(true);
			} else {
				oSource.setSrc("sap-icon://expand");
				oRow.getCells()[11].setVisible(false);
            }
        },

        onRowShiftAction1: function (oEvent) {
			var oSource = oEvent.getSource(),
				oRow = oSource.getParent();
			if (oSource.getSrc() === "sap-icon://expand") {
				oSource.setSrc("sap-icon://collapse");
				oRow.getCells()[22].setVisible(true);
			} else {
				oSource.setSrc("sap-icon://expand");
				oRow.getCells()[22].setVisible(false);
            }
        },
        onSearch: function(oEvent) {
			// var sMessage = "onSearch trigered";
			// MessageToast.show(sMessage);
			// this.getRouter().navTo("InnerTable");
			var oTable = this.getView().byId("MainTable");
			if(oTable){
				oTable.setVisible(true);
			}
		}
		
		

	});
});