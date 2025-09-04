import React, { useMemo, useState } from "react";
import "../../styles/common.css";

/**
 * PUBLIC_INTERFACE
 * Cart
 * E-commerce cart screen based on the extracted Figma design.
 * - Supports quantity increment/decrement and auto-updated totals.
 * - Accepts initialItems and emits onCheckout.
 */
export default function Cart({ initialItems, onBack, onCheckout }) {
  const seed = useMemo(
    () =>
      initialItems && initialItems.length
        ? initialItems
        : [
            { id: "tshirt", name: "Amazing T-shirt", details: "Black / M", unit: 12.0, qty: 1 },
            { id: "pants", name: "Faboulous Pants", details: "Blue / 42", unit: 15.0, qty: 1 },
            { id: "jacket", name: "Stunning Jacket", details: "Blue / M", unit: 18.0, qty: 1 },
            { id: "shoes", name: "Wonderful Shoes", details: "Green / 39", unit: 18.0, qty: 1 },
          ],
    [initialItems]
  );
  const [items, setItems] = useState(seed);

  const total = items.reduce((sum, it) => sum + it.unit * it.qty, 0);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((it) => {
        if (it.id !== id) return it;
        const nextQty = Math.max(1, it.qty + delta);
        return { ...it, qty: nextQty };
      })
    );
  };

  return (
    <section className="cart" aria-label="Cart">
      <div className="phone" role="region" aria-label="Cart">
        <div className="status-bar">
          <div className="time">9:41</div>
          <div className="indicators" aria-hidden="true">📶 📡 🔋</div>
        </div>

        <div className="nav-bar">
          <button className="nav-btn" aria-label="Back" onClick={onBack}>
            <div className="block-icon" aria-hidden="true"></div>
          </button>
          <div className="title">Your bag</div>
          <div></div>
        </div>

        <div className="content">
          {items.map((it, idx) => (
            <React.Fragment key={it.id}>
              <div className="cart-item">
                <div className="thumb">
                  <div
                    className="block-icon"
                    style={{ width: 32, height: 32, borderRadius: 6, background: "var(--color-b4dbff)" }}
                  />
                </div>
                <div className="meta">
                  <div>
                    <div className="name">{it.name}</div>
                    <div className="details">{it.details}</div>
                  </div>
                  <div className="row">
                    <div className="quantity">
                      <button className="btn" title="Decrease" onClick={() => updateQty(it.id, -1)}>-</button>
                      <div className="value" aria-live="polite">{it.qty}</div>
                      <button className="btn" title="Increase" onClick={() => updateQty(it.id, +1)}>+</button>
                    </div>
                    <div className="price">€ {(it.unit * it.qty).toFixed(2)}</div>
                  </div>
                </div>
              </div>

              {idx < items.length - 1 && <div className="divider"></div>}
            </React.Fragment>
          ))}
        </div>

        <div className="summary">
          <div className="row">
            <div className="label">Total</div>
            <div className="value">€ {total.toFixed(2)}</div>
          </div>
          <div className="cta">
            <button className="btn-primary" style={{ width: "100%" }} onClick={() => onCheckout?.(items, total)}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
