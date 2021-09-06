var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  // Check if the clicked element was an image
  if (element.matches(".box")) {
    // Get the current value of the image's data-state attribute
    var state = element.getAttribute("data-state");

    if (state === "hidden") {
      element.textContent = element.dataset.number;      
      element.dataset.state = "visible";   

    } else {
      element.textContent = "";     
      element.dataset.state = "hidden";
      // element.setAttribute("data-set", "hidden");
    }
  }
});
