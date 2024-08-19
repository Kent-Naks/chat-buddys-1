import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ChatProfile() {
  const { id } = useParams(); //This id is used to fetch data for the specific chat buddy.
  const navigate = useNavigate(); //used to programmatically navigate to different routes within the application

  React.useEffect(() => {
    fetch(`/buddies/${id}`)
      .then(response => {
        if (!response.ok) { //If the response is not successful (!response.ok), it throws an error with the HTTP status.
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

  const handleTopicClick = (topic) => { //function is triggered when one of the topic buttons is clicked
    navigate(`/conversation/${id}?topic=${topic}`); //Uses navigate to change the route to /conversation/{id}?topic={topic}.
  };

  return ( //Displays "Chat Profile" as the title of the page
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
