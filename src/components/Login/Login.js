import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from '../../firebase'
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../Reducer";



const Login = () => {
  const [ state, dispatch ] = useStateValue()
  const signIn = () => {
      auth.signInWithPopup(provider)
      .then(result => {

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch(error => alert(error.message))
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
          alt=""
        />

        <h1 style={{ color: "#2e81f4", textAlign: "center", fontFamily:"klavika" }}>facebook</h1>
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};
export default Login;
