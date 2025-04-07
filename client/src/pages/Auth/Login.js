import React, { useState } from "react";
import Layout from './../../components/Layout/Layout.js';
import  toast  from "react-hot-toast";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import "./../../styles/AuthStyles.css"
import { useAuth } from "../../context/auth.js";
const Login = () => {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth,setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    // Form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('/api/v1/auth/login',{email, password});
            if(res && res.data.success){
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem("auth",JSON.stringify(res.data));
                navigate(location.state ||"/");
            }
            else{
                toast.error(res.data.message);
            }
        }
        catch(error){
            console.log(error);
            toast.error("Something went Wrong");
        }
    };

    return (
        <Layout title={"Login - Ecommerce App"}>
        <div className="layout" title="Login - Ecommerce App">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">Login Page</h4>
                    
                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mb-3">
                    <button type="button" className="btn btn-primary" onClick={()=> navigate("/forgot-password")}>
                        Forgot Password
                    </button>
                    </div>
                    <button type="Login" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </div>
        </Layout>
    );
};

export default Login;