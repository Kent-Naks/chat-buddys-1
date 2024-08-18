import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ChatList() {
  const [buddies, setBuddies] = useState([]);  // Store buddy data
  const [error, setError] = useState(null);  // Handle errors
  const [loading, setLoading] = useState(true); // Track loading state

   // Load buddy data from cache or fetch from API
  useEffect(() => {
    const cachedBuddies = localStorage.getItem('chatBuddies');
    if (cachedBuddies) {
      setBuddies(JSON.parse(cachedBuddies));
      setLoading(false);
    } else {
      fetchBuddies();
    }
  }, []);

    // Fetch buddy data from API
  const fetchBuddies = () => {
    fetch("http://localhost:3000/buddies")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBuddies(data); // Update state with fetched data
        localStorage.setItem('chatBuddies', JSON.stringify(data)); // Cache the data
        setLoading(false);  // Stop loading
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError(error.message); // Handle fetch error
        setLoading(false);  // Stop loading
      });
  };

  if (loading) return <div>Loading...</div>; // Show loading indicator
  if (error) return <div>Error: {error}</div>; // Show error message

  return (
    <div>
      <h1>Chat Buddies</h1>
      <ul>
        {buddies.map(buddy => (
          <li key={buddy.id}>
            <Link to={`/profile/${buddy.id}`}>
              <img src={buddy.profilePic || '/default-profile-pic.jpg'} alt={buddy.name} />
              {buddy.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
