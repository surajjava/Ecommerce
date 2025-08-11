angular.module('myApp.checkout')
  .controller('CheckoutAddressController', function($location) {
    var vm = this;
    vm.form = {};
    vm.next = () => $location.path('/checkout/payment');
  });
