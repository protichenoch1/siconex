const container = document.getElementById("product-list");

products.forEach(product => {
  container.innerHTML += `
    <div class="card">
      <img src="${product.image}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
});

function addToCart(id) {
  alert("Added to cart");
}
