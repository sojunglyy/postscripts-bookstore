import React, { useState } from "react";
import Navbar from "../components/Navbar";

const LogIn = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        // register user
        console.log("register user");
      } else {
        // login user
      }
    } catch (error) {
      console.log(error);
    }
  };

  // use effect

  return (
    <>
      <Navbar />
      <section id="login">
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="current-state">{currentState}</h2>

            <div className="user-input-container">
              {/* If it's sign up, show the user name input */}
              {currentState === "Log In" ? null : (
                <div className="user-input">
                  <label for="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              )}

              {/* email */}
              <div className="user-input">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* password */}
              <div className="user-input">
                <label for="password">Password</label>
                <input
                  id="password"
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" id="submit-btn" className="custom-btn">
              {currentState}
            </button>
          </form>

          {/* switch to log in or sign up */}
          {currentState === "Log In" ? (
            <div className="switch-state-container">
              <p>New user?</p>
              <button
                id="switch-btn"
                className="custom-btn"
                type="button"
                onClick={() => setCurrentState("Sign Up")}
              >
                Create an account
              </button>
            </div>
          ) : (
            <div className="switch-state-container">
              <p>Already signed up?</p>
              <button
                id="switch-btn"
                className="custom-btn"
                type="button"
                onClick={() => setCurrentState("Log In")}
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default LogIn;
