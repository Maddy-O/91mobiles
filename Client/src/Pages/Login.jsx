import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.AuthReducer.isError);
  const errorMessgae = useSelector((state) => state.AuthReducer.message);
  const navigate = useNavigate();

  const handlesubmit = () => {
    const loginobj = { name, email, password };
    // console.log(isError, errorMessgae);
    // console.log(loginobj);
    dispatch(loginUser(loginobj));
    navigate("/", { replace: true });
  };

  useEffect(()=>{

  },[dispatch])

  return (
    <div
      style={{
        maxWidth: "700px",
        color: "white",
        margin: "auto",
      }}
    >
      {isError ? <alert>{errorMessgae}</alert> : null}
      <h3 style={{ color: "black" }}>Login</h3>
      <div style={{ margin: "20px auto" }}>
        <input
          style={{
            border: "none",
            boxShadow: "2px 2px 2px 2px black",
            color: "black",
            padding: "10px",
            width: "50%",
          }}
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={{ margin: "20px auto" }}>
        <input
          style={{
            border: "none",
            boxShadow: "2px 2px 2px 2px black",
            color: "black",
            padding: "10px",
            width: "50%",
          }}
          type="email"
          placeholder="@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ margin: "20px auto" }}>
        <input
          style={{
            border: "none",
            boxShadow: "2px 2px 2px 2px black",
            color: "black",
            padding: "10px",
            width: "50%",
          }}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style={{ margin: "20px auto" }}>
        <button
          style={{
            border: "none",
            background: "rgb(16,163,16)",
            boxShadow: "2px 2px 2px 2px black",
            color: "white",
            padding: "10px",
            width: "50%",
            cursor: "pointer",
          }}
          onClick={handlesubmit}
        >
          Continue
        </button>
      </div>
      <h5
        style={{ cursor: "pointer", color: "rgb(16,163,16)" }}
        onClick={() => navigate("/register")}
      >
        Register
      </h5>
    </div>
  );
};

export default Login;
