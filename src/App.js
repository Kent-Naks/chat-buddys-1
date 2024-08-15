import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatList from './ChatList';
import ChatProfile from './ChatProfile';
import ChatConversation from './ChatConversation';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light'); // State for theme, default is light mode

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // Toggle between light and dark mode
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <header className="App-header">
          <img src="/path/to/logo.png" alt="Logo" className="App-logo" />
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </header>
        <div className="App-content">
          <aside className="App-sidebar">
            <ChatList />
          </aside>
          <main className="App-main">
            <Routes>
              <Route path="/profile/:id" element={<ChatProfile />} />
              <Route path="/conversation/:id" element={<ChatConversation />} />
            </Routes>
          </main>
        </div>
        <footer className="App-footer">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
