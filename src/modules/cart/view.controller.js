angular.module('myApp.cart')
  .controller('CartViewController', function(CartService) {
    var vm = this;
    const load = () => { vm.items = CartService.items(); vm.total = CartService.total(); };
    vm.inc = it => { CartService.update(it.id, it.qty + 1); load(); };
    vm.dec = it => { CartService.update(it.id, Math.max(1, it.qty - 1)); load(); };
    vm.remove = it => { CartService.remove(it.id); load(); };
    vm.clear = () => { CartService.clear(); load(); };
    load();
  });
