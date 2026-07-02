const products = [
  {
    id: 1,
    name: "Samsung Galaxy A06",
    price: 120,
    category: "phones",
    brand: "Samsung",
    image: "images/galaxy06.jpg",
    description: "Affordable Samsung smartphone with long battery life and smooth performance."
  },
  {
    id: 2,
    name: "HP EliteBook 820",
    price: 250,
    category: "laptops",
    brand: "HP",
    image: "images/hp820.jpg",
    description: "Compact business laptop with solid performance and durability."
  },
  {
    id: 3,
    name: "Vitron HTC3288QS 32\" TV",
    price: 12500,
    category: "tvs",
    brand: "Vitron",
    image: "images/vitron32.jpg",
    description: "32-inch HD TV with clear display and energy efficiency."
  },
  {
    id: 4,
    name: "AirMars APB05 Power Bank",
    price: 15,
    category: "power",
    brand: "AirMars",
    image: "images/airmars1.jpg",
    description: "Reliable power bank for fast charging on the go."
  },
  {
    id: 5,
    name: "Tecno Spark 10",
    price: 140,
    category: "phones",
    brand: "Tecno",
    image: "images/tecno.jpg",
    description: "Stylish smartphone with strong battery and good camera."
  },
  {
    id: 6,
    name: "Lenovo ThinkPad X1",
    price: 600,
    category: "laptops",
    brand: "Lenovo",
    image: "images/lenovo.jpg",
    description: "Premium laptop with powerful performance and sleek design."
  },
  {
    id: 7,
    name: "Samsung 43\" Smart TV",
    price: 300,
    category: "tvs",
    brand: "Samsung",
    image: "images/samsungtv.jpg",
    description: "Smart TV with streaming apps and high-quality display."
  },
  {
    id: 8,
    name: "Oraimo Power Bank 20000mAh",
    price: 20,
    category: "power",
    brand: "Oraimo",
    image: "images/oraimo.jpg",
    description: "High-capacity power bank for multiple device charging."
  }
];

const container = document.getElementById("products");

if (container) {
  let html = "";

  products.forEach(p => {
    html += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>KES ${Number(p.price).toLocaleString()}</p>

        <button class="view-btn" onclick="goToProduct(${p.id})">
          View Product
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
}

function goToProduct(id) {
  window.location.href = "product.html?id=" + id;
}
