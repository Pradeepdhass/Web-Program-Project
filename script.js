//--------------------visibility of the cart--------------//

var sidebarVisible = false;
    // Function to toggle sidebar visibility
    function sidebar() {
        var cart = document.getElementById("sidebar");
        if (!sidebarVisible) {
            cart.style.display = "block";
            sidebarVisible = true;
        } else {
            cart.style.display = "none";
            sidebarVisible = false;
        }
    }

    // Function to check if the sidebar is open
    function isSidebarOpen() {
        return sidebarVisible;
    }

    // Event listener to hide sidebar when clicking outside
    document.body.addEventListener("click", function(event) {
        var cart = document.getElementById("sidebar");
        var target = event.target;
        if (!cart.contains(target) && isSidebarOpen()) {
            cart.style.display = "none";
            sidebarVisible = false;
        }
    });

//---------------function to addto cart----------------//

        function addToCart(itemName, amount) {
            var cart = document.getElementById("sidebar");
            var grandTotal = parseFloat(document.getElementById("grandTotal").textContent.split("₹")[1]);
            var existingItem = cart.querySelector("p[data-item='" + itemName + "']");
            
            if (existingItem) {
                var quantity = parseInt(existingItem.getAttribute("data-quantity")) + 1;
                var totalAmount = parseFloat(existingItem.getAttribute("data-amount")) + amount;
                existingItem.setAttribute("data-quantity", quantity);
                existingItem.setAttribute("data-amount", totalAmount);
                existingItem.textContent = itemName + " (x" + quantity + ") - ₹" + totalAmount.toFixed(2);
            } else {
              
                var newItem = document.createElement("p");
                var totalAmount = amount;
                newItem.textContent = itemName + " (x1) - ₹" + totalAmount.toFixed(2);
                newItem.setAttribute("data-item", itemName);
                newItem.setAttribute("data-quantity", 1);
                newItem.setAttribute("data-amount", totalAmount);

                cart.appendChild(newItem);
            }
// Update grand total
grandTotal += amount;
document.getElementById("grandTotal").textContent = "Grand Total: ₹" + grandTotal.toFixed(2);

            var clickCount = document.getElementById("clickCount");
            clickCount.textContent = parseInt(clickCount.textContent) + 1;
           
    alert("Item successfully added to the cart.");
        }

  //----------------Placing order----------------//

        function placeOrder() {
            var clickCount = document.getElementById("clickCount");
            var itemCount = parseInt(clickCount.textContent);
        
            if (itemCount === 0) {
                alert("Your cart is empty. Please add items before placing an order.");
                return; 
            }
        
            // Simulate placing the order
            alert("Order placed successfully ,Thanks for ordered!");
    
            var cart = document.getElementById("sidebar");
            var items = cart.querySelectorAll("p[data-item]");
        
            items.forEach(function(item) {
                item.parentNode.removeChild(item);
            });
        
            // Reset the total ordered count
            clickCount.textContent = "0";
            grandTotal = 0;
            document.getElementById("grandTotal").textContent = "Grand Total: ₹0.00";
        }


  //----------------To clear the Cart ----------------//

        function clearCart() {
            var cart = document.getElementById("sidebar");
            var items = cart.querySelectorAll("p[data-item]");
        
            items.forEach(function(item) {
                item.parentNode.removeChild(item);
            });

               // Reset the grand total
                // Reset the total ordered count
            clickCount.textContent = "0";
    grandTotal = 0;
    document.getElementById("grandTotal").textContent = "Grand Total: ₹0.00";
        }
        
        
        function toggleSidebar() {
            var sidebar = document.getElementById("sidebar");
            if (!sidebarVisible) {
                sidebar.style.left = "0";
            } else {
                sidebar.style.left = "-350px";
            }
            sidebarVisible = !sidebarVisible;
        }

      //---------------all  toggle--------------//

      function logintoggle() {
        window.location.href = "login.html";
    }  
      function showRecipes1() {
        window.location.href = "breakfast.html";
    }
    function showRecipes2() {
        window.location.href = "lunch.html";
    }
    
    function showRecipes3() {
        window.location.href = "dinner.html";
    }
//---------------To NAvigate to the ingridents Page--------------//

function ingredients(sectionId) {
    // Redirect to the ingredients.html page
    window.location.href = 'ingredients.html';

    // Store the section id in sessionStorage to be accessed on the ingredients.html page
    sessionStorage.setItem('sectionId', sectionId);
}




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goToTopBtn").style.display = "block";
    } else {
        document.getElementById("goToTopBtn").style.display = "none";
    }
}

document.getElementById("goToTopBtn").addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});


function goToTop() {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
