//BUDGET CONTROLLER
var budgetController = (function() {
  //add code
})();

//UI CONTROLLER
var UIController = (function() {
  //Private variables
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    getInput: function() {
      //Using an Object to return all values at once
      return {
        //Will either be income or expense values
        type: document.querySelector(inputType).value,
        description: document.querySelector(inputDescription).value,
        value: document.querySelector(inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();
0;

//GLOBAL APP CONTROLLER
var controller = (function(budgetCrtrl, UICtrl) {
  var DOM = UICtrl.getDOMstrings();
  var ctrlAddItem = function() {
    //1. Get input data
    var input = UICtrl.getInput();
    console.log(input);
    //2. Add item to budget controller
    //3. Add item to UI
    //4. Calculate budget
    //5. Display the budget on UI
  };

  //Listen to keyboard Enter event
  document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
  document.addEventListener("keypress", function(event) {
    //Keycode for Return key
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
