import React from "react";

/**
 * PUBLIC_INTERFACE
 * Dashboard
 * A simple dashboard hub to demonstrate view switching to other screens.
 */
export default function Dashboard({ user, onOpenChat, onSignOut }) {
  return (
    <main style={{ maxWidth: 960, margin: "40px auto", padding: 24 }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ margin: 0 }}>Dashboard</h1>
        <button
          type="button"
          onClick={onSignOut}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid #e0e0e0",
            background: "white",
            cursor: "pointer",
          }}
        >
          Sign out
        </button>
      </header>

      <section style={{ marginTop: 24 }}>
        <p style={{ color: "#666" }}>
          Signed in as <strong>{user?.email ?? "unknown"}</strong>
        </p>

        <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={onOpenChat}
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border: "none",
              background: "var(--button-bg, #1976d2)",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Open Chat
          </button>

          <button
            type="button"
            disabled
            title="Placeholder"
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border: "none",
              background: "#9e9e9e",
              color: "#fff",
              fontWeight: 600,
              cursor: "not-allowed",
            }}
          >
            Items (Coming soon)
          </button>
        </div>
      </section>
    </main>
  );
}
