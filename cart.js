const cartItemsContainer = document.getElementById("cart-items");
const totalContainer = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    cartItemsContainer.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <p>$${item.price} x ${item.quantity}</p>
        <button onclick="removeItem(${item.id})">Remove</button>
      </div>
    `;
  });

  totalContainer.innerText = "Total: $" + total;
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function checkout() {
  alert("Proceeding to payment...");
}

renderCart();
