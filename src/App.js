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
        <header className={`App-header ${theme}`}>
          <img src="https://i.pinimg.com/564x/14/72/52/147252b2331f826b7cf2a7b7d32368ce.jpg" alt="Chat Buddys" className="App-logo" />
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </header>
        <div className={`App-content ${theme}`}>
          <aside className={`App-sidebar ${theme}`}>
            <ChatList />
          </aside>
          <main className={`App-main ${theme}`}>
            <Routes>
              <Route path="/profile/:id" element={<ChatProfile />} />
              <Route path="/conversation/:id" element={<ChatConversation />} />
            </Routes>
          </main>
        </div>
        <footer className={`App-footer ${theme}`}>
          <p>&copy; 2024 Chat Buddys. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
