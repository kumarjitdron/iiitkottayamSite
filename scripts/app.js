angular.module("app", ["ngRoute", "ngAnimate", "ngSanitize", "oc.lazyLoad", "ngProgress"])
    .config(function($routeProvider) {
        $routeProvider.caseInsensitiveMatch = true;
        $routeProvider
            .when("/home", {
                title: "Welcome to IIIT Kottayam",
                templateUrl: function() {
                    return "views/home.html?time=" + (new Date)
                },
                controller: "homeController",
                controllerAs: "homeCtrl",
                resolve: {
                    homeCtrl: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'homeCtrl',
                            files: ['scripts/controllers/home.ctrl.js?time=' + (new Date)]
                        })
                    }
                }
            })
            .when("/admission", {
                templateUrl : "admission.html"
              })
            .when("/phd_home", {
                templateUrl : "phd.html"
              })
            .when("/btech_ai_home", {
                templateUrl : "ai.html"
              })
            .when("/btech_cs_home", {
                templateUrl : "cs.html"
              })
            
            .when("/btech_ec_home", {
                templateUrl : "btech_ec_home.html"
              })
            .when("/institute", {
                templateUrl : "institute.html"
              })
              .when("/btech_cyber_home", {
                templateUrl : "btech_cyber_home.html"
              })
            .otherwise({
                redirectTo: "/home"
            })
    })
    .run(function($rootScope, $location, $window, $timeout, $route, ngProgressFactory) {
        $rootScope.progressbar = ngProgressFactory.createInstance();
        var path = function() {
            return $location.path();
        };
        var reload = false;
        $rootScope.tabDelay = 10;
        $rootScope.$on("$routeChangeStart", function() {
            if (reload == true) {
                $rootScope.progressbar.setColor('#c51313');
                $rootScope.progressbar.set('20');
                $rootScope.progressbar.stop();
            } else {
                $rootScope.progressbar.setColor('#38b247');
                $rootScope.progressbar.start();
                reload = false;
            }
        })
        $rootScope.$on("$routeChangeError", function() {
            $timeout(function() {
                $route.reload();
                reload = true;
            }, 2000);
            $rootScope.progressbar.setColor('#c51313');
            $rootScope.progressbar.set('20');
            $rootScope.progressbar.stop();
        })
        $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
            reload = false;
            $rootScope.progressbar.setColor('#38b247');
            $rootScope.progressbar.complete();
            $('html, body').animate({
                scrollTop: '0px'
            }, 0);
            if (current.hasOwnProperty('$$route')) {
                $rootScope.title = current.$$route.title;
            }
            var page = $location.$$url;
            page = page.toString();
            $window.ga('set', 'page', page);
            $window.ga('send', 'pageview');
        });
        $rootScope.initializeTabs = function() {
            var ele = $('#tabs');
            if (typeof ele !== undefined) {
                var mc = new Hammer.Manager(document.getElementById('tabs'), {
                    recognizers: [
                        [Hammer.Swipe, {
                            direction: Hammer.DIRECTION_HORIZONTAL
                        }]
                    ]
                });
                mc.set({
                    event: 'swipe',
                    threshold: 0,
                    velocity: 0.01
                });
                if (Math.ceil(ele.outerWidth()) < ele.prop('scrollWidth')) {
                    //displaying arrowing
                    $('.tabs-scroll').css('display', 'block'); //desktop arrows
                    mc.on("swipeleft", function() { //mobile swipe
                        ele.animate({
                            scrollLeft: '+=150'
                        }, 200, 'easeInOutQuad');
                    })
                    mc.on("swiperight", function() {
                        ele.animate({
                            scrollLeft: '-=150'
                        }, 200, 'easeInOutQuad');
                    })
                    //auto-scroll to correct position on selecting a tab
                    ele.tabs({
                        onShow: function(tab) {
                            var relativeX = ele.offset().left - tab.offset().left;
                        }
                    });
                } else {
                    $('.tabs-scroll').css('display', 'none');
                    mc.destroy();
                }
            }
        }
        $rootScope.scrollLeft = function() {
            var ele = $('#tabs');
            ele.animate({
                scrollLeft: '-=150'
            }, 200, 'easeInOutQuad');
        }
        $rootScope.scrollRight = function() {
            var ele = $('#tabs');
            ele.animate({
                scrollLeft: '+=150'
            }, 200, 'easeInOutQuad');
        }
    })