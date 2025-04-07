import React from 'react'
import "./Spinner.css"
import { useNavigate,useLocation } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
const Spinner = ({path = "login"}) => {
    const [count,setCount] = useState(3);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevValue) => --prevValue);
        }, 1000);
        count === 0 && navigate(`${path}`,
            {state: location.pathname}
        );
        return () => clearInterval(interval);
    },[count,navigate,location,path]);
  return (
    <div className="spinner-container">
      {/* Add a wrapper for the text */}
      <div className="text-wrapper">
        <h1>
          Redirecting to you in {count} second{count !== 1 && 's'}
        </h1>
      </div>

      {/* Add a separate wrapper for the button */}
      <div className="button-wrapper">
        <button className="btn btn-primary" type="button" disabled>
          <span className="spinner-grow spinner-grow-sm" aria-hidden="true" />
          <span role="status">Loading...</span>
        </button>
      </div>
    </div>
  
  );
}

export default Spinner;