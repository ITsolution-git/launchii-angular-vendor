(function() {
    'use strict';

    angular
        .module('app')
        .directive('validateInstagramUrl', validateInstagramUrl);

    validateInstagramUrl.$inject = ['defaultErrorMessageResolver', '$state'];
    /* @ngInject */
    function validateInstagramUrl(defaultErrorMessageResolver) {
        defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
            errorMessages['instagram'] = 'Please enter a valid instagram url';
        });

        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                validateInstagramUrl: '=validateInstagramUrl'
            },
            link: function(scope, element, attributes, ngModel) {

                ngModel.$validators.instagram = function(modelValue) {
                    var i = modelValue.indexOf("https://instagram.com/");
                    return i > -1;
                };

                scope.$watch('instagram', function() {
                    ngModel.$validate();
                });
            }
        };
    }

})();