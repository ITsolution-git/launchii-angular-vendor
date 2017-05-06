(function() {
    'use strict';

    describe('Users service', function() {
        var $controller, UserService;

        beforeEach(angular.mock.module('ui.router'));
        beforeEach(angular.mock.module('app.users'));

        beforeEach(function() {

            module(function($provide) {
                $provide.value('CONST', jasmine.createSpy('CONST'));
                $provide.value('HelperService', { getPrevState: jasmine.createSpy('getPrevState') });
                // $provide.value('userPrepService', jasmine.createSpy('userPrepService'));
                // $provide.value('prepSelUser', jasmine.createSpy('prepSelUser'));
                $provide.value('prepCurUser', jasmine.createSpy('prepCurUser'));
            });

        });

        beforeEach(inject(function(_UserService_) {
            UserService = _UserService_;
        }));

        it('should exist', function() {
            expect(UserService).toBeDefined();
        });

        it('should have the required attributes', function() {
            expect(UserService.editMe).toBeDefined();
        });

        it('should get vendor information', function() {
            var id='123456789';
            var req = {
                name: 'Vendor Name',
                email: 'vendor@example.com'
            }

            UserService.editMe(id, req).then(function(result) {
                expect(result).toBeDefined();
            });
        });

        describe('Account edit controller', function() {

            var scope, controller, httpBackend;

            beforeEach(inject(function($controller, $rootScope, $httpBackend) {

                scope = $rootScope.$new();
                httpBackend = $httpBackend;

                controller = $controller('UserInfoController', {
                    $scope: scope,
                    $http: $httpBackend
                });
            }));

            it('should exist', function() {
                expect(controller).toBeDefined();
            });

        });

        // describe('User dashboard controller', function() {

        //     var scope, controller, httpBackend;

        //     beforeEach(inject(function($controller, $rootScope, $httpBackend) {

        //         scope = $rootScope.$new();
        //         httpBackend = $httpBackend;

        //         controller = $controller('UserController', {
        //             $scope: scope,
        //             $http: $httpBackend
        //         });
        //     }));

        //     it('should exist', function() {
        //         expect(controller).toBeDefined();
        //     });

        // });

        // describe('User edit controller', function() {

        //     var scope, controller, httpBackend;

        //     beforeEach(inject(function($controller, $rootScope, $httpBackend) {

        //         scope = $rootScope.$new();
        //         httpBackend = $httpBackend;

        //         controller = $controller('UserEditController', {
        //             $scope: scope,
        //             $http: $httpBackend
        //         });
        //     }));

        //     it('should exist', function() {
        //         expect(controller).toBeDefined();
        //     });

        // });

        // describe('User view controller', function() {

        //     var scope, controller, httpBackend;

        //     beforeEach(inject(function($controller, $rootScope, $httpBackend) {

        //         scope = $rootScope.$new();
        //         httpBackend = $httpBackend;

        //         controller = $controller('UserViewController', {
        //             $scope: scope,
        //             $http: $httpBackend
        //         });
        //     }));

        //     it('should exist', function() {
        //         expect(controller).toBeDefined();
        //     });

        // });
    });
})();