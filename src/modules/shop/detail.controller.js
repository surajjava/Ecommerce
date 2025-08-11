angular.module('myApp.shop')
  .controller('DetailController', function($routeParams, ProductService, CartService) {
    var vm = this;
    vm.loading = true;
    vm.qty = 1;

    ProductService.getById($routeParams.id).then(p => vm.product = p)
      .finally(() => vm.loading = false);

    vm.add = () => vm.product && CartService.add(vm.product, vm.qty);
  });
