# ChatBuddys

ChatBuddys is a web application where users can engage in conversations with virtual buddies on various topics. Each buddy has unique personality traits, interests, and expertise in different topics. Users can browse through the list of buddies, view their profiles, and start conversations on a wide range of topics.

## Features

[A]Buddy Profiles: View detailed profiles of each chat buddy, including their interests and personality traits.
[B]Dynamic Conversations**: Engage in conversations on topics such as politics, emotions, science, technology, philosophy, entertainment, sports, travel, history, and food.
[C]Topic Selection**: Users can select topics to discuss with each buddy, making each conversation unique.
[D]AI-Driven Responses**: Buddies respond to user inputs with AI-generated messages, providing facts, asking questions, and offering insights.
[E]Interactive Questions**: Buddies ask questions during conversations to keep the dialogue engaging and personalized.

## Project Structure

[A]public/: Contains static files like `index.html` and images.
[B]src/: Contains the source code for the application.
[C]components/`**: Reusable components like `ChatList`, `ChatProfile`, and `ChatConversation`.
[D]App.js`**: Main application component.
[E]index.js`**: Entry point for React.
[F]index.css`**: Global styles for the application.
[G]db.json`**: Local JSON database simulating an API with buddies and conversation data.

## Installation

1.Clone the repository:
   git clone https://github.com/your-username/chatbuddys.git
2.Navigate to the project directory:
  cd chatbuddys
3.Install dependencies:
  npm install
4.Start the development server:
  npm start

The application should now be running at http://localhost:3000.

## Usage
(a) Browse Buddies: Open the app and browse through the list of available buddies.
(b) View Profiles: Click on a buddy's name or picture to view their profile.
(c) Start a Conversation: Choose a topic from the profile page to start a conversation with the selected buddy.
(d) Interactive Chat: Engage with the buddy, answering their questions and learning from their responses.

## Technologies used
(a) React: Frontend library for building user interfaces.
(b) React Router: For handling navigation between different components.
(c) JSON Server: Simulates a REST API using a db.json file.