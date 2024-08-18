

Chat-Buddy is a single-page React application designed to simulate an AI-powered chat platform. Users can log in, view a list of AI chat buddies, select a buddy to view their profile, and engage in conversations. This project showcases the use of React components, client-side routing with React Router, and state management.

Features

- AI Chat Buddy List:** View a list of only 2 available AI chat buddies.
- Profile View: See detailed profiles of each chat buddy.
- Chat Interface: Engage in conversations with selected chat buddies.
- Client-Side Routing: Navigation through different pages using React Router.
- State Management: Manage application state using React’s `useState` and `useEffect` hooks.
- Data Fetching: Fetch chat buddy data and conversations from a mock server.

 Installation

1. Clone the repository:

2. Install dependencies:
    npm install
    

3. Run the mock server:
    npm install -g json-server
    json-server --watch data/db.json --port 3001


4. Start the application:
    npm start


5. Open your browser:
    Navigate to `http://localhost:3000` to view the app.

## Project Structure

```plaintext
chat-buddy/
──build
──node_modules

── public/
   ── index.html

── src/
   ── App.css
   ── App.js
   ── ChatConversation.css
   ── ChatConversation.js 
   ── ChatList.js
   ── ChatProfile.js
   ── index.css
   ── index.js

── .gitignore
── db.json
── package-lock.json
── package.json
── READ.ME