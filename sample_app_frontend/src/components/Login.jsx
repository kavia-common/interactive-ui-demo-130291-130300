import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Login
 * A minimal login form UI to demonstrate step-by-step navigation.
 * In a real app this would authenticate via API; here it just triggers onLogin with a fake user.
 */
export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const canSubmit = email.trim().length > 0 && password.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    // Fake auth success
    onLogin({ email });
  };

  return (
    <main style={{ maxWidth: 420, margin: "80px auto", padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>Welcome</h1>
      <p style={{ marginTop: 0, color: "#666" }}>Please sign in to continue.</p>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontWeight: 600 }}>Email</span>
          <input
            type="email"
            value={email}
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #e0e0e0",
              fontSize: 14,
            }}
            required
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontWeight: 600 }}>Password</span>
          <input
            type="password"
            value={password}
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #e0e0e0",
              fontSize: 14,
            }}
            required
          />
        </label>

        <button
          type="submit"
          disabled={!canSubmit}
          style={{
            marginTop: 8,
            padding: "10px 14px",
            borderRadius: 8,
            border: "none",
            background: canSubmit ? "var(--button-bg, #1976d2)" : "#9e9e9e",
            color: "#fff",
            fontWeight: 600,
            cursor: canSubmit ? "pointer" : "not-allowed",
          }}
          aria-disabled={!canSubmit}
        >
          Sign In
        </button>
      </form>
    </main>
  );
}
