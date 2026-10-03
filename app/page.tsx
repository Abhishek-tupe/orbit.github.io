'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Check,
  Menu,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react'

const BASE_PATH = '/orbit.github.io'

const products = [
  {
    id: 1,
    name: 'Aura 01',
    category: 'Casual',
    price: 15700,
    color: 'Sandstone',
    tone: 'amber',
    image: `${BASE_PATH}/glasses-casual.png`,
    description: 'Soft geometry. Everyday clarity.',
  },
  {
    id: 2,
    name: 'Mono 02',
    category: 'Minimal',
    price: 17500,
    color: 'Ink black',
    tone: 'black',
    image: `${BASE_PATH}/glasses-minimal.png`,
    description: 'Quiet confidence in every line.',
  },
  {
    id: 3,
    name: 'Orbit 03',
    category: 'Funky',
    price: 13700,
    color: 'Electric blue',
    tone: 'blue',
    image: `${BASE_PATH}/glasses-funky.png`,
    description: 'A little more you.',
  },
  {
    id: 4,
    name: 'Luna 04',
    category: 'Classic',
    price: 19600,
    color: 'Olive smoke',
    tone: 'olive',
    image: `${BASE_PATH}/glasses-classic.png`,
    description: 'Timeless, with a softer edge.',
  },
]

const categories = [
  'All frames',
  'Casual',
  'Minimal',
  'Funky',
  'Classic',
]

export default function Page() {
  const [category, setCategory] = useState('All frames')
  const [cart, setCart] = useState<number[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [sellOpen, setSellOpen] = useState(false)
  const [invoice, setInvoice] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const filtered = useMemo(
    () =>
      category === 'All frames'
        ? products
        : products.filter((p) => p.category === category),
    [category]
  )

  const cartItems = products.filter((p) => cart.includes(p.id))

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  )

  const addToCart = (id: number) => {
    setCart((current) =>
      current.includes(id) ? current : [...current, id]
    )

    setCartOpen(true)
  }

  return (
    <main className="site-shell">
      {/* Announcement */}
      <div className="announcement">
        <Sparkles size={14} />

        <span>
          Free express shipping on orders over ₹12,500
        </span>

        <ArrowRight size={13} />
      </div>

      {/* Navigation */}
      <header className="nav-wrap">
        <a
          className="wordmark"
          href="#top"
          aria-label="optic home"
        >
          optic<span>.</span>
        </a>

        <nav
          className={
            menuOpen
              ? 'nav-links mobile-visible'
              : 'nav-links'
          }
          aria-label="Primary navigation"
        >
          <a
            href="#shop"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </a>

          <a
            href="#story"
            onClick={() => setMenuOpen(false)}
          >
            Our story
          </a>

          <a
            href="#sell"
            onClick={() => setMenuOpen(false)}
          >
            Sell your frames
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button"
            aria-label="Search"
          >
            <Search size={19} />
          </button>

          <button
            className="bag-button"
            onClick={() => setCartOpen(true)}
            aria-label={`Shopping bag with ${cart.length} items`}
          >
            <ShoppingBag size={19} />
            <span>{cart.length}</span>
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={21} />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            OPTICAL OBJECTS / 2026
          </p>

          <h1>
            See the
            <br />
            <em>beautiful</em> side.
          </h1>

          <p className="hero-sub">
            Frames designed to feel like yours from the
            very first look. Considered shapes, honest
            materials, and a point of view.
          </p>

          <div className="hero-actions">
            <a
              className="button button-dark"
              href="#shop"
            >
              Shop all frames
              <ArrowRight size={16} />
            </a>

            <button
              className="text-link"
              onClick={() => setSellOpen(true)}
            >
              Sell your frames
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        <div className="hero-art">
          <img
            src={`${BASE_PATH}/optical-hero.png`}
            alt="Sculptural sunglasses arranged on an ivory pedestal"
          />

          <div className="art-label">
            New season
            <br />
            <strong>Studio 06</strong>
          </div>
        </div>
      </section>

      {/* Brand ticker */}
      <section
        className="ticker"
        aria-label="Brand values"
      >
        <span>Made for looking</span>
        <span>•</span>
        <span>Designed in New York</span>
        <span>•</span>
        <span>Better materials</span>
        <span>•</span>
        <span>Made for looking</span>
      </section>

      {/* Shop */}
      <section
        className="shop-section"
        id="shop"
      >
        <div className="section-intro">
          <div>
            <p className="eyebrow">
              THE COLLECTION
            </p>

            <h2>Find your frame.</h2>
          </div>

          <p>
            Every pair is made in small batches, with a
            generous fit and an easy return policy.
          </p>
        </div>

        {/* Categories */}
        <div className="category-row">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? 'category active'
                  : 'category'
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="product-grid">
          {filtered.map((product, index) => (
            <article
              className={`product-card tone-${product.tone}`}
              key={product.id}
            >
              <div className="product-visual">
                <img
                  className="product-image"
                  src={product.image}
                  alt={`${product.name} ${product.category.toLowerCase()} eyewear`}
                />

                <span className="product-index">
                  0{index + 1}
                </span>

                <button
                  className="quick-add"
                  onClick={() =>
                    addToCart(product.id)
                  }
                  aria-label={`Add ${product.name} to bag`}
                >
                  <Plus size={17} />
                </button>
              </div>

              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>

                  <p>{product.description}</p>
                </div>

                <strong>
                  ₹{product.price.toLocaleString('en-IN')}
                </strong>
              </div>

              <div className="product-meta">
                <span>{product.category}</span>
                <span>{product.color}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Story */}
      <section
        className="story-section"
        id="story"
      >
        <div className="story-number">
          01
        </div>

        <div className="story-content">
          <p className="eyebrow">
            OUR APPROACH
          </p>

          <h2>
            Good design
            <br />
            <em>stays with you.</em>
          </h2>

          <p>
            We make less, but make it matter. Each frame
            is cut from bio-based acetate, finished by hand,
            and designed to live in your rotation for years
            — not seasons.
          </p>

          <a
            className="text-link"
            href="#sell"
          >
            Read our story
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="story-stat">
          <span>94%</span>

          <p>
            of customers say their optic frames became
            their daily pair.
          </p>
        </div>
      </section>

      {/* Sell section */}
      <section
        className="sell-section"
        id="sell"
      >
        <div className="sell-card">
          <div>
            <p className="eyebrow">
              THE CIRCULAR EDIT
            </p>

            <h2>
              Give your old frames
              <br />
              <em>a second look.</em>
            </h2>

            <p>
              Send us your gently loved frames. We
              authenticate, refresh, and find them a new
              home — while you earn up to 70% of the resale
              value.
            </p>

            <button
              className="button button-dark"
              onClick={() => setSellOpen(true)}
            >
              Start selling
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="sell-orbit">
            <div className="orbit-ring" />

            <div className="orbit-glass glasses">
              <span />
              <span />
              <i />
              <i />
            </div>

            <span className="orbit-tag">
              Reuse / 02
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <a
          className="wordmark"
          href="#top"
        >
          optic<span>.</span>
        </a>

        <p>
          Better things to look at.
        </p>

        <div>
          <a href="#shop">Shop</a>
          <a href="#story">About</a>
          <a href="#sell">Sell</a>
        </div>
      </footer>

      {/* Shopping Cart */}
      {cartOpen && (
        <div
          className="overlay"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-head">
              <h2>
                Your bag{' '}
                <span>{cart.length}</span>
              </h2>

              <button
                onClick={() =>
                  setCartOpen(false)
                }
                aria-label="Close bag"
              >
                <X size={21} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="empty-bag">
                <ShoppingBag size={29} />

                <p>
                  Your bag is waiting.
                </p>

                <button
                  className="text-link"
                  onClick={() =>
                    setCartOpen(false)
                  }
                >
                  Keep browsing
                  <ArrowRight size={15} />
                </button>
              </div>
            ) : (
              <>
                <div className="drawer-items">
                  {cartItems.map((item) => (
                    <div
                      className="drawer-item"
                      key={item.id}
                    >
                      <div className={`mini-visual tone-${item.tone}`}>
                        <img
                          className="cart-product-image"
                          src={item.image}
                          alt={`${item.name} ${item.category} eyewear`}
                          />
                      </div>

                      <div>
                        <strong>
                          {item.name}
                        </strong>

                        <p>
                          {item.color}
                        </p>
                      </div>

                      <span>
                        ₹
                        {item.price.toLocaleString(
                          'en-IN'
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="checkout">
                  <div>
                    <span>Subtotal</span>

                    <strong>
                      ₹
                      {total.toLocaleString(
                        'en-IN'
                      )}
                    </strong>
                  </div>

                  <button
                    className="button button-dark"
                    onClick={() => {
                      setCartOpen(false)
                      setInvoice(true)
                    }}
                  >
                    Checkout
                    <ArrowRight size={16} />
                  </button>

                  <small>
                    Taxes and shipping calculated at
                    checkout.
                  </small>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {/* Sell Modal */}
      {sellOpen && (
        <div className="modal-layer">
          <div className="sell-modal">
            <button
              className="modal-close"
              onClick={() =>
                setSellOpen(false)
              }
              aria-label="Close selling form"
            >
              <X size={20} />
            </button>

            <p className="eyebrow">
              THE CIRCULAR EDIT
            </p>

            <h2>
              What are you ready
              <br />
              <em>to pass on?</em>
            </h2>

            <p>
              Tell us about your frames and we&apos;ll
              send a free shipping label.
            </p>

            <label>
              Frame brand

              <input
                placeholder="e.g. optic, Ray-Ban..."
              />
            </label>

            <label>
              Your email

              <input
                type="email"
                placeholder="you@example.com"
              />
            </label>

            <button
              className="button button-dark"
              onClick={() =>
                setSellOpen(false)
              }
            >
              Get my estimate
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Invoice / Order Confirmation */}
      {invoice && (
        <div className="modal-layer">
          <div className="invoice-modal">
            <div className="invoice-check">
              <Check size={22} />
            </div>

            <p className="eyebrow">
              ORDER CONFIRMED
            </p>

            <h2>
              Thank you for
              <br />
              <em>
                seeing things differently.
              </em>
            </h2>

            <p>
              Your frames are on their way. We&apos;ve
              sent the details to your inbox.
            </p>

            <div className="invoice-lines">
              <div>
                <span>Invoice</span>

                <strong>
                  #OP-2026-042
                </strong>
              </div>

              <div>
                <span>Items</span>

                <strong>
                  {cart.length} frame
                  {cart.length === 1 ? '' : 's'}
                </strong>
              </div>

              <div>
                <span>Total</span>

                <strong>
                  ₹
                  {total.toLocaleString(
                    'en-IN'
                  )}
                </strong>
              </div>
            </div>

            <button
              className="button button-dark"
              onClick={() => {
                setInvoice(false)
                setCart([])
              }}
            >
              Done
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
