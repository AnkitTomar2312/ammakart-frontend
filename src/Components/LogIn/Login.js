import React, { useState, useEffect } from "react";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const isTokenSet = localStorage.getItem("demo-token");
    setIsLoggedIn(isTokenSet);
    document.title = isTokenSet ? "Welcome User" : "LogIn";
  }, [isLoggedIn]);

  const handelLogin = () => {
    localStorage.setItem("demo-token", true);
    setIsLoggedIn(true);
  };
  const handelLogOut = () => {
    localStorage.removeItem("demo-token");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome User" : "Please Log In"}</h1>
      {isLoggedIn ? (
        <button onClick={handelLogOut}>Log Out</button>
      ) : (
        <button onClick={handelLogin}>Log In</button>
      )}
    </div>
  );
}
