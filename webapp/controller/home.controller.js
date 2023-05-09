sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("projnwfreestyle.controller.home", {
            onInit: function () {
                // debugger;
            },
            onBeforeRebindTable: function(oSource){
                var binding = oSource.getParameter("bindingParams");
                debugger;
                var oFilter = new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.NE, "D");
                binding.filters.push(oFilter);
            },
            onAfterRendering: function () {
                // debugger;
            },
            onFilterChange: function(){
                debugger;
            },
            onFilter: function(){
                debugger;
            },
            onNewButtonPress: function(){
                debugger;
            }
        });
    });
