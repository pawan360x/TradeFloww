
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
//// jwt
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {

  //// if httponly - false then it works benifit - when token delete it instantly logout 
  // const [cookies, removeCookie] = useCookies(["token"]);
  // const [username, setUsername] = useState("");

  // const verifyCookie = async () => {
  //   if (!cookies.token) {
  //     window.location.replace(`${process.env.REACT_APP_FRONTEND}/login`);
  //     return;
  //   }

  //   try {
  //     const { data } = await axios.post(
  //       process.env.REACT_APP_SERVER,
  //       {},
  //       { withCredentials: true }
  //     );

  //     const { status, user } = data;

  //     if (!status) {
  //       removeCookie("token");
  //       window.location.replace(`${process.env.REACT_APP_FRONTEND}/login`);
  //     } else {
  //       setUsername(user);
  //       toast(`Hello ${user}`, { position: "top-right" });
  //     }
  //   } catch (err) {
  //     console.log("Error verifying token:", err);
  //     removeCookie("token");
  //     window.location.replace(`${process.env.REACT_APP_FRONTEND}/login`);
  //   }
  // };

  // useEffect(() => {
  //   verifyCookie();
  // }, [cookies.token]);
  //--------
  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState("");

  const verifyUser = async () => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_SERVER, {},
        { withCredentials: true }
      );

      if (!data.status) {
        window.location.replace(`${process.env.REACT_APP_FRONTEND}/login`);
      } else {
        setUsername(data.user);
        setSuccess(true);
        toast(`Hello ${data.user}`, { position: "top-right" });
      }
    } catch (err) {
      console.log( "Error verifying token:", err);
      window.location.replace(`${process.env.REACT_APP_FRONTEND}/login`);
    }
  };

  useEffect(() => {
    verifyUser()
  }, []);



  return (

     <>
    {success && (
      <>
        <TopBar username={username} />
        <Dashboard username={username} />
        <ToastContainer/>
      </>
    )}
  </>
);}
export default Home;