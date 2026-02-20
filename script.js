/* ================================================
   ThreadedBack — Thrift Shop
   script.js
   ================================================ */

// ================================================
// PRODUCT DATA
// Images use local paths first, fallback to Unsplash
// Replace src paths with your own images in /images/
// ================================================
const products = [

  // ---- CAPS ----
  {
    id: 1,
    name: "Vintage 90s Snapback",
    category: "cap",
    price: 280,
    original: 1200,
    size: "One Size",
    condition: "Good",
    badge: "Sale",
    img: "images/cap-snapback.jpg",
    fallback: "images/1.jpg",
    desc: "Classic snapback in black. Barely worn."
  },
  {
    id: 2,
    name: "Dad Hat — Washed Gray",
    category: "cap",
    price: 220,
    original: 900,
    size: "One Size",
    condition: "Excellent",
    badge: "",
    img: "images/cap-dad.jpg",
    fallback: "images/2.jpg",
    desc: "Super clean dad hat, minimal wear."
  },
  {
    id: 3,
    name: "Bucket Hat — Mint Green",
    category: "cap",
    price: 180,
    original: 750,
    size: "One Size",
    condition: "Good",
    badge: "New",
    img: "images/cap-bucket.jpg",
    fallback: "images/3.jpg",
    desc: "Y2K mint bucket hat, perfect summer fit."
  },
  {
    id: 4,
    name: "NY Navy Blue",
    category: "cap",
    price: 250,
    original: 1000,
    size: "One Size",
    condition: "Good",
    badge: "",
    img: "images/cap-trucker.jpg",
    fallback: "images/4.jpg",
    desc: "Mesh back trucker with vintage patch."
  },
  {
    id: 5,
    name: "Beret — Beige",
    category: "cap",
    price: 150,
    original: 600,
    size: "One Size",
    condition: "Excellent",
    badge: "New",
    img: "images/cap-beret.jpg",
    fallback: "images/5.jpg",
    desc: "Chic beret with structured shape."
  },
  {
    id: 6,
    name: "Baseball Cap — Navy stripe",
    category: "cap",
    price: 200,
    original: 850,
    size: "One Size",
    condition: "Good",
    badge: "Sale",
    img: "images/cap-baseball.jpg",
    fallback: "images/6.jpg",
    desc: "Classic baseball cap, clean navy colourway."
  },

  // ---- SHOES ----
  {
    id: 7,
    name: "Nike Air White",
    category: "shoes",
    price: 1800,
    original: 7500,
    size: "US 9",
    condition: "Good",
    badge: "Sale",
    img: "images/shoes-airmax.jpg",
    fallback: "images/7.jpg",
    desc: "Iconic silhouette. Soles intact, minor creasing."
  },
  {
    id: 8,
    name: "Nike White and Green",
    category: "shoes",
    price: 950,
    original: 3800,
    size: "US 8",
    condition: "Excellent",
    badge: "New",
    img: "images/shoes-converse.jpg",
    fallback: "images/8.jpg",
    desc: "Canvas hi-tops, almost like new."
  },
  {
    id: 9,
    name: "Nike Old Skool — Checkerboard",
    category: "shoes",
    price: 850,
    original: 3500,
    size: "US 8.5",
    condition: "Good",
    badge: "",
    img: "images/shoes-vans.jpg",
    fallback: "images/9.jpg",
    desc: "Iconic checkerboard pattern. Timeless."
  },
  {
    id: 10,
    name: "Nike Superstar Shell Toe",
    category: "shoes",
    price: 1200,
    original: 5000,
    size: "US 9.5",
    condition: "Good",
    badge: "Sale",
    img: "images/shoes-adidas.jpg",
    fallback: "images/10.jpg",
    desc: "Classic shell toe. Light wear, great shape."
  },
  {
    id: 11,
    name: "Nike Blue",
    category: "shoes",
    price: 2200,
    original: 9000,
    size: "US 10",
    condition: "Good",
    badge: "",
    img: "images/shoes-timberland.jpg",
    fallback: "images/11.jpg",
    desc: "Wheat nubuck. Resoleable and durable."
  },
  {
    id: 12,
    name: "Air Jordan Fully White",
    category: "shoes",
    price: 3500,
    original: 14000,
    size: "US 9",
    condition: "Excellent",
    badge: "New",
    img: "images/shoes-jordan.jpg",
    fallback: "images/12.jpg",
    desc: "Air Jordan, near deadstock condition."
  },

  // ---- SHIRTS ----
  {
    id: 13,
    name: "Balenciaga Tee — Nirvana",
    category: "shirt",
    price: 380,
    original: 1500,
    size: "XL",
    condition: "Good",
    badge: "Sale",
    img: "images/shirt-band.jpg",
    fallback: "images/13.jpg",
    desc: "Plain black with logo. Faded to perfection."
  },
  {
    id: 14,
    name: "Uniqlo - Marshmallow",
    category: "shirt",
    price: 450,
    original: 2000,
    size: "L",
    condition: "Excellent",
    badge: "New",
    img: "images/shirt-polo.jpg",
    fallback: "images/14.jpg",
    desc: "gray, minimal wear."
  },
  {
    id: 15,
    name: "Uniqlo Plain",
    category: "shirt",
    price: 350,
    original: 1400,
    size: "XL",
    condition: "Good",
    badge: "",
    img: "images/shirt-tommy.jpg",
    fallback: "images/15.jpg",
    desc: "Classic. Preppy & fresh."
  },
  {
    id: 16,
    name: "Uniqlo",
    category: "shirt",
    price: 280,
    original: 1100,
    size: "L/XL",
    condition: "Good",
    badge: "Sale",
    img: "images/shirt-flannel.jpg",
    fallback: "images/16.jpg",
    desc: "Khaki. Grunge ready."
  },
  {
    id: 17,
    name: "Vintage Stussy",
    category: "shirt",
    price: 320,
    original: 1300,
    size: "L",
    condition: "Good",
    badge: "New",
    img: "images/shirt-hawaiian.jpg",
    fallback: "images/17.jpg",
    desc: "Dice with big logo print. Chill vibes."
  },
  {
    id: 18,
    name: "Essential white",
    category: "shirt",
    price: 260,
    original: 1000,
    size: "L",
    condition: "Excellent",
    badge: "",
    img: "images/shirt-champion.jpg",
    fallback: "images/18.jpg",
    desc: "Heavyweight cotton. Super soft."
  },

  // ---- HOODIES / JACKETS ----
  {
    id: 19,
    name: "Stussy Gray",
    category: "hoodie",
    price: 2800,
    original: 12000,
    size: "L",
    condition: "Good",
    badge: "Sale",
    img: "images/jacket-starter.jpg",
    fallback: "images/19.jpg",
    desc: "20s Starter puffer. rare find."
  },
  {
    id: 20,
    name: "Nike big Print — Black",
    category: "hoodie",
    price: 650,
    original: 2600,
    size: "M",
    condition: "Excellent",
    badge: "New",
    img: "images/hoodie-champion.jpg",
    fallback: "images/20.jpg",
    desc: "Thick fleece. Barely worn."
  },
  {
    id: 21,
    name: "Minamalist nike hoodie",
    category: "hoodie",
    price: 850,
    original: 3500,
    size: "L",
    condition: "Good",
    badge: "",
    img: "images/jacket-denim.jpg",
    fallback: "images/21.jpg",
    desc: "Classic gray. Broken in beautifully."
  },
  {
    id: 22,
    name: "The 1975",
    category: "hoodie",
    price: 750,
    original: 3200,
    size: "L",
    condition: "Excellent",
    badge: "Sale",
    img: "images/jacket-windbreaker.jpg",
    fallback: "images/22.jpg",
    desc: "Big print at the back. All goods."
  },
  {
    id: 23,
    name: "Nike big logo print at the back",
    category: "hoodie",
    price: 580,
    original: 2300,
    size: "XL",
    condition: "Good",
    badge: "New",
    img: "images/hoodie-fleece.jpg",
    fallback: "images/23.jpg",
    desc: "Cotton. Ultra cozy."
  },
  {
    id: 24,
    name: "Essential All White",
    category: "hoodie",
    price: 1800,
    original: 7500,
    size: "L",
    condition: "Good",
    badge: "",
    img: "images/jacket-varsity.jpg",
    fallback: "images/24.jpg",
    desc: "No Issue, Very Soft."
  }
];

// ================================================
// STATE
// ================================================
let cart          = [];
let currentFilter = 'all';
let currentSort   = 'newest';

// ================================================
// RENDER PRODUCTS
// ================================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  // Filter
  let toShow = currentFilter === 'all'
    ? [...products]
    : products.filter(p => p.category === currentFilter);

  // Sort
  if (currentSort === 'price-low')  toShow.sort((a, b) => a.price - b.price);
  if (currentSort === 'price-high') toShow.sort((a, b) => b.price - a.price);

  if (toShow.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:#8B7355;padding:3rem;grid-column:1/-1;">No items found in this category.</p>';
    return;
  }

  toShow.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img">
        ${p.badge ? `<span class="badge ${p.badge === 'New' ? 'new' : ''}">${p.badge}</span>` : ''}
        <button class="wishlist-btn" title="Add to Wishlist">♡</button>
        <img
          src="${p.img}"
          alt="${p.name}"
          loading="lazy"
          onerror="this.onerror=null; this.src='${p.fallback}'"
        >
        <div class="add-cart-overlay">
          <button class="add-to-cart-btn" onclick="addToCart(${p.id})">
            🛍️ Add to Cart
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc} · ${p.condition} condition</div>
        <div class="product-footer">
          <div>
            <span class="product-price">₱${p.price.toLocaleString()}</span>
            <span class="product-original">₱${p.original.toLocaleString()}</span>
          </div>
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="size-badge">${p.size}</span>
            <button class="add-cart-mobile" title="Add to cart" onclick="addToCart(${p.id})">+</button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ================================================
// FILTER & SORT
// ================================================
function filterProducts(cat, el) {
  currentFilter = cat;
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function sortProducts(sort, el) {
  currentSort = sort;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderProducts();
}

// ================================================
// CART — ADD / REMOVE / UPDATE
// ================================================
function addToCart(id) {
  const product  = products.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCart();
  showToast(`✅ "${product.name}" added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCart();
}

function updateCart() {
  // Update count badge
  const count = cart.reduce((sum, c) => sum + c.qty, 0);
  document.getElementById('cartCount').textContent = count;

  // Update total
  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  document.getElementById('cartTotal').textContent = '₱' + total.toLocaleString();

  // Render cart items
  const itemsEl = document.getElementById('cartItems');

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <div>Your cart is empty.<br><small>Start adding items!</small></div>
      </div>`;
    return;
  }

  itemsEl.innerHTML = cart.map(c => `
    <div class="cart-item">
      <img class="cart-item-img"
           src="${c.img}"
           alt="${c.name}"
           onerror="this.onerror=null; this.src='${c.fallback}'">
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-size">${c.size} · ${c.category}</div>
        <div class="cart-item-price">
          ₱${(c.price * c.qty).toLocaleString()}
          ${c.qty > 1 ? `<span style="font-size:0.78rem;color:#8B7355;">(×${c.qty})</span>` : ''}
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${c.id})">✕</button>
    </div>
  `).join('');
}

// ================================================
// CART SIDEBAR — OPEN / CLOSE
// ================================================
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ================================================
// CHECKOUT
// ================================================
function checkout() {
  if (cart.length === 0) {
    showToast('🛒 Your cart is empty!');
    return;
  }
  showToast('🎉 Order placed! We\'ll contact you soon.');
  cart = [];
  updateCart();
  closeCart();
}

// ================================================
// TOAST NOTIFICATION
// ================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ================================================
// MOBILE NAV
// ================================================
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
}

// ================================================
// WISHLIST TOGGLE (event delegation)
// ================================================
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('wishlist-btn')) {
    const isWishlisted = e.target.textContent === '♥';
    e.target.textContent  = isWishlisted ? '♡' : '♥';
    e.target.style.color  = isWishlisted ? '' : 'var(--rust)';
  }
});

// ================================================
// INIT
// ================================================
renderProducts();

// ================================================
// VIDEO MUTE TOGGLE
// ================================================
function toggleMute() {
  const video = document.getElementById('heroVideo');
  const btn   = document.getElementById('muteBtn');
  if (!video) return;
  video.muted = !video.muted;
  btn.textContent = video.muted ? '🔇' : '🔊';
}