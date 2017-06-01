(function() {
    'use strict';

    describe('Upsells service', function() {
        var $controller, UpsellService, BrandService;

        beforeEach(angular.mock.module('ui.router'));
        beforeEach(angular.mock.module('app.upsells'));
        beforeEach(angular.mock.module('app.users'));

        beforeEach(function() {

            module(function($provide) {
                $provide.value('CONST', jasmine.createSpy('CONST'));
                $provide.value('brandPrepService', { brands: [] });
                $provide.value('HelperService', { getPrevState: jasmine.createSpy('getPrevState') });
                $provide.value('BrandService', jasmine.createSpy('BrandService'));
                $provide.value('CategoryService', jasmine.createSpy('CategoryService'));
            });

        });

        beforeEach(inject(function(_UpsellService_) {
            UpsellService = _UpsellService_;
        }));

        it('should exist', function() {
            expect(UpsellService).toBeDefined();
        });

        it('should have the required attributes', function() {
            expect(UpsellService.search).toBeDefined();
            expect(UpsellService.delete).toBeDefined();
            expect(UpsellService.getById).toBeDefined();
        });

        describe('Upsell dashboard controller', function() {

            var scope, UpsellController, httpBackend;

            beforeEach(inject(function($controller, $rootScope, $httpBackend) {

                scope = $rootScope.$new();
                httpBackend = $httpBackend;

                UpsellController = $controller('UpsellController', {
                    $scope: scope,
                    $http: $httpBackend
                });
            }));

            it('should exist', function() {
                expect(UpsellController).toBeDefined();
            });

            it('should have the required attributes', function() {
                expect(UpsellController.upsells).toBeDefined();
                expect(UpsellController.deleteUpsell).toBeDefined();
                expect(UpsellController.search).toBeDefined();
                expect(UpsellController.clearSearch).toBeDefined();
            });

        });

    });
})();
