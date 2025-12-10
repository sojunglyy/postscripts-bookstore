import React, { useState } from "react";

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
    <section>
      <form
        className="flex flex-col items-center w-full md:max-w-[80%] py-10"
        onSubmit={handleSubmit}
      >
        <div className="m-4">
          <h2 className="text-xl">{currentState}</h2>
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* If it's sign up, show the user name input */}
          {currentState === "Log In" ? null : (
            <div className="w-full px-4">
              <label for="username" class="block font-body mb-1">
                Username
              </label>
              <div class="rounded-md px-2 outline-1 focus-within:outline-2">
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  class="block w-full grow bg-transparent py-1 font-body focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* email */}
          <div className="w-full px-4">
            <label for="email" class="block font-body mb-1">
              Email
            </label>
            <div class="rounded-md px-2 outline-1 focus-within:outline-2">
              <input
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                class="block w-full grow bg-transparent py-1 font-body focus:outline-none"
              />
            </div>
          </div>

          {/* password */}
          <div className="w-full px-4">
            <label for="password" class="block font-body mb-1">
              Password
            </label>
            <div class="rounded-md px-2 outline-1 focus-within:outline-2">
              <input
                id="password"
                type="text"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                class="block w-full grow bg-transparent py-1 font-body focus:outline-none"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full bg-gray-800 text-white rounded-lg min-h-10 max-w-xs mt-10 hover:shadow-lg transition-shadow"
        >
          {currentState}
        </button>

        {currentState === "Log In" ? (
          <div className="flex flex-col items-center gap-3 w-full mt-4">
            <p>New user?</p>
            <button
              className="border rounded py-1 px-2 cursor-pointer"
              type="button"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create an account
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 w-full mt-4">
            <p>Already signed up?</p>
            <button
              className="border rounded py-1 px-2 cursor-pointer"
              type="button"
              onClick={() => setCurrentState("Log In")}
            >
              Log In
            </button>
          </div>
        )}
      </form>
    </section>
  );
};

export default LogIn;
