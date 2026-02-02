const phone = "7902408917";

// Each category includes product names + free image URLs
const productsData = {
  perfumes: [
    {name: "Ocean Drift", price: 999, img:"https://cdn.pixabay.com/photo/2016/11/22/23/30/perfume-1850069_1280.jpg"},
    {name: "Midnight Oud", price: 999, img:"https://cdn.pixabay.com/photo/2016/03/05/19/02/perfume-1238247_1280.jpg"},
    {name: "Blue Aura", price: 999, img:"https://cdn.pixabay.com/photo/2017/09/19/11/10/perfume-2762559_1280.jpg"},
    {name: "Amber Noir", price: 999, img:"https://cdn.pixabay.com/photo/2014/08/12/21/03/perfume-416423_1280.jpg"},
    // repeat or add up to 20
  ],
  tshirts: [
    {name: "Casual Tee 1", price: 699, img:"https://images.pexels.com/photos/1002639/pexels-photo-1002639.jpeg"},
    {name: "Casual Tee 2", price: 699, img:"https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg"},
    {name: "Sport Tee 3", price: 699, img:"https://images.pexels.com/photos/1007023/pexels-photo-1007023.jpeg"},
    {name: "Graphic Tee 4", price: 699, img:"https://images.pexels.com/photos/373270/pexels-photo-373270.jpeg"},
    // up to 20
  ],
  shirts: [
    {name: "Formal Shirt 1", price: 899, img:"https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg"},
    {name: "Casual Shirt 2", price: 899, img:"https://images.pexels.com/photos/1002639/pexels-photo-1002639.jpeg"},
    {name: "Denim Shirt 3", price: 899, img:"https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg"},
    {name: "Linen Shirt 4", price: 899, img:"https://images.pexels.com/photos/1007023/pexels-photo-1007023.jpeg"},
    // up to 20
  ],
  shoes: [
    {name: "Leather Shoes 1", price: 1999, img:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"},
    {name: "Sport Shoes 2", price: 1999, img:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"},
    {name: "Casual Shoes 3", price: 1999, img:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"},
    {name: "Sneakers 4", price: 1999, img:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"},
    // up to 20
  ],
  boots: [
    {name: "Winter Boots 1", price: 2499, img:"https://images.pexels.com/photos/19090/pexels-photo.jpg"},
    {name: "Leather Boots 2", price: 2499, img:"https://images.pexels.com/photos/19090/pexels-photo.jpg"},
    {name: "Hiker Boots 3", price: 2499, img:"https://images.pexels.com/photos/19090/pexels-photo.jpg"},
    {name: "Combat Boots 4", price: 2499, img:"https://images.pexels.com/photos/19090/pexels-photo.jpg"},
    // up to 20
  ]
};

let cart = [];

function openCategory(cat) {
  document.getElementById("category-home").classList.add("hidden");
  const products = document.getElementById("products");
  products.classList.remove("hidden");
  products.innerHTML = "";
  productsData[cat].forEach(item => {
    products.innerHTML += `
      <div class="product">
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="addToCart('${item.name}',${item.price})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(name, price) {
  cart.push({name,price});
  document.getElementById("cart-count").innerText = cart.length;
  updateCart();
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("show");
}

function updateCart() {
  const items = document.getElementById("cart-items");
  let total = 0;
  let message = "Hello URES I want to order:%0A";
  items.innerHTML = "";
  cart.forEach(i => {
    total += i.price;
    items.innerHTML += `<p>${i.name} ₹${i.price}</p>`;
    message += `${i.name} ₹${i.price}%0A`;
  });
  document.getElementById("total").innerText = total;
  document.getElementById("whatsapp").href = 
    `https://wa.me/91${phone}?text=${message}Total: ₹${total}`;
}
