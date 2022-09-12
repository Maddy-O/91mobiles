import React from "react";

const Home = () => {
  const data = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        maxWidth: "700px",
        color: "white",
        margin: "auto",
      }}
    >
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
          Name : {data.name}
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
          Email : {data.email}
        </div>
      </div>
    </div>
  );
};

export default Home;
