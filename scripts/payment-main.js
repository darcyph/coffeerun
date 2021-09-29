(function (window) {
    'use strict';

    var FORM_SELECTOR = '[payment-validation="form"]';
    var BOX_SELECTOR = '[payment-validation="modal"]'
    var App = window.App;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var DialogBox = App.DialogBox;

    var dialogBox = new DialogBox(BOX_SELECTOR);
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function(data) {
        dialogBox.addRow.call(dialogBox, data);
        $("#payment-validation").modal();
    });

    console.log(formHandler);
})(window);