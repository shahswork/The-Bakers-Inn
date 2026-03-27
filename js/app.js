/* ============================================================
   The Bakers Inn — Main Application JavaScript
   ============================================================ */

'use strict';

// ──────────────────────────────────────────────
// Product Data
// ──────────────────────────────────────────────
function getFallbackProducts() {
  return [
    {
      id: 'cake-001',
      name: 'Classic Pink Birthday Dream',
      category: 'birthday',
      categoryLabel: 'Birthday Cakes',
      description: 'A gorgeous 3-layer vanilla cake with pink rose buttercream, hand-piped rosettes, and edible pearl sprinkles. Perfect for any birthday celebration.',
      price: 2500,
      oldPrice: 3700,
      rating: 4.9,
      reviews: 234,
      image: 'https://sspark.genspark.ai/cfimages?u1=rplYFRyqH1P2PT12CKB4Img4dQEPYSUEnfy8c4C6LNrqgx5T4prd2Qt0WFsOAHbeLNlawzMnPrrCDWIAe157KmiKlK%2BSk2ysrtAvp5CaFbwaIzY6VY3bGF6A0AvuNsc6s1OwOkr0C%2FBk5eI%3D&u2=nIkRhoX6rwjAXv6U&width=2560',
      badge: 'Bestseller',
      badgeType: '',
      isNew: false,
      details: [
        { k: 'Flavor', v: 'Vanilla Bean' },
        { k: 'Filling', v: 'Strawberry Jam' },
        { k: 'Size', v: '8" (16–20 servings)' },
        { k: 'Allergens', v: 'Eggs, Dairy, Gluten' }
      ]
    },
    {
      id: 'cake-002',
      name: 'Tall White Floral Wedding',
      category: 'wedding',
      categoryLabel: 'Wedding Cakes',
      description: 'An elegant 4-tier white wedding cake adorned with cascading fresh floral accents and delicate sugar pearl details. A true centerpiece.',
      price: 4500,
      oldPrice: null,
      rating: 5.0,
      reviews: 89,
      image: 'https://sspark.genspark.ai/cfimages?u1=a21I9PPTtJSzKSRhyeePkZG164V9dlMMgZjcupU6zvU0uN3PPMwfRFhY%2B580ULPvzwAj%2FCxiL3xDr2ASWXpZDpJP%2FcrJa2iqgAfnZT5cCrVdUmU2d9geX6Ni2gRB%2BnskRCC2QJRVB2SY1dxUXhBQoP%2F%2B6ZsmlCPVK71I&u2=%2BbUkbHXdg8EQRpvW&width=2560',
      badge: '⭐ Premium',
      badgeType: 'gold',
      isNew: false,
      details: [
        { k: 'Flavor', v: 'Vanilla & Champagne' },
        { k: 'Filling', v: 'Lemon Curd & Cream' },
        { k: 'Tiers', v: '4 Tiers (60 servings)' },
        { k: 'Lead Time', v: '7–14 days' }
      ]
    },
    {
      id: 'cake-003',
      name: 'Rainbow Party Cupcakes',
      category: 'cupcakes',
      categoryLabel: 'Cupcakes',
      description: 'A dozen beautifully decorated cupcakes in assorted flavors — vanilla, chocolate, strawberry, and lemon — with swirl buttercream and sprinkles.',
      price: 1250,
      oldPrice: 2300,
      rating: 4.8,
      reviews: 412,
      image: 'https://sspark.genspark.ai/cfimages?u1=%2FT2%2BsGJjgvZFdFgBg70bInZhyD%2FipjyskQmPEMax8MCAjw6zeKKr7AgU5TK5uM5mwDHGGMbkPGvYfndQKCKUul972R467t594QLN332hIaUm%2Bw%3D%3D&u2=lqEl9P6xSDWYgGrx&width=2560',
      badge: '🎉 Popular',
      badgeType: '',
      isNew: false,
      details: [
        { k: 'Qty', v: '12 cupcakes' },
        { k: 'Flavors', v: 'Mixed (4 varieties)' },
        { k: 'Frosting', v: 'Buttercream swirl' },
        { k: 'Allergens', v: 'Eggs, Dairy, Gluten' }
      ]
    },
    {
      id: 'cake-004',
      name: 'Sugar Flower Cascade Wedding',
      category: 'wedding',
      categoryLabel: 'Wedding Cakes',
      description: 'A breathtaking 3-tier wedding cake wrapped in hand-crafted sugar flower cascades in blush and ivory tones. Custom made for your special day.',
      price: 4200,
      oldPrice: 5300,
      rating: 5.0,
      reviews: 67,
      image: 'https://sspark.genspark.ai/cfimages?u1=p4pbvIuDscmF8F0%2F1effKKx9t0mxvHv8hVbFE2GAwvwG2fvyYy%2Fv7MA7eCp8id3sxeyf0tIzu3k0lR1l8Ele%2Ff3CXM%2Bg%2FGQtULnSD0X22yh%2BInZ3gGk0Sc3cY%2Ba0xOBPr0T3DfZMkq6y0kECRNqS%2Fg%3D%3D&u2=3ZUV3T5hL1zSu0UH&width=2560',
      badge: 'Custom',
      badgeType: 'gold',
      isNew: true,
      details: [
        { k: 'Flavor', v: 'Rose & Elderflower' },
        { k: 'Filling', v: 'Champagne Ganache' },
        { k: 'Tiers', v: '3 Tiers (50 servings)' },
        { k: 'Lead Time', v: '14–21 days' }
      ]
    },
    {
      id: 'cake-005',
      name: 'Pink & Gold Glamour Cake',
      category: 'birthday',
      categoryLabel: 'Birthday Cakes',
      description: 'A showstopping birthday cake in blush pink and gold, featuring metallic drip glaze, sugar pearls, and a custom sparkler topper. Pure glam!',
      price: 3000,
      oldPrice: 3800,
      rating: 4.9,
      reviews: 178,
      image: 'https://sspark.genspark.ai/cfimages?u1=KcW1WkI%2BA6X%2BS6kTSRnMarw%2F%2BPM2kr1zRL6rU7pc9ym%2F%2BglbM67F6jVTiAHPGDK7ivSsqYhn9SzqxhbjtK0zpJ9MTqA%2BYx6Ph26l%2FUsi6A%3D%3D&u2=wUD3w4XRhhAhwX1M&width=2560',
      badge: '🔥 Hot',
      badgeType: '',
      isNew: true,
      details: [
        { k: 'Flavor', v: 'Chocolate Fudge' },
        { k: 'Filling', v: 'Salted Caramel' },
        { k: 'Size', v: '10" (30–35 servings)' },
        { k: 'Decoration', v: 'Gold drip glaze' }
      ]
    },
    {
      id: 'cake-006',
      name: 'Artistic Custom Masterpiece',
      category: 'custom',
      categoryLabel: 'Custom Cakes',
      description: 'Your vision, our artistry. This completely bespoke cake is hand-painted and sculpted to your exact specifications. No two are alike.',
      price: 3500,
      oldPrice: null,
      rating: 4.9,
      reviews: 45,
      image: 'https://sspark.genspark.ai/cfimages?u1=SkS3MfSd4V5%2FPXgxVhTHKtYsP8DeHoiQjT2tutjLMSEP9tlInUR0RYJyjyJpEiewF11tszkzc71W3ci9oyFPOfoyGfeqENv8JjC7IDQQx1WE6uhSpFCuRz93y34knvAQNLccLbl86AxebrxSfiBRHmhCZBhwzPRNASEsGHTmImL5rqJWujQnH2j8U793qhmyG9jiiXKi7b6fI%2BPp1bpO5M3EjMW%2F6M1rMH7F1eRI6JQJ482swiMSh7Y4quCt047QLjK9WJgEv2zYxs7zeVbG1zPqSAsJEVJ134ZC&u2=A91XyIcNxRtmZqWw&width=2560',
      badge: '✨ Custom',
      badgeType: 'gold',
      isNew: false,
      details: [
        { k: 'Flavor', v: 'Your choice' },
        { k: 'Style', v: 'Fully custom' },
        { k: 'Size', v: 'Any size' },
        { k: 'Lead Time', v: '5–10 days' }
      ]
    },
    {
      id: 'cake-007',
      name: 'Luxury Fondant Floral Cake',
      category: 'custom',
      categoryLabel: 'Custom Cakes',
      description: 'Premium fondant-covered cake with intricate hand-painted botanical designs and 3D fondant flowers. An edible work of art.',
      price: 2300,
      oldPrice: null,
      rating: 4.8,
      reviews: 92,
      image: 'https://sspark.genspark.ai/cfimages?u1=8qnxPOfAIlIWBiZulmltUcH4xB60oljX%2B8o8OAHHC91eeaSDxfaW5MaGszHGxYgpFmP0oY%2Blyor0fR144XtFG1fpIUOiu%2B%2BwPOBt9%2BD7rVVm4MQEpLgBx0imyWwcxMvmM2JQnQhfjKD5DnTl6gTxTfJ8&u2=HUEelAtSr2FD8zjW&width=2560',
      badge: 'New Arrival',
      badgeType: 'green',
      isNew: true,
      details: [
        { k: 'Flavor', v: 'Vanilla Almond' },
        { k: 'Filling', v: 'French Buttercream' },
        { k: 'Size', v: '9" (25–30 servings)' },
        { k: 'Decoration', v: 'Fondant botanicals' }
      ]
    },
    {
      id: 'cake-008',
      name: 'Seasonal Autumn Harvest',
      category: 'seasonal',
      categoryLabel: 'Seasonal Specials',
      description: 'A warm, spiced autumnal cake featuring pumpkin spice layers, cinnamon cream cheese frosting, and a caramel drip. Limited seasonal edition.',
      price: 3500,
      oldPrice: 90,
      rating: 4.7,
      reviews: 63,
      image: 'https://sspark.genspark.ai/cfimages?u1=lNDzkYSmZy6bx9hu%2FeD276oQubgPtY28XRUuaF4L7zc28acIkPSUmSSTx6sJRjqq8ma%2FG0fjnRsYeJVAbr2pFfE6wzrvCzqHuC3G5ys3WA%3D%3D&u2=yjq%2FofnIEyz6%2FBa%2F&width=2560',
      badge: '🍂 Seasonal',
      badgeType: '',
      isNew: false,
      details: [
        { k: 'Flavor', v: 'Pumpkin Spice' },
        { k: 'Filling', v: 'Cinnamon Cream Cheese' },
        { k: 'Size', v: '8" (16–20 servings)' },
        { k: 'Limited', v: 'While supplies last' }
      ]
    }
  ];
}

function getTestimonials() {
  return [
    {
      name: 'Sophia Waqar',
      avatar: '👩',
      rating: 5,
      occasion: 'Wedding Cake · March 2025',
      text: 'The Bakers Inn made our wedding absolutely magical. The 4-tier cake was not only breathtaking but tasted even better than it looked. Every guest complimented it!'
    },
    {
      name: 'Ariz Ahmad',
      avatar: '💑',
      rating: 5,
      occasion: 'Anniversary Cake · Feb 2025',
      text: 'Ordered a custom anniversary cake via WhatsApp and they were so responsive and helpful. The final cake was beyond our expectations. We were blown away!'
    },
    {
      name: 'Syed Family',
      avatar: '👨‍👩‍👧',
      rating: 5,
      occasion: 'Birthday Party · Jan 2025',
      text: 'My daughter\'s 5th birthday cake was the hit of the party! The pink princess design was perfect and the vanilla sponge was incredibly moist and delicious.'
    },
    {
      name: 'Rabia Kaleem',
      avatar: '👩‍💼',
      rating: 5,
      occasion: 'Corporate Event · Dec 2024',
      text: 'We ordered 200 cupcakes for our company event and they were flawless — on time, beautifully presented, and absolutely delicious. Will definitely reorder!'
    },
    {
      name: 'Rohan & Priya',
      avatar: '👫',
      rating: 5,
      occasion: 'Engagement Cake · Nov 2024',
      text: 'Ordered a surprise engagement cake via WhatsApp. The team was so thoughtful — they added a little detail I hadn\'t even asked for. She said yes! 💍'
    },
    {
      name: 'Waqas Rehman',
      avatar: '🧑',
      rating: 5,
      occasion: 'Baby Shower · Oct 2024',
      text: 'The baby shower cake was STUNNING. Pastel colors, fondant decorations, and it fed all 40 guests easily. The Bakers Inn is our go-to bakery forever!'
    }
  ];
}


// ──────────────────────────────────────────────
// Product Card Generator
// ──────────────────────────────────────────────
function createProductCard(p) {
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
  return `
    <div class="product-card fade-up" data-id="${p.id}" data-cat="${p.category}">
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="card-badge ${p.badgeType || ''}">${p.badge}</span>` : ''}
        ${discount > 0 ? `<span class="card-badge" style="left:auto;right:12px;background:var(--brown);">-${discount}%</span>` : ''}
        <button class="card-wishlist" onclick="toggleWishlist(this, '${p.id}')" aria-label="Add to wishlist">♡</button>
      </div>
      <div class="card-body">
        <div class="card-category">${p.categoryLabel}</div>
        <h3 class="card-name">${p.name}</h3>
        <p class="card-desc">${p.description.substring(0, 90)}...</p>
        <div class="card-rating-row">
          <span class="stars">${stars}</span>
          <span class="count">(${p.reviews})</span>
        </div>
        <div class="card-footer">
          <div class="card-price">
            <span class="price-current">Rs ${p.price.toFixed(2)}</span>
            ${p.oldPrice ? `<span class="price-old">Rs ${p.oldPrice.toFixed(2)}</span>` : ''}
          </div>
          <div class="card-actions">
            
            <button class="btn btn-primary btn-sm" onclick="addToCart(${JSON.stringify(p).replace(/"/g,'&quot;')})">
              <i class="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
        <!-- WhatsApp order button -->
        <a href="https://wa.me/15551234567?text=Hi!%20I'd%20like%20to%20order%20the%20${encodeURIComponent(p.name)}%20for%20$${p.price}" 
           target="_blank" class="btn btn-whatsapp" style="width:100%;justify-content:center;margin-top:10px;font-size:.82rem;padding:10px;">
          <i class="fab fa-whatsapp"></i> Order via WhatsApp
        </a>
      </div>
    </div>
  `;
}

// ──────────────────────────────────────────────
// Cart Management
// ──────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('sd_cart') || '[]');
const DELIVERY_FEE = 8.00;
const FREE_DELIVERY_THRESHOLD = 80;

function saveCart() {
  localStorage.setItem('sd_cart', JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  showToast(`🎂 ${product.name} added to cart!`, 'success');
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  if (item.qty < 1) { removeFromCart(id); return; }
  saveCart();
}

function getSubtotal() {
  return cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
}

function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (!itemsEl) return;

  if (!cart.length) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🎂</div>
        <strong>Your cart is empty</strong>
        <p>Add some delicious cakes to get started!</p>
        <a href="shop.html" class="btn btn-primary btn-sm" style="margin-top:12px;">Browse Cakes</a>
      </div>`;
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">Rs ${(item.price * item.qty).toFixed(2)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty('${item.id}', -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove">🗑</button>
    </div>
  `).join('');

  const subtotal = getSubtotal();
  const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;

  const subtotalEl = document.getElementById('cartSubtotal');
  const deliveryEl = document.getElementById('cartDelivery');
  const totalEl = document.getElementById('cartTotal');
  if (subtotalEl) subtotalEl.textContent = `Rs ${subtotal.toFixed(2)}`;
  if (deliveryEl) deliveryEl.textContent = delivery === 0 ? 'FREE 🎉' : `Rs ${delivery.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `Rs ${total.toFixed(2)}`;
  if (footerEl) footerEl.style.display = 'block';

  // Build WhatsApp message
  const waEl = document.getElementById('cartWhatsApp');
  if (waEl) {
    const msg = `Hi The Bakers Inn! I'd like to order:\n\n${cart.map(i => `• ${i.qty}x ${i.name} — $${(i.price*i.qty).toFixed(2)}`).join('\n')}\n\n💰 Total: Rs ${total.toFixed(2)}`;
    waEl.href = `https://wa.me/15551234567?text=${encodeURIComponent(msg)}`;
  }
}

function updateCartCount() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = total;
    el.classList.toggle('visible', total > 0);
  });
}

function openCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.add('open');
  if (overlay) overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('visible');
  document.body.style.overflow = '';
}

function proceedToCheckout() {
  if (!cart.length) { showToast('Your cart is empty!', 'error'); return; }
  const subtotal = getSubtotal();
  const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;
  const msg = `Hi The Bakers Inn! I'd like to checkout:\n\n${cart.map(i => `• ${i.qty}x ${i.name} — Rs ${(i.price*i.qty).toFixed(2)}`).join('\n')}\n\n💰 Total: Rs ${total.toFixed(2)}\n\nPlease confirm my order!`;
  window.open(`https://wa.me/15551234567?text=${encodeURIComponent(msg)}`, '_blank');
}

function toggleWishlist(btn, id) {
  btn.classList.toggle('active');
  btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
  if (btn.classList.contains('active')) {
    showToast('❤️ Added to wishlist!', 'success');
  }
}

// ──────────────────────────────────────────────
// Toast Notifications
// ──────────────────────────────────────────────
function showToast(message, type = '') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toast-out .3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ──────────────────────────────────────────────
// Navigation & Scroll
// ──────────────────────────────────────────────
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const cartToggle = document.getElementById('cartToggle');
  const cartClose = document.getElementById('cartClose');
  const cartOverlay = document.getElementById('cartOverlay');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (navbar) {
      navbar.classList.toggle('scrolled', current > 20);
    }
    lastScroll = current;
  }, { passive: true });

  // Mobile menu
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      if (isOpen) {
        mobileMenu.classList.add('open');
        mobileMenu.style.transform = 'translateX(0)';
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.remove('open');
        mobileMenu.style.transform = 'translateX(100%)';
        document.body.style.overflow = '';
      }
    });
  }

  // Cart
  if (cartToggle) cartToggle.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Close mobile menu on link click
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger && hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        mobileMenu.style.transform = 'translateX(100%)';
        document.body.style.overflow = '';
      });
    });
  }

  // Set active nav
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === current) link.classList.add('active');
  });
}

// ──────────────────────────────────────────────
// Intersection Observer for Animations
// ──────────────────────────────────────────────
function observeFadeUp(el) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  observer.observe(el);
}

function initAnimations() {
  document.querySelectorAll('.fade-up').forEach(el => observeFadeUp(el));
}

// ──────────────────────────────────────────────
// Countdown Timer
// ──────────────────────────────────────────────
function startCountdown() {
  const end = new Date('2026-03-31T23:59:59');
  function update() {
    const now = new Date();
    const diff = end - now;
    if (diff <= 0) return;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    ['d','h','m','s'].forEach((k, i) => {
      const el1 = document.getElementById(`cd1-${k}`);
      if (el1) el1.textContent = pad([d,h,m,s][i]);
    });
  }
  update();
  setInterval(update, 1000);
}

// ──────────────────────────────────────────────
// Smooth Anchor Scroll
// ──────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ──────────────────────────────────────────────
// Gallery Lightbox (for index page)
// ──────────────────────────────────────────────
function initGalleryLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  if (!lightbox) return;

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  lightbox && lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ──────────────────────────────────────────────
// Modal Quick View (used on shop page)
// ──────────────────────────────────────────────
function openProductModal(id) {
  // This function is overridden in shop.html with page-specific implementation
  // Fallback: scroll to product or redirect
  const card = document.querySelector(`[data-id="${id}"]`);
  if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ──────────────────────────────────────────────
// Init Everything
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimations();
  initSmoothScroll();
  initGalleryLightbox();
  renderCart();
  updateCartCount();

  // Re-observe any dynamically added .fade-up elements
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          if (node.classList && node.classList.contains('fade-up')) {
            observeFadeUp(node);
          }
          node.querySelectorAll && node.querySelectorAll('.fade-up').forEach(el => observeFadeUp(el));
        }
      });
    });
  });
  mutationObserver.observe(document.body, { childList: true, subtree: true });
});

// ──────────────────────────────────────────────
// PRODUCTS (Global for pages to use)
// ──────────────────────────────────────────────
window.PRODUCTS = getFallbackProducts();
