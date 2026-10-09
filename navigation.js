const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// Initializing narrow state by unhiding button and creating the class .js
document.documentElement.classList.add("js");
button.hidden = false;

// Initializing list as closed
list.dataset.open = "false";
// TODO 2: write one named function that keeps aria-expanded and visible state synchronized.

// Creating the function setMenu which is passed a parameter
function setMenu(open) {
    //Setting the button attribute for aria-expanded to whatever value is passed
    button.setAttribute("aria-expanded", String(open));
    //Setting the list's data-open state to the same value as button
  list.dataset.open = String(open);
}
// TODO 3: use the native button's click event to toggle the state.
// Adding event listener for click on button
button.addEventListener("click", () => {
    // Running the setMenu function on click to set the attributes
  setMenu(button.getAttribute("aria-expanded") !== "true");
});
// Event listener for a key press
document.addEventListener("keydown", (event) => {
    //Checking for keypress as escape key AND for button attribute to equal true
  if (event.key === "Escape" &&
      button.getAttribute("aria-expanded") === "true") {
        //Closing the menu
    setMenu(false);
        //Returning focus
    button.focus();
  }
});
