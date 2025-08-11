angular.module('myApp')
  .component('appFooter', {
    controller: function() { this.year = new Date().getFullYear(); },
    templateUrl: 'components/footer/footer.html'
  });