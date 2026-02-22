
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SignupPage = () => {
    // const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const { email, password, username } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });

    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_SERVER}/auth/signup`,
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            console.log(data);

            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(async() => {
                    window.location.href = process.env.REACT_APP_DASHBOARD;
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
            username: "",
        });
    };

    return (
        <div className="form_container mb-5 mx-auto">
           <div className="flowwIcon"> <img  src="images\floww-icon.png" width={"30%"}/></div>
            <h2>Signup for <span> Floww</span></h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="  Your email"
                        onChange={handleOnChange}
                    />
                </div>
                <div>

                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="  Username"
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="  Password"
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit">Submit</button>
                <span>
                    Already have an account? <Link to={"/login"}>Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignupPage;