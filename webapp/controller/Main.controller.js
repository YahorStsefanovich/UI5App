sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"
], function(Controller, UIComponent, History) {
    "use strict";

    return Controller.extend("UI5App.controller.Main", {
        onInit: function(oEvent){
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData(
                "https://services.odata.org/TripPinRESTierService/(S(em3f3icvk1cebvtfvxbfa5wn))/People"
            );
            this.getView().setModel(oModel, "people");
        },
        onPress: function (oEvent) {
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("detail");
        },
        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("home", {}, true);
            }
        }
    });
});