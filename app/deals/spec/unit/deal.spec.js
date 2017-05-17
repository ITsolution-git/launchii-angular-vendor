(function() {
    'use strict';

    describe('Deals service', function() {
        var $controller, DealService;

        beforeEach(angular.mock.module('ui.router'));
        // beforeEach(angular.mock.module('app.deals.highlightadd'));
        // beforeEach(angular.mock.module('app.deals.highlightedit'));
        // beforeEach(angular.mock.module('app.deals.highlightfield'));
        beforeEach(angular.mock.module('app.deals'));

        beforeEach(function() {

            module(function($provide) {
                $provide.value('CONST', jasmine.createSpy('CONST'));
                $provide.value('brandPrepService', { brands: [] });
                $provide.value('HelperService', { getPrevState: jasmine.createSpy('getPrevState') });
                $provide.value('prepSelBrand', jasmine.createSpy('prepSelBrand'));
                $provide.value('BrandService', jasmine.createSpy('DealService')); 
                $provide.value('dealPrepService', { deals: jasmine.createSpy('deals') }); 
                $provide.value('prepTemplateNames', jasmine.createSpy('prepTemplateNames'));
                $provide.value('prepTemplateTypes', jasmine.createSpy('prepTemplateNames'));
                $provide.value('prepSelDeal', jasmine.createSpy('prepSelDeal'));
                $provide.value('prepSelHighlights', jasmine.createSpy('prepSelHighlights'));
                $provide.value('prepSelTemplates', jasmine.createSpy('prepSelTemplates'));
                $provide.value('prepStandardD', { concat: Array.prototype.concat });
                $provide.value('prepEarlyBirdD', jasmine.createSpy('prepEarlyBirdD'));
                $provide.value('prepDealImages', jasmine.createSpy('prepDealImages'));
            });

        });
        
        beforeEach(inject(function(_DealService_) {
            DealService = _DealService_;
        }));

        it('should exist', function() {
            expect(DealService).toBeDefined();
        });

        it('should have the required attributes', function() {
            expect(DealService.getAll).toBeDefined();
            expect(DealService.search).toBeDefined();
            expect(DealService.lists).toBeDefined();
            expect(DealService.add).toBeDefined();
            expect(DealService.edit).toBeDefined();
            expect(DealService.delete).toBeDefined();
            expect(DealService.find).toBeDefined();
        });

        it('should get all deals', function() {
            DealService.getAll().then(function(result) {
                expect(result).toBeDefined();
            });
        });

        it('should add a deal', function() {
            var data = 
                {
                    name: "string",
                    link: "string",
                    description: "string",
                    price: 0,
                    amazon_rating: 0,
                    starts_at: "2017-05-16T12:17:42.868Z",
                    ends_at: "2017-05-16T12:17:42.868Z",
                    expiration_type: "string",
                    deal_type: "string",
                    status: "draft",
                    brand_id: "string",
                    discount_type: "standard_discount"
                }
            DealService.add(data).then(function(result) {
                expect(result).toBeDefined();
            });
        });

        it('should edit a deal', function() {
            var id = "1234567890";
            var data = 
                {
                    name: "string",
                    link: "string",
                    description: "string",
                    price: 0,
                    amazon_rating: 0,
                    starts_at: "2017-05-16T12:17:42.868Z",
                    ends_at: "2017-05-16T12:17:42.868Z",
                    expiration_type: "string",
                    deal_type: "string",
                    status: "draft",
                    brand_id: "string",
                    discount_type: "standard_discount",
                    form: {
                        file:[{file: "", description: ""}]
                    }                    
                };
            DealService.edit(id, data).then(function(result) {
                expect(result).toBeDefined();
            });
        });


        describe('Deal dashboard controller', function() {

            var scope, controller, httpBackend;

            beforeEach(inject(function($controller, $rootScope, $httpBackend) {

                scope = $rootScope.$new();
                httpBackend = $httpBackend;

                controller = $controller('DealController', {
                    $scope: scope,
                    $http: $httpBackend
                });
            }));

            it('should exist', function() {
                expect(controller).toBeDefined();
            });

        });

        describe('Deal add controller', function() {

            var scope, controller, httpBackend;

            beforeEach(inject(function($controller, $rootScope, $httpBackend) {

                scope = $rootScope.$new();
                httpBackend = $httpBackend;

                controller = $controller('DealAddController', {
                    $scope: scope,
                    $http: $httpBackend
                });
            }));

            it('should exist', function() {
                expect(controller).toBeDefined();
            });

        });

        describe('Deal edit controller', function() {

            var scope, controller, httpBackend;

            beforeEach(inject(function($controller, $rootScope, $httpBackend) {

                scope = $rootScope.$new();
                httpBackend = $httpBackend;

                controller = $controller('DealEditController', {
                    $scope: scope,
                    $http: $httpBackend
                });
            }));

            it('should exist', function() {
                expect(controller).toBeDefined();
            });

        });

        describe('Deal view controller', function() {

            var scope, controller, httpBackend;

            beforeEach(inject(function($controller, $rootScope, $httpBackend) {

                scope = $rootScope.$new();
                httpBackend = $httpBackend;

                controller = $controller('DealViewController', {
                    $scope: scope,
                    $http: $httpBackend
                });
            }));

            it('should exist', function() {
                expect(controller).toBeDefined();
            });

        });

    });
})();