import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ChatList() {
  const [buddies, setBuddies] = useState([]); // An array that stores the list of chat buddies fetched from the server
  const [error, setError] = useState(null);  //A string that holds any error message encountered during the data fetching process.
  const [loading, setLoading] = useState(true); // A boolean that indicates whether data is being loaded.

  useEffect(() => {
    const cachedBuddies = localStorage.getItem('chatBuddies'); //It checks if the buddy data is already stored
    if (cachedBuddies) {  //If cached data is found, it parses the JSON and sets it in the buddies state
      setBuddies(JSON.parse(cachedBuddies));
      setLoading(false);
    } else {    //If no cached data is found, it triggers the fetchBuddies function to fetch the buddy data from the server
      fetchBuddies();
    }
  }, []);

  const fetchBuddies = () => {
    fetch("http://localhost:3000/buddies") //Makes an HTTP GET request to http://localhost:3000/buddies.
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok'); //If the response is not OK, it throws an error with a message that the network response was not okay.
        }
        return response.json();
      })
      .then(data => {
        setBuddies(data);
        localStorage.setItem('chatBuddies', JSON.stringify(data));
        setLoading(false);
      })
      .catch(error => { //If an error occurs during the fetch operation, it logs the error to the console, updates the error state with the error message, and sets loading to false.
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  };

  if (loading) return <div>Loading...</div>; //If the data is still loading, it displays a "Loading..." message.
  if (error) return <div>Error: {error}</div>; //If an error occurs, it displays the error message.

  return (                                    //If data is successfully loaded, it displays a list of buddies.
    <div>
      <h1>Chat Buddys</h1>
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
