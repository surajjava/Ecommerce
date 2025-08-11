angular.module('myApp')
  .service('ProductService', function($http) {
    this.list = () => $http.get('data/products.json').then(r => r.data);
    this.getById = id => this.list().then(xs => xs.find(p => String(p.id) === String(id)));
  });
