import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NavBar from "./components/NavBar"




function App() {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} onLogout={logout} />
          <HomePage />
        </>
      ) : (
        <LoginPage onLogin={login} />
      )}
    </div>
  );
}

export default App;
