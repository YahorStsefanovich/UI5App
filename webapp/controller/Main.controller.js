sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("UI5App.controller.Main", {
        onInit: function(oEvent){
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData(
                "https://services.odata.org/TripPinRESTierService/(S(em3f3icvk1cebvtfvxbfa5wn))/People"
            );
            this.getView().setModel(oModel, "people");
        }
    });
});