const cartContainer = document.getElementById("cart-items");
const totalEl = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DISPLAY CART
function renderCart() {
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p style='padding:10px;'>Cart is empty</p>";
    totalEl.innerText = "Total: KES 0";
    return;
  }

  let html = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    html += `
      <div class="cart-item">
        <img src="${item.image}" />

        <div class="info">
          <h4>${item.name}</h4>
          <p>KES ${Number(item.price).toLocaleString()}</p>

          <div class="qty-box">
            <button onclick="decrease(${item.id})">-</button>
            <span>${item.quantity}</span>
            <button onclick="increase(${item.id})">+</button>
          </div>
        </div>
      </div>
    `;
  });

  cartContainer.innerHTML = html;
  totalEl.innerText = "Total: KES " + total.toLocaleString();
}

// INCREASE
function increase(id) {
  const item = cart.find(i => i.id === id);
  item.quantity++;

  save();
}

// DECREASE
function decrease(id) {
  const item = cart.find(i => i.id === id);

  if (item.quantity > 1) {
    item.quantity--;
  } else {
    cart = cart.filter(i => i.id !== id);
  }

  save();
}

// SAVE + RELOAD
function save() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// INIT
renderCart();
