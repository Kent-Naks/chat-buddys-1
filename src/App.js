import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatList from './ChatList';
import ChatProfile from './ChatProfile';
import ChatConversation from './ChatConversation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="/path/to/logo.png" alt="Chat Buddys" className="App-logo" />
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
          <p>&copy; 2024 Chat Buddys. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
