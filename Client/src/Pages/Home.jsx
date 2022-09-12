import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const userDetail = useSelector((state) => state.AuthReducer.details);
  console.log(userDetail);
  return (
    <div
      style={{
        maxWidth: "700px",
        color: "white",
        margin: "auto",
      }}
    >
      <h3 style={{ color: "black" }}>Login</h3>
      <div style={{ margin: "20px auto" }}>
        <div
          style={{
            border: "none",
            boxShadow: "2px 2px 2px 2px black",
            color: "black",
            padding: "10px",
            width: "50%",
          }}
        >
          Email :{userDetail[0].email}
        </div>
      </div>
      <div style={{ margin: "20px auto" }}>
        <div
          style={{
            border: "none",
            boxShadow: "2px 2px 2px 2px black",
            color: "black",
            padding: "10px",
            width: "50%",
          }}
        >
          Name : {userDetail[0].name}
        </div>
      </div>
    </div>
  );
};

export default Home;
