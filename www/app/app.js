(function(){
  'use strict';
  // Ionic Starter App
    // angular.module is a global place for creating, registering and retrieving Angular modules
    // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
    // the 2nd parameter is an array of 'requires'
    // 'starter.services' is found in services.js
    // 'starter.controllers' is found in controllers.js
    angular.module('birdApp', [
          //LR - I tried to add the controllers here as a depencency, but didn't need to!
          //The assigning happens in the controller js files, and they were being overwritten by the controllers here.
            'ionic'
            ])
            .run(runBlock)
            .config(configBlock);

      runBlock.$inject= ['$ionicPlatform'];

      function runBlock($ionicPlatform) {
          $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
              // org.apache.cordova.statusbar required
              StatusBar.styleDefault();
            }
          });
        }
    configBlock.$inject=['$stateProvider', '$urlRouterProvider'];
    
    function configBlock($stateProvider, $urlRouterProvider) {

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

      // // setup an abstract state for the tabs directive
      // // .state('home', {
      // //   url: "/",
      // //   abstract: true,
      // //   templateUrl: "app/sorter/sorter-color.html"
      // // })

      // // Each tab has its own nav history stack:
      .state('home', {
        // abstract: true,
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'SorterCtrl as vm'
      })
      .state('home.sorter', {
        url: '/sorter-color',
        views: { 
          '': { 
          templateUrl: 'app/sorter/sorter-color.html',
          controller: 'SorterColorCtrl as vm'
          }
        }
      })
      .state('home.sortersize', {
        url: '/sorter-size',
        views: { 
          '': { 
              templateUrl: 'app/sorter/sorter-size.html',
              controller: 'SorterSizeCtrl as vm'
          }
        }
      })
      .state('home.sorterbehavior', {
        url: '/sorter-behavior',
        views: { 
          '': { 
              templateUrl: 'app/sorter/sorter-behavior.html',
              controller: 'SorterBehaviorCtrl as vm'
          }
        }
      })
      .state('home.sorterresults', {
        url: '/sorter-results',
        views: { 
          '': { 
              templateUrl: 'app/sorter/sorter-results.html',
              controller: 'SorterResultsCtrl as vm'
          }
        }
      })       
      .state('home.allbirds', {
        url: '/all-birds',
        views: {
            'allbirds': {
              templateUrl: 'app/allBirds/allbirds.html',
              controller: 'AllBirdsCtrl as vm'
            }
          }
      })
      //https://github.com/rclayton/NG-Communicate-Ctrls/tree/master/router
      //https://rclayton.silvrback.com/passing-state-via-routes
       .state('home.birddetail', {
          url: '/birddetail/:name:id',
          resolve: {
            name: function($stateParams) {
               return $stateParams.name;
              },
            id: function($stateParams) {
              return $stateParams.id;
            }
          },
          views: {
              'allbirds':{
                templateUrl: 'app/birddetail/bird-detail.html',
                controller: 'BirdDetailCtrl as vm'
              }
            }
      });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/home/all-birds');

    }
})();