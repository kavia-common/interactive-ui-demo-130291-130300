import React from "react";
import "../../styles/common.css";

/**
 * PUBLIC_INTERFACE
 * Checkout
 * E-commerce checkout screen based on the extracted Figma design.
 * - Displays stepper and payment options (static).
 * - Emits onBack and onContinue callbacks.
 */
export default function Checkout({ onBack, onContinue }) {
  return (
    <section className="checkout" aria-label="Checkout">
      <div className="phone" role="region" aria-label="Checkout">
        <div className="status-bar">
          <div className="time">9:41</div>
          <div className="indicators" aria-hidden="true">📶 📡 🔋</div>
        </div>

        <div className="nav-bar">
          <button className="nav-btn" aria-label="Cancel" onClick={onBack}>
            <div className="block-icon" aria-hidden="true"></div>
          </button>
          <div className="title">Checkout</div>
          <div></div>
        </div>

        <div className="stepper">
          <div className="step">
            <div className="num done" aria-hidden="true"></div>
            <div className="label">Your bag</div>
          </div>
          <div className="step">
            <div className="num done" aria-hidden="true"></div>
            <div className="label">Shipping</div>
          </div>
          <div className="step">
            <div className="num current" aria-hidden="true"></div>
            <div className="label" style={{ color: "var(--color-1f2024)" }}>Payment</div>
          </div>
          <div className="step">
            <div className="num pending" aria-hidden="true"></div>
            <div className="label">Review</div>
          </div>
        </div>

        <div>
          <div className="section-head">
            <div className="title">Choose a payment method</div>
            <div className="desc">You won't be charged until you review the order on the next page</div>
          </div>

          <div className="options">
            <div className="option-card">
              <div className="row">
                <div className="radio selected" aria-hidden="true"></div>
                <div
                  className="label"
                  style={{
                    fontSize: "var(--typo-81-size)",
                    fontWeight: "var(--typo-81-weight)",
                    color: "var(--typo-81-color)",
                  }}
                >
                  Credit Card
                </div>
              </div>

              <div className="cards">
                <div className="list-item">
                  <div style={{ display: "grid", gap: 4 }}>
                    <div className="title">Mastercard</div>
                    <div className="desc">xxxx xxxx xxxx 1234</div>
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      width: 12,
                      height: 12,
                      background: "var(--color-006ffd)",
                      clipPath: "polygon(14% 52%, 0 66%, 36% 100%, 100% 24%, 85% 10%, 36% 76%)",
                    }}
                    aria-label="selected"
                  />
                </div>

                <div
                  className="list-item"
                  style={{ background: "var(--color-ffffff)", border: "0.5px solid var(--color-c5c6cc)" }}
                >
                  <div style={{ display: "grid", gap: 4 }}>
                    <div className="title">Visa</div>
                    <div className="desc">xxxx xxxx xxxx 9876</div>
                  </div>
                </div>

                <button
                  className="btn-primary"
                  style={{
                    width: 132,
                    height: 40,
                    borderRadius: 8,
                    background: "transparent",
                    color: "var(--color-006ffd)",
                    border: "1px solid var(--color-006ffd)",
                    placeSelf: "center",
                  }}
                >
                  Add new card
                </button>
              </div>

              <div className="row billing">
                <div className="checkbox" aria-hidden="true"><div className="tick"></div></div>
                <div className="desc">My billing address is the same as my shipping address</div>
              </div>
            </div>

            <div className="option-card" style={{ padding: 16 }}>
              <div className="row">
                <div className="radio" aria-hidden="true"></div>
                <div
                  className="label"
                  style={{
                    fontSize: "var(--typo-81-size)",
                    fontWeight: "var(--typo-81-weight)",
                    color: "var(--typo-81-color)",
                  }}
                >
                  Apple Pay
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <button className="btn-primary" onClick={onContinue}>Continue</button>
        </div>
      </div>
    </section>
  );
}
