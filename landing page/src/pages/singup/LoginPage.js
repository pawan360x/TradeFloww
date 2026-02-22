import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
    //   const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValue;
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
            position: "bottom-left",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_SERVER}/auth/login`,
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            console.log(data);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                console.log(process.env.REACT_APP_DASHBOARD);

                setTimeout(() => {
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
        });
    };

    return (
        <div className="form_container mb-5 mx-auto">
            <div className="flowwIcon"> <img src="images\floww-icon.png" width={"30%"} /></div>
            <h2>Login to <span> Floww</span></h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder=" Your email"
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder=" Password"
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit">Submit</button>
                <span>
                    Already have an account? <Link to={"/signup"}>Signup</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
};

export default LoginPage;