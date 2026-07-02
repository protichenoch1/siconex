const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products.find(p => p.id == productId);

const container = document.getElementById("product-details");

if (product) {
  container.innerHTML = `
    <div class="product-page">
      <img src="${product.image}" />
      <h1>${product.name}</h1>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
}
