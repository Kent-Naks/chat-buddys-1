import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ChatProfile() {
  const { id } = useParams(); // Extracts the 'id' from the URL parameters
  const navigate = useNavigate(); // Provides navigation capabilities

  React.useEffect(() => {
    // Fetch data for the chat profile based on 'id'
    fetch(`/buddies/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Handle the data if necessary
      })
      .catch(err => {
        console.error("Fetch error:", err);
      });
  }, [id]);

  const handleTopicClick = (topic) => {
        // Navigates to the conversation page with the selected topic
    navigate(`/conversation/${id}?topic=${topic}`);
  };

  return (
    <div>
      <h1>Chat Profile</h1>
      <p>Choose a conversation topic:</p>
      <ul>
        <li><button onClick={() => handleTopicClick('political')}>Political</button></li>
        <li><button onClick={() => handleTopicClick('emotional')}>Emotional</button></li>
        <li><button onClick={() => handleTopicClick('scientific')}>Scientific</button></li>
      </ul>
    </div>
  );
}

export default ChatProfile;
