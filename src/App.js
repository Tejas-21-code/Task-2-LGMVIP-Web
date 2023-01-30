import "./App.css";
import React, { useState } from "react";
import Users from "./Users.js";
function App() {
  const [profile, setProfile] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const fetchUsers = () => {
    setIsClicked(true);
    setTimeout(() => {
      fetch("https://reqres.in/api/users?page=1")
        .then((response) => {
          setIsClicked(false);
          return response.json();
        })
        .then((data) => {
          setProfile(data.data);
        });
      setIsFetched(true);
    }, 2000);
  };
  return (
    <div className="App">
      <button onClick={fetchUsers}>Fetch Users</button>
      <div className="user">
        {!isFetched && !isClicked && (
          <p> Click On Fetch User To Fetch The Data</p>
        )}
        {isClicked && <span class="loader"></span>}
        {isFetched && <Users data={profile} />}
      </div>
    </div>
  );
}
export default App;
