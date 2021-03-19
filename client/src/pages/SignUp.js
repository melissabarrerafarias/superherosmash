import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations"; //mutation for adding a new user
import Auth from "../utils/auth"; //function to set token to localStorage
import "../../src/login-signup.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addUser({ variables: { ...formState } });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <body className="sp-img">
      <div>
        <div className="spiderman">
          <img
            src="https://media3.giphy.com/media/h2MouomJFCpMfWVfUj/source.gif"
            alt="Spiderman swinging on a web"
          ></img>
        </div>
        <div className="login-box">
          <h2>Sign Up</h2>
          <div>
            <form onSubmit={onSubmit}>
              <div className="user-box">
                <input
                  placeholder="username"
                  name="username"
                  type="username"
                  id="username"
                  value={formState.username}
                  onChange={onChange}
                />
              </div>
              <div className="user-box">
                <input
                  placeholder="email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={onChange}
                />
              </div>
              <div className="user-box">
                <input
                  placeholder="password"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={onChange}
                />
              </div>
              <button>Enter</button>
            </form>
            {error && (
              <div>
                <h2>
                  Sign up failed! Please make sure all the fields are filled.
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </body>
  );
};

export default Signup;
