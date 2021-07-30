const card = document.querySelector(".card"); //selects the class "card"

card.addEventListener("click", () => {
  card.classList.toggle("is-flipped");
});

//Create a callback function which sets the card’s class equal to a new CSS class “is-flipped” which toggles on a click. As the name suggests, 
//the .toggle() method allows us to switch between classes — in the parentheses we pass in the name of the class that we want to toggle.