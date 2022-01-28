import React, { useState } from "react";
import User from "../../users.json";

const Login = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    User.map((user) => {
      if (user.username == username && user.password == password) {
        window.location = "/dishselection";
      } else {
        setError(true);
      }
    });
  };
  return (
    <div>
      <h1 className="head">Account Login</h1>
      {error ? <p>Incorrect Details</p> : <div />}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            placeholder="User Name"
            className="field"
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="field"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          className="field"
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
    // <div>
    //   {User.map((user) => {
    //     return <p>{user.username}</p>;
    //   })}
    // </div>
  );
};

export default Login;
