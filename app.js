//BUDGET CONTROLLER MODULE
var budgetController = (function() {
  //Private variables and functions
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };
  return {
    addItem: function(type, des, val) {
      //Declare all variables for use
      var newItem, ID;

      //Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      //Create new item based on 'income' or 'expense' type
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      //Push items into our data structure
      data.allItems[type].push(newItem);

      //Return the new element
      return newItem;
    }
  };
})();

//UI CONTROLLER MODULE
var UIController = (function() {
  //Private variables and functions
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

//GLOBAL APP CONTROLLER MODULE
var controller = (function(budgetCrtrl, UICtrl) {
  //Private variables and functions
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function(event) {
      //Keycode for Return key
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    //Declare all variables for use
    var input, newItem;

    //1. Get input data
    input = UICtrl.getInput();
    //2. Add item to budget controller
    newItem = budgetCrtrl.addItem(input.type, input.description, input.value);
    //3. Add item to UI
    //4. Calculate budget
    //5. Display the budget on UI
  };

  return {
    init: function() {
      setupEventListeners();
    }
  };

  //Listen to keyboard Enter event
})(budgetController, UIController);

controller.init();
