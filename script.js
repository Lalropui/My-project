// script.js

// Function to add items to the cart
function addToCart(name, price) {
    // Retrieve cart items from local storage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Add the new item to the cart
    cartItems.push({ name: name, price: price });
    
    // Save the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Display a confirmation message
    alert('Item added to cart!');
    
    // Redirect the user to the cart page
    window.location.href = 'cart.html';
}

// Function to display cart items on the cart page
function displayCartItems() {
    // Retrieve cart items from local storage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Select the container for cart items
    let cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = '';

    // Loop through each item in the cart
    cartItems.forEach(function(item, index) {
        // Create a new element for the item
        let itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        // Populate the item element with HTML
        itemElement.innerHTML = `
            <img src="img/${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
            </div>
            <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
        `;

        // Append the item element to the cart container
        cartContainer.appendChild(itemElement);
    });
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Retrieve cart items from local storage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Remove the item at the specified index
    cartItems.splice(index, 1);
    
    // Save the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Redisplay the cart items
    displayCartItems();
}

// Event listener to display cart items when the cart page loads
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
    
    // Add event listener to the checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.addEventListener('click', function() {
        alert('Redirecting to checkout page...');
        window.location.href = 'checkout.html'; // Redirect to the checkout page
        
  });
});
