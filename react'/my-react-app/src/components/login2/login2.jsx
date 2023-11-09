import React, { useState } from "react";

function Login2() {

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: [event.target.value]

    })
  }

  const login = (event) => {
    event.preventDefault()
    console.log(user)

    setUser({
      username: "",
      password: ""
    })
  }

  return (
    <div>
      <form>
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInput}
          placeholder="bapakau kimak"
        />
        <br />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInput}
          placeholder="bapakau kimak"
        />
      </form>
      <button onClick={login}> LOGIN </button>
    </div>
  );
}

export default Login2;
