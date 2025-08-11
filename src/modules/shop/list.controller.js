angular.module('myApp.shop')
  .controller('ListController', function(ProductService, CartService) {
    var vm = this;
    vm.loading = true;
    vm.products = [];
    vm.add = p => { CartService.add(p, 1);
    vm.cartCount = CartService.count(); };
    ProductService.list().then(items => vm.products = items)
      .finally(() => vm.loading = false);

    vm.cartCount = CartService.count();
  });
