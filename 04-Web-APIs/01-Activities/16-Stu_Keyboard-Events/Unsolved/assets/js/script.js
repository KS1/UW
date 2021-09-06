function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#code").innerHTML = event.code ;
  document.querySelector("#code").innerHTML = event.key ;
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction(event) {  
  document.querySelector("#status").innerHTML = "KEYUP Event";  
}


document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
// Keydown event
document.addEventListener("keydown", keydownAction);

