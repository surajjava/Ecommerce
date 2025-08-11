(function() {
  'use strict';
  angular.module('myApp.Product')
    .controller('ProductsController', function(ProductService) {
      var vm = this;
      vm.search = '';
      vm.category = 'all';
      vm.sort = 'title';
      vm.loading = true;

      ProductService.list().then(function(items) {
        vm.all = items;
      }).finally(function(){ vm.loading = false; });

      vm.categories = function() {
        if (!vm.all) return [];
        var set = new Set(vm.all.map(function(p){ return p.category; }));
        return ['all'].concat(Array.from(set));
      };

      vm.filtered = function() {
        if (!vm.all) return [];
        var s = (vm.search || '').toLowerCase();
        var list = vm.all.filter(function(p) {
          var okCat = vm.category === 'all' || p.category === vm.category;
          var okText = !s || (p.title.toLowerCase().includes(s) || p.description.toLowerCase().includes(s));
          return okCat && okText;
        });
        if (!list.length) return list; // show "no products" in template
        return list.sort(function(a,b) {
          if (vm.sort === 'price-asc') return a.price - b.price;
          if (vm.sort === 'price-desc') return b.price - a.price;
          return a.title.localeCompare(b.title);
        });
      };
    });
})();
