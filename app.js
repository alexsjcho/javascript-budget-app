//Create IFFE to keep data private within local scope
var budgetController = (function() {
  var x = 23;

  //Private add function
  var add = function(a) {
    return x + a;
  };
  return {
    publicTest: function(b) {
      console.log(add);
    }
  };
})();

//UI Controller
var UIController = (function() {
  //Some code
})();

//App Controller to connect the other modules

var controller = (function(budgetCrtrl, UICtrl) {
  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  };
})(budgetController, UIController);
