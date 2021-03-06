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

        var account_password_reset = {
            name: "account-password-reset",
            url: "/account-password-reset",
            views: {
                "login": {
                    templateUrl: "app/login/passwordreset.html",
                    controller: "PasswordResetController",
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
                    }
                },
                //"nav": nav
            }
        };

        var brandArchived = {
            name: "dashboard.brand.archived",
            url: "/brand-archived",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/brand/brand.archived.html",
                    controller: "BrandArchivedController",
                    controllerAs: "vm",
                    resolve: {
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
                        prepDealType: prepDealTypeStandard,
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
                        prepDealType: prepDealTypeStandard,
                        brandPrepService: brandPrepService,
                        categoryPrepService: categoryPrepService,
                        prepUpsellDeals: prepUpsellDeals
                    }
                }
            }
        };

        var dealApproved = {
            name: "dashboard.deal.approved",
            url: "/deal-approved",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/deals/deal.approved.html",
                    controller: "DealApprovedController",
                    controllerAs: "vm",
                    resolve: {
                        prepDealType: prepDealTypeStandard,
                    }
                },
                //"nav": nav
            }
        };

        var dealArchived = {
            name: "dashboard.deal.archived",
            url: "/deal-archived",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/deals/deal.archived.html",
                    controller: "DealArchivedController",
                    controllerAs: "vm",
                    resolve: {
                        prepDealType: prepDealTypeStandard
                    }
                },
                //"nav": nav
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
                        prepDealType: prepDealTypeStandard,
                        prepSelDeal: prepSelDeal,
                        brandPrepService: brandPrepService,
                        categoryPrepService: categoryPrepService,
                        prepSelVariants: prepSelVariants,
                        prepActiveStandardD: prepActiveStandardD,
                        prepDealImages: prepDealImages,
                        prepDealVideos: prepDealVideos,
                        prepUpsellDeals: prepUpsellDeals
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
                        prepActiveStandardD: prepActiveStandardD,
                        prepDealImages: prepDealImages,
                        prepDealVideos: prepDealVideos
                    }
                }
            }
        };
        //END Deal routes

        //Upsell routes
        var upsell = {
            name: "dashboard.upsell",
            url: "/upsell",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/deals/deal.html",
                    controller: "DealController",
                    controllerAs: "vm",
                    resolve: {
                        prepDealType: prepDealTypeUpsell,
                    }
                },
            }
        };

        var upsellApproved = {
            name: "dashboard.upsell.approved",
            url: "/upsell-approved",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/deals/deal.approved.html",
                    controller: "DealApprovedController",
                    controllerAs: "vm",
                    resolve: {
                        prepDealType: prepDealTypeUpsell,
                    }
                },
                //"nav": nav
            }
        };

        var upsellAdd = {
            name: "dashboard.upsell.add",
            url: "/add",
            parent: upsell,
            views: {
                "page_body": {
                    templateUrl: "app/deals/deal.add.html",
                    controller: "DealAddController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: dateTimeStyleSheets,
                        prepDealType: prepDealTypeUpsell,
                        brandPrepService: brandPrepService,
                        categoryPrepService: categoryPrepService,
                        prepTemplateNames: prepTemplateNames,
                        prepTemplateTypes: prepTemplateTypes,
                        prepUpsellDeals: prepUpsellDeals
                    }
                }
            }
        };

        var upsellEdit = {
            name: "dashboard.upsell.edit",
            url: "/edit/:id",
            parent: upsell,
            views: {
                "page_body": {
                    templateUrl: "app/deals/deal.add.html",
                    controller: "DealEditController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: dateTimeStyleSheets,
                        prepDealType: prepDealTypeUpsell,
                        prepSelDeal: prepSelDeal,
                        brandPrepService: brandPrepService,
                        categoryPrepService: categoryPrepService,
                        prepSelVariants: prepSelVariants,
                        prepSelTemplates: prepSelTemplates,
                        prepTemplateNames: prepTemplateNames,
                        prepTemplateTypes: prepTemplateTypes,
                        prepActiveStandardD: prepActiveStandardD,
                        prepDealImages: prepDealImages,
                        prepDealVideos: prepDealVideos,
                        prepUpsellDeals: prepUpsellDeals
                    }
                }
            }
        };

        var upsellView = {
            name: "dashboard.upsell.view",
            url: "/:id",
            parent: upsell,
            views: {
                "page_body": {
                    templateUrl: "app/deals/deal.view.html",
                    controller: "DealViewController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelDeal: prepSelDeal,
                        prepSelTemplates: prepSelTemplates,
                        prepActiveStandardD: prepActiveStandardD,
                        prepDealImages: prepDealImages,
                        prepDealVideos: prepDealVideos
                    }
                }
            }
        };
        //END Upsell routes

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


        //RocketDeal routes
        var rocketDeal = {
            name: "dashboard.rocketDeal",
            url: "/rocket-deal",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/rocket_deals/rocket_deal.html",
                    controller: "RocketDealController",
                    controllerAs: "vm",
                    resolve: {
                    }
                },
            }
        };

        var rocketDealApproved = {
            name: "dashboard.rocketDeal.approved",
            url: "/rocket-deal-approved",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/rocket_deals/rocket_deal.approved.html",
                    controller: "RocketDealApprovedController",
                    controllerAs: "vm",
                    resolve: {
                    }
                },
            }
        };

        var rocketDealFinished = {
            name: "dashboard.rocketDeal.finished",
            url: "/rocket-deal-finished",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/rocket_deals/rocket_deal.finished.html",
                    controller: "RocketDealFinishedController",
                    controllerAs: "vm",
                    resolve: {
                    }
                },
            }
        };

        var rocketDealAdd = {
            name: "dashboard.rocketDeal.add",
            url: "/add",
            parent: rocketDeal,
            views: {
                "page_body": {
                    templateUrl: "app/rocket_deals/rocket_deal.add.html",
                    controller: "RocketDealAddController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: dateTimeStyleSheets,
                        dealPrepService: dealPrepService
                    }
                }
            }
        };

        var rocketDealEdit = {
            name: "dashboard.rocketDeal.edit",
            url: "/edit/:id",
            parent: rocketDeal,
            views: {
                "page_body": {
                    templateUrl: "app/rocket_deals/rocket_deal.edit.html",
                    controller: "RocketDealEditController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelRocketDeal: prepSelRocketDeal
                    }
                }
            }
        };
        //END RocketDeal routes

        ////////////

        $stateProvider
            .state(auth)
            .state(forgot)
            .state(logout)
            .state(dashboard)
            .state(account_confirmation)
            .state(account_password_reset)
            .state(userInfo)
            .state(brand)
            .state(brandArchived)
            .state(brandAdd)
            .state(brandEdit)
            .state(brandView)
            .state(deal)
            .state(dealAdd)
            .state(dealApproved)
            .state(dealArchived)
            .state(dealEdit)
            .state(dealView)
            .state(upsell)
            .state(upsellApproved)
            .state(upsellAdd)
            .state(upsellEdit)
            .state(upsellView)
            .state(rocketDeal)
            .state(rocketDealApproved)
            .state(rocketDealFinished)
            .state(rocketDealAdd)
            .state(rocketDealEdit);
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

        prepActiveStandardD.$inject = ['DealService', '$stateParams'];
        /* @ngInject */
        function prepActiveStandardD(DealService, $stateParams) {
            return DealService.getActiveStandardDiscounts($stateParams.id);
        }

        prepSelVariants.$inject = ['DealService', '$stateParams'];
        /* @ngInject */
        function prepSelVariants(DealService, $stateParams) {
            return DealService.getVariants($stateParams.id);
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
            var css = ['/templates/assets/layouts/layout/css/layout.min.css',
                '/templates/assets/layouts/layout/css/themes/darkblue.min.css',
                '/templates/assets/layouts/layout/css/chosen-bootstrap.css'
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
                '/templates/assets/layouts/layout/css/themes/darkblue.min.css'
            ];
            HelperService.setCss(css);
        }

        doLogout.$inject = ['AuthService'];
        /* @ngInject */
        function doLogout(AuthService) {
            AuthService.logout();
        }

        brandPrepService.$inject = ['BrandService'];
        /* @ngInject */
        function brandPrepService(BrandService) {
            return BrandService.getAll();
        }

        prepSelBrand.$inject = ['$stateParams', 'BrandService'];
        /* @ngInject */
        function prepSelBrand($stateParams, BrandService) {
            return BrandService.getById($stateParams.id);
        }

        prepCurUser.$inject = ['AuthService'];
        /* @ngInject */
        function prepCurUser(AuthService) {
            return AuthService.currentUser();
        }

        prepSelDeal.$inject = ['$stateParams', 'DealService'];
        /* @ngInject */
        function prepSelDeal($stateParams, DealService) {
            return DealService.getById($stateParams.id);
        }

        categoryPrepService.$inject = ['CategoryService'];
        /* @ngInject */
        function categoryPrepService(CategoryService) {
            return CategoryService.getAll();
        }

        prepUpsellDeals.$inject = ['DealService'];
        /* @ngInject */
        function prepUpsellDeals(DealService) {
            return DealService.getUpsellDeals();
        }

        prepDealVideos.$inject = ['DealService', '$stateParams'];
        /* @ngInject */
        function prepDealVideos(DealService, $stateParams) {
            return DealService.getDealVideos($stateParams.id);
        }

        /* @ngInject */
        function prepDealTypeStandard() {
            return 'standard';
        }

        /* @ngInject */
        function prepDealTypeUpsell() {
            return 'upsell';
        }

        prepSelRocketDeal.$inject = ['$stateParams', 'RocketDealService'];
        /* @ngInject */
        function prepSelRocketDeal($stateParams, RocketDealService) {
            return RocketDealService.getById($stateParams.id);
        }

        dealPrepService.$inject = ['DealService'];
        /* @ngInject */
        function dealPrepService(DealService) {
            return DealService.getAll();
        }
    }

})();
