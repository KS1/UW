var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's 
// `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function handleFormSubmit(event) {
    // Prevent the default behavior
    event.preventDefault();
  
    var shoppingItem = $('#shopping-input').val();

    if(!shoppingItem){
        return;
    }

    shoppingListEl.append('li')
  }

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
