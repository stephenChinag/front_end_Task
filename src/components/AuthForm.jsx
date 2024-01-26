import { useState } from "react";
import { Link, useSearchParams, Form } from "react-router-dom";

import "./AuthForm.css";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("'mode");
  return (
    <div>
      <Form className="login-box">
        <h1> {isLogin ? "Log In" : "Create a new User "} </h1>

        <div className="user-box">
          <input required type="email" placeholder="email" />
        </div>
        <div className="user-box">
          <input required type="password" placeholder="password" />
        </div>

        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          {" "}
          {isLogin ? "Create new user" : "Login"}
        </Link>
        <button> Save</button>
      </Form>
    </div>
  );
}
export default AuthForm;
