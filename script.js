var draggableDiv = document.getElementById("myDraggableDiv");
var offsetX, offsetY;

function dragMouseDown(e) {
  e.preventDefault();
  e.stopPropagation();

  offsetX = e.clientX - draggableDiv.offsetLeft;
  offsetY = e.clientY - draggableDiv.offsetTop;

  document.addEventListener("mousemove", elementDrag);
  document.addEventListener("mouseup", closeDragElement);

  // Prevent text selection during drag
  document.onselectstart = function () {
    return false;
  };
}

// Function to handle the dragging of the element
function elementDrag(e) {
  e.preventDefault();

  // Calculate the new position of the element
  var newX = e.clientX - offsetX;
  var newY = e.clientY - offsetY;

  // Set the new position
  draggableDiv.style.left = newX + "px";
  draggableDiv.style.top = newY + "px";
}

// Function to handle the mouseup event
function closeDragElement() {
  // Remove the event listeners when dragging is done
  document.removeEventListener("mousemove", elementDrag);
  document.removeEventListener("mouseup", closeDragElement);
}

// Attach the mousedown event listener to start dragging
draggableDiv.addEventListener("mousedown", dragMouseDown);