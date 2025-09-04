import React from "react";
import "../../styles/common.css";

/**
 * PUBLIC_INTERFACE
 * EcommerceShowcase
 * A combined "template" section that mirrors the extracted layout:
 * - Title/header "Templates / E-commerce"
 * - Renders a single active artboard (screen) via its child content
 * Consumers should pass only the active screen as children.
 */
export default function EcommerceShowcase({ children }) {
  return (
    <main className="screen-grid" style={{ background: "var(--color-f8f9fe)" }}>
      <section className="screen-title header">
        <div className="icon">
          <div className="block-icon" aria-hidden="true"></div>
        </div>
        <div>
          <div className="overline">Templates</div>
          <div className="page-title">E-commerce</div>
        </div>
      </section>

      {children}
    </main>
  );
}
