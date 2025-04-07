import React, { useState } from "react";
import Layout from './../../components/Layout/Layout.js';
import  toast  from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../../styles/AuthStyles.css"
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer,setAnswer] = useState("");
    const navigate = useNavigate();
    // Form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('/api/v1/auth/register',{name, email, password,phone, address,answer});
            if(res && res.data.success){
                toast.success(res.data.message);
                navigate("/login");
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
        <Layout title={"Register - Ecommerce App"}>
        <div className="layout" title="Register - Ecommerce App">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">Register Page</h4>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
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
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            id="phone"
                            placeholder="Enter your phone"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="address"
                            placeholder="Enter your address"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="address"
                            placeholder="Enter your best Sport name"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </Layout>
    );
};

export default Register;