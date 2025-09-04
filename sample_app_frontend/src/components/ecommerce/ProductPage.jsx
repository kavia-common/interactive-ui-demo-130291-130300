import React from "react";
import "../../styles/common.css";

/**
 * PUBLIC_INTERFACE
 * ProductPage
 * E-commerce product detail screen based on the extracted Figma design.
 * - Shows photo, details, size/color options and an Add to bag button.
 * - onAddToBag and onBack are passed in via props.
 */
export default function ProductPage({ product, onAddToBag, onBack }) {
  const name = product?.name || "Amazing T-Shirt";
  const price = product?.price || "€ 12.00";

  return (
    <section className="product-page" aria-label="Product Page">
      <div className="phone" role="region" aria-label="Product Page">
        <div className="photo">
          <div
            className="block-icon"
            style={{ width: 32, height: 32, borderRadius: 6, background: "var(--color-b4dbff)" }}
          />
        </div>
        <div className="details">
          <div className="title-price">
            <div className="prod-title">
              <div className="name">{name}</div>
              <div className="price">{price}</div>
            </div>
            <button className="nav-btn" aria-label="Back to home" onClick={onBack}>
              <div className="block-icon" aria-hidden="true"></div>
            </button>
          </div>

          <p className="desc">
            The perfect T-shirt for when you want to feel comfortable but still stylish. Amazing for all ocasions.
            Made of 100% cotton fabric in four colours. Its modern style gives a lighter look to the outfit. Perfect for the warmest days.
          </p>

          <div className="options">
            <div className="opt-group">
              <div className="opt-label">Size</div>
              <div className="tags">
                <span className="tag">XS</span>
                <span className="tag focus">S</span>
                <span className="tag">M</span>
                <span className="tag">L</span>
                <span className="tag">XL</span>
              </div>
            </div>

            <div className="opt-group">
              <div className="opt-label">Color</div>
              <div className="colors">
                <span className="color" style={{ background: "var(--color-1f2024)" }}></span>
                <span className="color" style={{ background: "var(--color-71727a)" }}></span>
                <span className="color gray">
                  <span className="check"></span>
                </span>
                <span className="color" style={{ background: "var(--color-e8e9f1)" }}></span>
              </div>
            </div>
          </div>

          <div className="cta">
            <button className="btn-primary" onClick={() => onAddToBag?.(product)}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
