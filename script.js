const phone = "7902408917";

const data = {
  perfumes: Array.from({ length: 20 }, (_, i) => ({
    name: `Perfume ${i+1}`,
    price: 999
  })),
  tshirts: Array.from({ length: 20 }, (_, i) => ({
    name: `T-Shirt ${i+1}`,
    price: 699
  })),
  shirts: Array.from({ length: 20 }, (_, i) => ({
    name: `Shirt ${i+1}`,
    price: 899
  })),
  shoes: Array.from({ length: 20 }, (_, i) => ({
    name: `Shoes ${i+1}`,
    price: 1999
  })),
  boots: Array.from({ length: 20 }, (_, i) => ({
    name: `Boots ${i+1}`,
    price: 2499
  }))
};

let cart = [];

function showCategory(category) {
  const products = document.getElementById("products");
  products.innerHTML = "";

  data[category].forEach(item => {
    products.innerHTML += `
      <div class="product">
        <img src="https://via.placeholder.com/300">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick='addToCart("${item.name}", ${item.price})'>
          Add to Cart
        </button>
      </div>
    `;
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cart-count").innerText = cart.length;
  updateCart();
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("show");
}

function updateCart() {
  const items = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  items.innerHTML = "";

  let total = 0;
  let message = "Hello URES, I want to order:%0A";

  cart.forEach(item => {
    total += item.price;
    items.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    message += `${item.name} - ₹${item.price}%0A`;
  });

  totalEl.innerText = total;
  message += `Total: ₹${total}`;

  document.getElementById("whatsapp").href =
    `https://wa.me/91${phone}?text=${message}`;
}
