// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo.style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
function increaseWidth(){
  itemOne.style.width="410px"
}
function changeBackground(){
  itemTwo.style.backgroundColor="green"
}
function changeText(){
  itemThree.innerHTML='The mouse has left the element';
}
function showItem(){
  itemFive.style.display="block";
}
// itemOne that will trigger the increaseWidth() function when the mouse hovers on it.
itemOne.addEventListener("mouseover",increaseWidth)
// changeBackground() function we just created as an event handler for itemTwo that will be triggered when the mouse is released over the element!
itemTwo.addEventListener("mouseup",changeBackground)
//  itemThree that will fire changeText() function when the mouse leaves the element.
itemThree.addEventListener("mouseout",changeText)
// itemFour that triggers the showItem() function when the mouse isE pressed down on the element.
itemFour.addEventListener("mousedown",showItem)