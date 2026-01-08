// CART COUNT
let cartCount = 0;
let cartDisplay = document.getElementById("cartCount");
let cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    cartCount++;
    cartDisplay.innerText = cartCount;
    alert("Product added to cart");
  });
});

// LOGIN VALIDATION
let loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
      alert("Please fill all fields");
    } else {
      alert("Login Successful");
    }
  });
}
