function fixCart() {
    // Get the cart items
    var cartItems = document.getElementById("cart-items").getElementsByTagName("li");
  
    // Loop through each cart item
    for (var i = 0; i < cartItems.length; i++) {
      var itemText = cartItems[i].innerText;
      var quantity = parseInt(itemText.split(":")[1].trim());
      
      // Double the quantity
      var newQuantity = quantity * 2;
      
      // Update the item text with the new quantity
      cartItems[i].innerText = itemText.split(":")[0] + ": " + newQuantity;
    }
  }
  
// function fixCart() {
//     let cartItems = document.getElementById("cart-items").getElementsByTagName("li")

//     for (let i = 0; i < cartItems.lengt; i++) {
//         let itemText = cartItems[i].innerText;
//         let quantity = parseInt(itemText.split(":")[1].trim());

//         let newQuantity = quantity * 2;

//         cartItems[i].innerText = itemText.split(":")[0] + ":" + newQuantity;
//     }
// }