//BUDGET CONTROLLER
var budgetController = (function() {
  //add code
})();

//UI CONTROLLER
var UIController = (function() {
  //Some code
})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCrtrl, UICtrl) {
  var ctrlAddItem = function() {
    //1. Get input data
    //2. Add item to budget controller
    //3. Add item to UI
    //4. Calculate budget
    //5. Display the budget on UI
  };

  //Listen to keyboard Enter event
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);
  document.addEventListener("keypress", function(event) {
    //Keycode for Return key
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
