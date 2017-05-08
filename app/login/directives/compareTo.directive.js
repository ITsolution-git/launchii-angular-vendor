

(function() {
    'use strict';

    angular
        .module('app.auth')
        .directive('compareTo', compareTo);

    compareTo.$inject = ['$state', '$stateParams'];
    /* @ngInject */
    function compareTo($state, $stateParams) {

        var directive = {
                
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function(scope, element, attributes, ngModel) {
                 
                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue == scope.otherModelValue;
                };
     
                scope.$watch("otherModelValue", function() {
                    ngModel.$validate();
                });
            }
        };

        return directive;
    }

})();