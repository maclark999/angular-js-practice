//wrapping javascript in closure is good  practice
(function(){
// angular is telling what we are using, 'store' is the module name
var app = angular.module('store', []);

app.controller('StoreController', function() {
  //set the gem to a property of the controller
  this.product = gem;
});

var gem = {
  name: 'Dodecahedron',
  price: 2.95,
  description: 'mmm, ten sides'
};
})();
