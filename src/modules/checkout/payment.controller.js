angular.module('myApp.checkout')
  .controller('CheckoutPaymentController', function() {
    var vm = this;
    vm.pay = () => alert('This is a demo — integrate a real gateway here.');
  });
