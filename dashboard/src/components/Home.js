
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

import { ToastContainer, toast } from "react-toastify";
import { verify } from "../api/api";

const Home = () => {

  const [success, setSuccess] = useState(false);
  const [userInfo, setUserInfo] = useState();

  const verifyUser = async () => {
    try {
    
      const {data} = await verify(); 

      if (!data.status) {
        window.location.replace(`${process.env.REACT_APP_FRONTEND}/login`);
      } else {
        setUserInfo(data);
        setSuccess(true);
        toast(`Hello ${data.user}`, { position: "top-right" });
      }
    } catch (err) {
      console.log( "Error verifying token:", err);
      alert(err); 
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
        <TopBar userInfo={userInfo} />
        <Dashboard userInfo={userInfo} />
        <ToastContainer/>
      </>
    )}
  </>
);}
export default Home;