import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import ChatScreen from './components/ChatScreen';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

/**
 * PUBLIC_INTERFACE
 * App
 * Root component managing theme and a simple view-state navigation.
 * Views: "login" -> "dashboard" -> "chat"
 */
function App() {
  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('login'); // "login" | "dashboard" | "chat"
  const [user, setUser] = useState(null);

  // Apply theme at document level
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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

  const currentScreen = useMemo(() => {
    switch (view) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'dashboard':
        return (
          <Dashboard
            user={user}
            onOpenChat={handleOpenChat}
            onSignOut={handleSignOut}
          />
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
      default:
        return <Login onLogin={handleLogin} />;
    }
  }, [view, user]);

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
