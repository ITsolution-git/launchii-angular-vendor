(function() {
    'use strict';

    angular
        .module('app.upsells')
        .filter('toCurrencyFormat', toCurrencyFormat);

    function toCurrencyFormat() {
        return function(input) {
            if (input) {
                var num = parseFloat(input);
                var currency = '$ ' + num.toFixed(2);

                return currency;
            }

            return input;
        }

    }

})();
