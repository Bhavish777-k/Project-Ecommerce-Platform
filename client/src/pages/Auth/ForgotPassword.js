import React from 'react'
import Layout from '../../components/Layout/Layout'
import  toast  from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../../styles/AuthStyles.css"
import { useAuth } from "../../context/auth.js";
import { useState,useEffect } from 'react';
export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [answer, setAnswer] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const navigate = useNavigate();
  
    // Form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('/api/v1/auth/forgot-password',{email, newPassword,answer});
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
    <Layout title={"Forgot Password - Ecommerce Platform"}>
              <div className="layout" title="Login - Ecommerce App">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">RESET PASSWORD</h4>
                    
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
                            type="answer"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="email"
                            placeholder="Enter your Answer"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
                            id="password"
                            placeholder="Enter your New password"
                            required
                        />
                    </div>
                    <button type="Submit" className="btn btn-primary">
                        Reset
                    </button>
                </form>
            </div>
        </div>
    </Layout>
    
  );
};

