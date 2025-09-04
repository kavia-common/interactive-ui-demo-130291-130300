import React from "react";
import "../../styles/common.css";

/**
 * PUBLIC_INTERFACE
 * Home
 * E-commerce home/feed screen based on the extracted Figma design.
 * - Renders banner, product sections, and bottom tabbar.
 * - Emits navigation events via props: onOpenProduct, onOpenCart.
 */
export default function Home({ onOpenProduct, onOpenCart }) {
  return (
    <section className="home" aria-label="E-commerce Home">
      <div className="phone" role="region" aria-label="Home">
        <div className="status-bar">
          <div className="time">9:41</div>
          <div className="indicators" aria-hidden="true">📶 📡 🔋</div>
        </div>

        <div className="topbar">
          <div className="left">
            <div className="block-icon" aria-hidden="true" title="Search"></div>
          </div>
          <div></div>
          <div className="right">
            <div className="block-icon" aria-hidden="true" title="Wishlist"></div>
            <button
              className="badge-wrap"
              title="Bag"
              onClick={onOpenCart}
              style={{ background: "transparent", border: "none", cursor: "pointer" }}
            >
              <div className="block-icon" aria-hidden="true"></div>
              <div className="badge" aria-label="9 unread">9</div>
            </button>
          </div>
        </div>

        <div className="feed">
          {/* Banner */}
          <div className="banner">
            <div className="image">
              <div
                className="block-icon"
                style={{ width: 32, height: 32, borderRadius: 6, background: "var(--color-b4dbff)" }}
              />
            </div>
            <div className="pagination-dots" style={{ margin: "-16px 0 0 0" }}>
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          {/* Section: Perfect for you */}
          <div className="section">
            <div className="inner">
              <div className="section-header">
                <div className="title">Perfect for you</div>
                <div className="see-more">See more</div>
              </div>
              <div className="cards">
                {[
                  { name: "Amazing T-shirt", price: "€ 12.00" },
                  { name: "Faboulous Pants", price: "€ 15.00" },
                  { name: "Amazing T-shirt", price: "€ 12.00" },
                  { name: "Faboulous Pants", price: "€ 15.00" },
                ].map((p, idx) => (
                  <article
                    key={idx}
                    className="product-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => onOpenProduct(p)}
                    onKeyDown={(e) => e.key === "Enter" && onOpenProduct(p)}
                    aria-label={`${p.name}, ${p.price}`}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="image">
                      <div
                        className="block-icon"
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 6,
                          background: "var(--color-b4dbff)",
                        }}
                      />
                    </div>
                    <div className="content">
                      <div className="name">{p.name}</div>
                      <div className="price">{p.price}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Section: For this summer */}
          <div className="section summer">
            <div className="inner">
              <div className="section-header">
                <div className="title">For this summer</div>
                <div className="see-more">See more</div>
              </div>
              <div className="cards">
                {[
                  { name: "Amazing T-shirt", price: "€ 12.00" },
                  { name: "Faboulous Pants", price: "€ 15.00" },
                ].map((p, idx) => (
                  <article
                    key={idx}
                    className="product-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => onOpenProduct(p)}
                    onKeyDown={(e) => e.key === "Enter" && onOpenProduct(p)}
                    aria-label={`${p.name}, ${p.price}`}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="image">
                      <div
                        className="block-icon"
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 6,
                          background: "var(--color-b4dbff)",
                        }}
                      />
                    </div>
                    <div className="content">
                      <div className="name">{p.name}</div>
                      <div className="price">{p.price}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="tabbar" role="tablist" aria-label="Bottom tabs">
          {[
            { key: "explore", label: "Explore", active: true },
            { key: "categories", label: "Categories" },
            { key: "stores", label: "Stores" },
            { key: "profile", label: "Profile" },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`tab ${tab.active ? "active" : ""}`}
              data-tab={tab.key}
              aria-selected={tab.active ? "true" : "false"}
              style={{ background: "transparent", border: "none" }}
            >
              <div className="block-icon" aria-hidden="true" style={tab.key === "categories" ? { width: 20, height: 20 } : undefined}></div>
              <div className="label">{tab.label}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
