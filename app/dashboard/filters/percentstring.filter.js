(function() {
    'use strict';

    angular
        .module('app')
        .filter('percentString', percentString);

    function percentString() {
        return function(total, part) {
            if (total <= 0) {
                return '';
            }
            if (!part) {
                return '';
            }

            var percent = part / total * 100;
            return (percent.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + '%');
        }
    }
})();
