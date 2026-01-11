
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
//// jwt
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  const verifyCookie = async () => {
    if (!cookies.token) {
      window.location.replace(`${process.env.REACT_APP_FRONTEND}/login`);
      return;
    }

    try {
      const { data } = await axios.post(
        process.env.REACT_APP_SERVER,
        {},
        { withCredentials: true }
      );

      const { status, user } = data;

      if (!status) {
        removeCookie("token");
        window.location.replace(`${process.env.REACT_APP_FRONTEND}/login`);
      } else {
        setUsername(user);
        toast(`Hello ${user}`, { position: "top-right" });
      }
    } catch (err) {
      console.log("Error verifying token:", err);
      removeCookie("token");
      window.location.replace(`${process.env.REACT_APP_FRONTEND}/login`);
    }
  };

  useEffect(() => {
    verifyCookie();
  }, [cookies.token]);

  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;