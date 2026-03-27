# 🎂 Sweet Dreams Bakery — Premium Website Prototype

A complete, production-ready premium cake bakery website prototype built with HTML5, CSS3, and vanilla JavaScript. Fully mobile-first, conversion-optimized, and WhatsApp-first for local ordering.

---

## ✅ Completed Features

### Pages
| Page | File | Description |
|------|------|-------------|
| **Homepage** | `index.html` | Hero, categories, bestsellers, gallery preview, testimonials, Instagram feed, offers, contact |
| **Shop/Menu** | `shop.html` | Full product catalog with filters, categories, sort, quick view modal |
| **Custom Cake Builder** | `builder.html` | 5-step interactive builder with live price summary |
| **Gallery** | `gallery.html` | Masonry photo gallery with lightbox and category filters |
| **Order Tracking** | `order-tracking.html` | Real-time order status with progress timeline |

### Core Features
- ✅ **Hero section** — high-quality imagery, value proposition, CTA buttons
- ✅ **Navigation** — responsive with sticky scrolled state, mobile hamburger menu
- ✅ **Shop/Menu** — product grid with filters (price, flavor, occasion, dietary), sorting, category tabs
- ✅ **Product Cards** — images, ratings, descriptions, prices, Add to Cart + WhatsApp order buttons
- ✅ **Quick View Modal** — product detail popup with full info and order actions
- ✅ **Custom Cake Builder** — 5-step wizard: Flavor → Size → Decoration → Message & Uploads → Order
- ✅ **File Upload** — drag & drop design reference uploads in builder
- ✅ **Gallery** — masonry grid, lightbox with keyboard navigation (←/→/Esc), category filters
- ✅ **Testimonials** — customer reviews with ratings and verified badges
- ✅ **Instagram Feed** — simulated feed grid with like counts and hover overlay
- ✅ **Offers/Promotions** — 3 deal cards with live countdown timer
- ✅ **Contact Section** — address, WhatsApp, email, embedded Google Map, business hours
- ✅ **WhatsApp Integration** — primary ordering channel with pre-filled message templates
- ✅ **Shopping Cart** — full sidebar cart with qty controls, totals, free delivery threshold
- ✅ **Order Tracking** — search by order ID, visual progress steps, demo orders
- ✅ **Announcement Bar** — promotional message at top
- ✅ **Newsletter Signup** — in footer with toast confirmation
- ✅ **Sticky WhatsApp Button** — animated floating action button
- ✅ **Toast Notifications** — cart adds, form submissions, errors
- ✅ **Smooth Animations** — fade-up scroll animations, hover effects, transitions
- ✅ **Fully Responsive** — mobile-first design, optimized for social media traffic
- ✅ **Persistent Cart** — cart state saved to localStorage across pages

---

## 🗂️ File Structure

```
index.html              — Homepage
shop.html               — Shop / Menu
builder.html            — Custom Cake Builder
gallery.html            — Photo Gallery
order-tracking.html     — Order Status Tracker
css/
  style.css             — Complete design system (variables, components, responsive)
js/
  app.js                — Navigation, cart, animations, product data, utilities
README.md               — This file
```

---

## 🔗 Page Routes

| Route | Purpose |
|-------|---------|
| `index.html` | Homepage |
| `shop.html` | Full shop catalog |
| `shop.html?cat=birthday` | Pre-filtered by category |
| `builder.html` | Custom cake builder |
| `gallery.html` | Photo gallery |
| `order-tracking.html` | Order tracker |
| `order-tracking.html?id=SD1A2B3` | Track specific order |

---

## 🗃️ Data Models

### Table: `orders`
| Field | Type | Description |
|-------|------|-------------|
| `order_id` | text | Human-readable ID (e.g., SD1A2B3) |
| `customer_name` | text | Customer full name |
| `customer_phone` | text | WhatsApp/phone number |
| `customer_email` | text | Email address |
| `delivery_date` | text | Requested delivery date |
| `delivery_address` | text | Delivery address |
| `cake_details` | rich_text | JSON with cake customization |
| `total_price` | number | Order total (USD) |
| `status` | text | received/preparing/baking/decorating/ready/delivering/delivered |
| `type` | text | custom or standard |
| `notes` | rich_text | Special instructions |

### Table: `newsletter`
| Field | Type | Description |
|-------|------|-------------|
| `email` | text | Subscriber email |
| `subscribed_at` | datetime | Signup timestamp |
| `active` | bool | Active subscription |

---

## 🎨 Design System

### Color Palette
- **Rose**: `#E8A4B8` (primary brand color)
- **Rose Deep**: `#C97A96` (CTAs, accents)
- **Gold**: `#C9A84C` (premium badges, accents)
- **Cream**: `#FEF9F0` (warm backgrounds)
- **Blush**: `#FDF0F4` (light section backgrounds)
- **Charcoal**: `#2C2C2C` (text)

### Typography
- **Serif**: Playfair Display (headings)
- **Sans**: Inter (body)
- **Script**: Dancing Script (labels, decorative)

---

## 📱 WhatsApp Integration

All order CTAs are pre-configured to send formatted messages to `+1 (555) 123-4567`. Replace with your actual WhatsApp business number in:
- All `href="https://wa.me/15551234567?text=..."` links
- The cart sidebar WhatsApp button
- The sticky floating button

---

## 🚀 Recommended Next Steps

1. **Replace WhatsApp number** — Update `15551234567` throughout with your real number
2. **Update bakery address** — Change the contact info and embedded map
3. **Add real product images** — Replace placeholder image URLs with your cake photography
4. **Payment gateway** — Integrate Stripe/PayPal for online checkout (requires backend)
5. **Real-time order updates** — Implement baker dashboard to update order status via the `orders` table API
6. **Email notifications** — Add email confirmation when order is placed
7. **WhatsApp Business API** — Automate order confirmations via WhatsApp Business API
8. **Instagram API** — Replace simulated Instagram feed with real Instagram Graph API data
9. **SEO optimization** — Add structured data (JSON-LD) for local business and product schema
10. **Analytics** — Add Google Analytics / Meta Pixel for conversion tracking

---

## ⚡ Performance Notes

- Images use `loading="lazy"` for deferred loading
- Fonts use `rel="preconnect"` for faster loading
- CSS uses CSS custom properties for consistency
- Animations use Intersection Observer (no performance impact)
- Cart persists via localStorage (no server required)

---

*Built with ❤️ for Sweet Dreams Bakery — A premium, conversion-optimized bakery website prototype.*
