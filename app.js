// GET ELEMENTS
const container = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

// LOAD CART FROM STORAGE
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// =========================
// DISPLAY PRODUCTS
// =========================
if (container) {
  let html = "";

  products.forEach(product => {
    html += `
      <div class="card" onclick="goToProduct(${product.id})">
        <img src="${product.image}" />
        <h3>${product.name}</h3>
        <p>KES ${Number(product.price).toLocaleString()}</p>

        <button class="view-btn" onclick="event.stopPropagation(); goToProduct(${product.id})">
          View Product
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
}

// =========================
// UPDATE CART COUNT
// =========================
function updateCartCount() {
  let total = 0;

  cart.forEach(item => {
    total += item.quantity;
  });

  if (cartCount) {
    cartCount.innerText = total;
  }
}

updateCartCount();

// =========================
// NAVIGATION
// =========================
function goToProduct(id) {
  window.location.href = "product.html?id=" + id;
}
