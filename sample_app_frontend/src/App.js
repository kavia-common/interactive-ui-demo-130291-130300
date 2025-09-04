import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import ChatScreen from './components/ChatScreen';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './styles/ecommerce.css';
import EcommerceShowcase from './components/ecommerce/EcommerceShowcase';
import Home from './components/ecommerce/Home';
import ProductPage from './components/ecommerce/ProductPage';
import Cart from './components/ecommerce/Cart';
import Checkout from './components/ecommerce/Checkout';

/**
 * PUBLIC_INTERFACE
 * App
 * Root component managing theme and a simple view-state navigation.
 * Views: "login" -> "dashboard" -> "chat"
 */
function App() {
  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('login'); // "login" | "dashboard" | "chat" | "ecommerce"
  const [user, setUser] = useState(null);

  // E-commerce subview and state
  const [ecomView, setEcomView] = useState('home'); // "home" | "product" | "cart" | "checkout"
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Apply theme at document level
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Sync page background for E-commerce showcase
  useEffect(() => {
    const prev = document.body.style.background;
    if (view === 'ecommerce') {
      document.body.style.background = "var(--color-f8f9fe)";
    } else {
      document.body.style.background = "";
    }
    return () => {
      document.body.style.background = prev;
    };
  }, [view]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Handlers to transition between views
  const handleLogin = (userObj) => {
    setUser(userObj);
    setView('dashboard');
  };

  const handleSignOut = () => {
    setUser(null);
    setView('login');
  };

  const handleOpenChat = () => {
    setView('chat');
  };

  // E-commerce navigation handlers
  const openEcommerce = () => {
    setView('ecommerce');
    setEcomView('home');
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setEcomView('product');
  };

  const addToBag = (product) => {
    const p = product || selectedProduct || { id: 'tshirt', name: 'Amazing T-shirt', price: '€ 12.00', unit: 12.0 };
    const unit = typeof p.unit === 'number' ? p.unit : parseFloat(String(p.price || '0').replace(/[^0-9.]/g, '')) || 0;
    setCartItems((prev) => {
      const id = p.id || p.name;
      const found = prev.find((it) => it.id === id);
      if (found) {
        return prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it));
      }
      return [...prev, { id, name: p.name, details: 'Black / M', unit, qty: 1 }];
    });
    // Optionally navigate to cart
    setEcomView('cart');
  };

  const openCart = () => {
    setEcomView('cart');
  };

  const backFromProduct = () => {
    setEcomView('home');
  };

  const backFromCart = () => {
    // Go back to home
    setEcomView('home');
  };

  const proceedCheckout = () => {
    setEcomView('checkout');
  };

  const backFromCheckout = () => {
    setEcomView('cart');
  };

  const currentScreen = useMemo(() => {
    switch (view) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'dashboard':
        return (
          <div>
            <Dashboard
              user={user}
              onOpenChat={handleOpenChat}
              onSignOut={handleSignOut}
            />
            <div style={{ maxWidth: 960, margin: "24px auto", padding: "0 24px" }}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={openEcommerce}
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
                  Open E-commerce Showcase
                </button>
              </div>
            </div>
          </div>
        );
      case 'chat':
        return (
          <div>
            <div style={{ position: 'fixed', top: 20, left: 20, zIndex: 5 }}>
              <button
                type="button"
                onClick={() => setView('dashboard')}
                style={{
                  padding: '8px 12px',
                  borderRadius: 8,
                  border: '1px solid #e0e0e0',
                  background: 'white',
                  cursor: 'pointer',
                }}
              >
                ← Back to Dashboard
              </button>
            </div>
            <ChatScreen />
          </div>
        );
      case 'ecommerce':
        return (
          <EcommerceShowcase>
            {ecomView === 'home' && (
              <>
                <Home onOpenProduct={openProduct} onOpenCart={openCart} />
                <ProductPage product={selectedProduct} onAddToBag={addToBag} onBack={backFromProduct} />
                <Cart initialItems={cartItems} onBack={backFromCart} onCheckout={proceedCheckout} />
              </>
            )}
            {ecomView === 'product' && (
              <>
                <Home onOpenProduct={openProduct} onOpenCart={openCart} />
                <ProductPage product={selectedProduct} onAddToBag={addToBag} onBack={backFromProduct} />
                <Cart initialItems={cartItems} onBack={backFromCart} onCheckout={proceedCheckout} />
              </>
            )}
            {ecomView === 'cart' && (
              <>
                <Home onOpenProduct={openProduct} onOpenCart={openCart} />
                <Cart initialItems={cartItems} onBack={backFromCart} onCheckout={proceedCheckout} />
                <Checkout onBack={backFromCheckout} onContinue={() => setEcomView('home')} />
              </>
            )}
            {ecomView === 'checkout' && (
              <>
                <Home onOpenProduct={openProduct} onOpenCart={openCart} />
                <Cart initialItems={cartItems} onBack={backFromCart} onCheckout={proceedCheckout} />
                <Checkout onBack={backFromCheckout} onContinue={() => setEcomView('home')} />
              </>
            )}
          </EcommerceShowcase>
        );
      default:
        return <Login onLogin={handleLogin} />;
    }
  }, [view, user, ecomView, selectedProduct, cartItems]);

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 0, paddingBottom: 0 }}>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          style={{ position: 'fixed', zIndex: 5 }}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>

      {/* Only the selected screen is rendered */}
      {currentScreen}
    </div>
  );
}

export default App;
