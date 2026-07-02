// GET PRODUCT ID FROM URL
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// FIND PRODUCT
const product = products.find(p => p.id == productId);
const container = document.getElementById("product-page");

// SHOW PRODUCT
if (product) {
  container.innerHTML = `
    <div class="product-layout">

      <div class="left">
        <img src="${product.image}" class="main-img"/>
      </div>

      <div class="right">
        <h2>${product.name}</h2>

        <p class="desc">
          High quality product with best performance.
          Order now and get fast delivery.
        </p>

        <p class="price">KES ${Number(product.price).toLocaleString()}</p>

        <div id="cart-controls"></div>
      </div>

    </div>
  `;

  renderCartControls();
}

// ===== CART CONTROLS =====
function renderCartControls() {
  const controls = document.getElementById("cart-controls");
  if (!controls) return;

  const existing = cart.find(p => p.id == product.id);

  if (!existing) {
    controls.innerHTML = `
      <button class="cart-btn" onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    `;
  } else {
    controls.innerHTML = `
      <div class="qty-box">
        <button onclick="decreaseQty(${product.id})">-</button>
        <span>${existing.quantity}</span>
        <button onclick="increaseQty(${product.id})">+</button>
      </div>
    `;
  }
}

// ===== CART FUNCTIONS =====
function addToCart(id) {
  const item = products.find(p => p.id == id);
  cart.push({ ...item, quantity: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  renderCartControls();
}

function increaseQty(id) {
  const item = cart.find(p => p.id == id);
  item.quantity++;

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  renderCartControls();
}

function decreaseQty(id) {
  const item = cart.find(p => p.id == id);

  if (item.quantity > 1) {
    item.quantity--;
  } else {
    cart = cart.filter(p => p.id != id);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  renderCartControls();
}

// ===== UPDATE CART COUNT =====
function updateCart() {
  let total = 0;
  cart.forEach(i => total += i.quantity);

  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.innerText = total;
}

updateCart();

// ===== RELATED PRODUCTS =====
const related = document.getElementById("related-products");

if (related) {
  const filtered = products
    .filter(p => p.id != productId)
    .slice(0, 4);

  filtered.forEach(p => {
    related.innerHTML += `
      <div class="card" onclick="goToProduct(${p.id})">
        <img src="${p.image}">
        <p>${p.name}</p>
        <p>KES ${Number(p.price).toLocaleString()}</p>
      </div>
    `;
  });
}

// NAVIGATION
function goToProduct(id){
  window.location.href = `product.html?id=${id}`;
}
