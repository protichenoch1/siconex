const container = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

// Load cart from storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display products
products.forEach(product => {
  container.innerHTML += `
  <div class="card" onclick="goToProduct(${product.id})">
    <img src="${product.image}" />
    <h3>${product.name}</h3>
    <p>$${product.price}</p>

    <button onclick="event.stopPropagation(); addToCart(${product.id})">
      Add To Cart
    </button>
  </div>
  `;
});

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Update cart count
function updateCartCount() {
  let total = 0;

  cart.forEach(item => {
    total += item.quantity;
  });

  cartCount.innerText = total;
}

// Initialize count on load
updateCartCount();

function goToProduct(id) {
  window.location.href = `product.html?id=${id}`;
}
