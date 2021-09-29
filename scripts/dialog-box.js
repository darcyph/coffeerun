(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    class DialogBox {
        constructor(selector) {
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$element = $(selector);
            if (this.$element.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        }
        addRow(payment) {
            var rowElement = new Row(payment);
            this.$element.append(rowElement.$element);
        }
    }

    class Row {
        constructor(payment) {
            var $div = $('<div></div>', {
                'id': 'payment-validation',
                'class': 'modal'
            });

            var $label = $('<label></label>');

            var description = 'Thank you for your order, ';
            if (payment.title) {
                description += payment.title;
            }
            description += ' ' + payment.username;

            $label.append(description);
            $div.append($label);

            this.$element = $div;
        }
    }

    App.DialogBox = DialogBox;
    window.App = App;
})(window);