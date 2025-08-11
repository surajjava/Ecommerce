angular.module('myApp')
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    // --- 3-segment route (for things like detail pages) ---
    $routeProvider.when('/:module/:page/:id', {
      templateUrl: function(params) {
        return 'modules/' + params.module + '/' + params.page + '.template.html';
      },
      controller: function($scope) {}, // placeholder if needed
      resolve: {
        lazy: function($ocLazyLoad, $route) {
          var m = $route.current.params.module;
          var p = $route.current.params.page;
          return $ocLazyLoad.load([
            'modules/' + m + '/' + m + '.module.js',
            'modules/' + m + '/' + p + '.controller.js'
          ]);
        }
      }
    });

    // --- 2-segment route (normal pages) ---
    $routeProvider.when('/:module/:page', {
      templateUrl: function(params) {
        return 'modules/' + params.module + '/' + params.page + '.template.html';
      },
      resolve: {
        lazy: function($ocLazyLoad, $route) {
          var m = $route.current.params.module;
          var p = $route.current.params.page;
          return $ocLazyLoad.load([
            'modules/' + m + '/' + m + '.module.js',
            'modules/' + m + '/' + p + '.controller.js'
          ]);
        }
      }
    });

    // Default redirect
    $routeProvider.otherwise({ redirectTo: '/shop/list' });
  });
