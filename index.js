// Write your code here...
let dishImage = document.querySelector("#dish-image");
let dishName = document.querySelector("#dish-name");
let dishDescription = document.querySelector("#dish-description");
let dishPrice = document.querySelector("#dish-price");
//fetch menu itmes
fetch("http://localhost:3000/menu")
.then(res => res.json())
//create a span element for each menu item that contains the name of the item
.then(menu => {
  menu.forEach(item => {
    let menuItem = document.createElement("span")
    let menu = document.querySelector('#menu-items')
    menuItem.textContent = item.name
    //add element to #menu-items div
    menu.append(menuItem);
    //when the user clicks on the menu items on the left, they should see all the detaisl for that specific menut item
    menuItem.addEventListener("click", (e) => {
      renderMenuItem(item)
    })
  }),
  //the user should be able to add the menu items to their cart.
  addEventListener("submit", (eTwo) => {
    eTwo.preventDefault();
    console.log("Hello!")
  }),
  //when the page loads display the first menu item.
  renderMenuItem(menu[0])
})

function renderMenuItem(object) {
dishImage.src = object.image
  dishName.textContent = object.name
  dishDescription.textContent = object.description
  dishPrice.textContent = object.price
}


//the user should be able to add the menu items to their cart.
//when the user presses the 'Add to cart' button, that number should be added to however many are currently in the cart
