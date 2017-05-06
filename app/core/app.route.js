(function() {
    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /login
        $urlRouterProvider.otherwise("/");

        //////STATES//////

        var auth = {
            name: "auth",
            url: "/",
            views: {
                "login": {
                    templateUrl: "./app/login/login.html",
                    controller: "LoginController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: loginStyleSheets
                    }
                }
            }
        };

        var forgot = {
            name: "forgot",
            url: "/forgot",
            views: {
                "login": {
                    templateUrl: "./app/login/forget.html",
                    controller: "ForgotController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: loginStyleSheets
                    }
                }
            }
        };

        var logout = {
            name: "logout",
            url: "/logout",
            views: {
                "login": {
                    templateUrl: "app/login/login.html",
                    controller: "LoginController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: loginStyleSheets,
                        doLogout: doLogout
                    }
                }
            }
        };


        var account_confirmation = {
            name: "account-confirmation",
            url: "/account-confirmation",
            views: {
                "login": {
                    templateUrl: "app/login/confirmation.html",
                    controller: "ConfirmationController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: loginStyleSheets,
                    }
                }
            }
        };

        //Dashboard routes
        var dashboard = {
            name: "dashboard",
            url: "/dashboard",
            views: {
                "main": {
                    templateUrl: "app/dashboard/dashboard.html",
                    controller: "DashboardController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: dashboardStyleSheets
                    }
                },
                //"nav": nav
            }
        };
        //END Dashboard Route

        //Brand routes
        var brand = {
            name: "dashboard.brand",
            url: "/brand",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/brand/brand.html",
                    controller: "BrandController",
                    controllerAs: "vm",
                    resolve: {
                        brandPrepService: brandPrepService
                    }
                },
                //"nav": nav
            }
        };

        var brandAdd = {
            name: "dashboard.brand.add",
            url: "/add",
            parent: brand,
            views: {
                "page_body": {
                    templateUrl: "app/brand/brand.add.html",
                    controller: "BrandAddController",
                    controllerAs: "vm"
                }
            }
        };

        var brandEdit = {
            name: "dashboard.brand.edit",
            url: "/edit/:id",
            parent: brand,
            views: {
                "page_body": {
                    templateUrl: "app/brand/brand.add.html",
                    controller: "BrandEditController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelBrand: prepSelBrand
                    }
                }
            }
        };

        var brandView = {
            name: "dashboard.brand.view",
            url: "/:id",
            parent: brand,
            views: {
                "page_body": {
                    templateUrl: "app/brand/brand.view.html",
                    controller: "BrandViewController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelBrand: prepSelBrand
                    }
                }
            }
        };
        //END Brand routes

        //Deal routes
        var deal = {
            name: "dashboard.deal",
            url: "/deal",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/deals/deal.html",
                    controller: "DealController",
                    controllerAs: "vm",
                    resolve: {
                        dealPrepService: dealPrepService
                    }
                },
                //"nav": nav
            }
        };

        var dealAdd = {
            name: "dashboard.deal.add",
            url: "/add",
            parent: deal,
            views: {
                "page_body": {
                    templateUrl: "app/deals/deal.add.html",
                    controller: "DealAddController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: dateTimeStyleSheets,
                        brandPrepService: brandPrepService,
                        prepTemplateNames: prepTemplateNames,
                        prepTemplateTypes: prepTemplateTypes
                    }
                }
            }
        };

        var dealEdit = {
            name: "dashboard.deal.edit",
            url: "/edit/:id",
            parent: deal,
            views: {
                "page_body": {
                    templateUrl: "app/deals/deal.add.html",
                    controller: "DealEditController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: dateTimeStyleSheets,
                        prepSelDeal: prepSelDeal,
                        brandPrepService: brandPrepService,
                        prepSelHighlights: prepSelHighlights,
                        prepSelTemplates: prepSelTemplates,
                        prepTemplateNames: prepTemplateNames,
                        prepTemplateTypes: prepTemplateTypes,
                        prepStandardD: prepStandardD,
                        prepEarlyBirdD: prepEarlyBirdD,
                        prepDealImages: prepDealImages
                    }
                }
            }
        };

        var dealView = {
            name: "dashboard.deal.view",
            url: "/:id",
            parent: deal,
            views: {
                "page_body": {
                    templateUrl: "app/deals/deal.view.html",
                    controller: "DealViewController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelDeal: prepSelDeal,
                        prepSelHighlights: prepSelHighlights,
                        prepSelTemplates: prepSelTemplates,
                        prepStandardD: prepStandardD,
                        prepEarlyBirdD: prepEarlyBirdD,
                        prepDealImages: prepDealImages
                    }
                }
            }
        };
        //END Deal routes

        //User routes
        var user = {
            name: "dashboard.user",
            url: "/user",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/user/user.html",
                    controller: "UserController",
                    controllerAs: "vm",
                    resolve: {
                        userPrepService: userPrepService
                    }
                },
                //"nav": nav
            }
        };

        var userAdd = {
            name: "dashboard.user.add",
            url: "/add",
            parent: user,
            views: {
                "page_body": {
                    templateUrl: "app/user/user.add.html",
                    controller: "UserAddController",
                    controllerAs: "vm",
                    resolve: {
                        //prepSelUser: prepSelUser
                    }
                }
            }
        };

        var userEdit = {
            name: "dashboard.user.edit",
            url: "/edit/:id",
            parent: user,
            views: {
                "page_body": {
                    templateUrl: "app/user/user.add.html",
                    controller: "UserEditController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelUser: prepSelUser
                    }
                }
            }
        };

        var userView = {
            name: "dashboard.user.view",
            url: "/view/:id",
            parent: user,
            views: {
                "page_body": {
                    templateUrl: "app/user/user.view.html",
                    controller: "UserViewController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelUser: prepSelUser
                    }
                }
            }
        };

        var userInfo = {
            name: "dashboard.account",
            url: "/account",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/user/user.info.html",
                    controller: "UserInfoController",
                    controllerAs: "vm",
                    resolve: {
                        prepCurUser: prepCurUser
                    }
                },
                //"nav": nav
            }
        };

        ////////////

        $stateProvider
            .state(auth)
            .state(forgot)
            .state(logout)
            .state(dashboard)
            .state(account_confirmation);
            .state(userInfo);
        // .state(deal)
        // .state(dealAdd)
        // .state(dealEdit)
        // .state(dealView)
        // .state(brand)
        // .state(brandAdd)
        // .state(brandEdit)
        // .state(brandView)
        // .state(user)
        // .state(userAdd)
        // .state(userEdit)
        // .state(userView);

        ////////////

        prepDealImages.$inject = ['DealService', '$stateParams'];
        /* @ngInject */
        function prepDealImages(DealService, $stateParams) {
            return DealService.getDealImages($stateParams.id);
        }

        prepStandardD.$inject = ['DealService', '$stateParams'];
        /* @ngInject */
        function prepStandardD(DealService, $stateParams) {
            return DealService.getStandardDiscounts($stateParams.id);
        }

        prepEarlyBirdD.$inject = ['DealService', '$stateParams'];
        /* @ngInject */
        function prepEarlyBirdD(DealService, $stateParams) {
            return DealService.getEarlyBirdDiscounts($stateParams.id);
        }

        prepSelTemplates.$inject = ['DealService', '$stateParams'];
        /* @ngInject */
        function prepSelTemplates(DealService, $stateParams) {
            return DealService.getTemplates($stateParams.id);
        }

        prepTemplateTypes.$inject = ['DealService'];
        /* @ngInject */
        function prepTemplateTypes(DealService) {
            return DealService.getTemplateTypes();
        }

        prepTemplateNames.$inject = ['DealService'];
        /* @ngInject */
        function prepTemplateNames(DealService) {
            return DealService.getTemplateNames();
        }

        prepSelHighlights.$inject = ['DealService', '$stateParams'];
        /* @ngInject */
        function prepSelHighlights(DealService, $stateParams) {
            return DealService.getHighlights($stateParams.id)
        }

        prepSelUser.$inject = ['$stateParams', 'UserService'];
        /* @ngInject */
        function prepSelUser($stateParams, UserService) {
            return UserService.findInList($stateParams.id);
        }

        userPrepService.$inject = ['UserService'];
        /* @ngInject */
        function userPrepService(UserService) {
            return UserService.getAll();
        }

        dateTimeStyleSheets.$inject = ['HelperService'];
        /* @ngInject */
        function dateTimeStyleSheets(HelperService) {
            var css = ['/templates/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                '/templates/assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                '/templates/assets/layouts/layout/css/layout.min.css',
                '/templates/assets/layouts/layout/css/themes/darkblue.min.css',
                '/templates/assets/layouts/layout/css/custom.min.css'
            ];
            HelperService.setCss(css);
        }

        loginStyleSheets.$inject = ['HelperService'];
        /* @ngInject */
        function loginStyleSheets(HelperService) {
            var css = ['/templates/assets/pages/css/login.min.css'];
            HelperService.setCss(css);
        }

        dashboardStyleSheets.$inject = ['HelperService'];
        /* @ngInject */
        function dashboardStyleSheets(HelperService) {
            var css = ['/templates/assets/layouts/layout/css/layout.min.css',
                '/templates/assets/layouts/layout/css/themes/darkblue.min.css',
                '/templates/assets/layouts/layout/css/custom.min.css'
            ];
            HelperService.setCss(css);
        }

        doLogout.$inject = ['AuthService'];
        /* @ngInject */
        function doLogout(AuthService) {
            AuthService.logout();
        }

        dealPrepService.$inject = ['DealService'];
        /* @ngInject */
        function dealPrepService(DealService) {
            return DealService.getAll();
        }

        brandPrepService.$inject = ['BrandService'];
        /* @ngInject */
        function brandPrepService(BrandService) {
            return BrandService.getAll();
        }

        prepSelBrand.$inject = ['$stateParams', 'BrandService'];
        /* @ngInject */
        function prepSelBrand($stateParams, BrandService) {
            return BrandService.find($stateParams.id);
        }

        prepCurUser.$inject = ['AuthService'];
        /* @ngInject */
        function prepCurUser(AuthService) {
            return AuthService.currentUser();
        }

        prepSelDeal.$inject = ['$stateParams', 'DealService'];
        /* @ngInject */
        function prepSelDeal($stateParams, DealService) {
            return DealService.find($stateParams.id);
        }
    }

})();
