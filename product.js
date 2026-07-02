const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const product = products.find(p => p.id == productId);
const container = document.getElementById("product-page");

// SHOW PRODUCT
if (product) {
  container.innerHTML = `
    <div class="product-layout">

      <!-- LEFT: IMAGE -->
      <div class="left">
        <img src="${product.image}" class="main-img"/>
      </div>

      <!-- RIGHT: DETAILS -->
      <div class="right">
        <h2>${product.name}</h2>
        <p class="price">$${product.price}</p>

        <p class="desc">
          High quality product with best performance. 
          Order now and get fast delivery.
        </p>

        <button class="buy">Buy Now</button>
        <button class="cart-btn" onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>

    </div>
  `;
}

// ADD TO CART
function addToCart(id) {
  const item = products.find(p => p.id == id);
  const existing = cart.find(p => p.id == id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

// UPDATE CART COUNT
function updateCart() {
  let total = 0;
  cart.forEach(i => total += i.quantity);
  document.getElementById("cart-count").innerText = total;
}

updateCart();


// RELATED PRODUCTS
const related = document.getElementById("related-products");

products.slice(0,4).forEach(p => {
  related.innerHTML += `
    <div class="card" onclick="goToProduct(${p.id})">
      <img src="${p.image}">
      <p>${p.name}</p>
      <p>$${p.price}</p>
    </div>
  `;
});

function goToProduct(id){
  window.location.href = `product.html?id=${id}`;
}
