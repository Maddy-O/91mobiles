import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const userDetail = useSelector((state) => state.AuthReducer.details);
  console.log(userDetail);
  return <div>Home</div>;
};

export default Home;
