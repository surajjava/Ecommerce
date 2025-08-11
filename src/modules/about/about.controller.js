angular.module('myApp.about')
  .controller('AboutController', function() {
    var vm = this;
    vm.info = 'About page (lazy-loaded)';
  });