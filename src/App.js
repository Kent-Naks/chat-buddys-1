import React from 'react'; // Importing React library
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router components for routing
import ChatList from './ChatList'; // Importing the ChatList component
import ChatProfile from './ChatProfile'; // Importing the ChatProfile component
import ChatConversation from './ChatConversation'; // Importing the ChatConversation component
import './App.css'; // Importing the CSS file for styling

function App() {
  return (
      // Wrapping the application with the Router component to enable routing
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ChatList />} />
          <Route path="/profile/:id" element={<ChatProfile />} />
          <Route path="/conversation/:id" element={<ChatConversation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Exporting the App component as the default export
