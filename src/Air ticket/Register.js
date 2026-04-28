import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

const [name,setname]=useState()
const [email,setemail]=useState()
const [ password,setpassword]=useState()

const d={name,email,password}

const navigate = useNavigate()

const submit =async()=>{
    try {
        const result = await fetch("https://air-booking-backend.vercel.app/sinup",{
            method:'post',
            body:JSON.stringify(d),
            headers:{
                "Content-type":"Application/json; charset=UTF-8"
            }
            
        })
        const res = await result.json()
        if(res.statuscode===1){
            alert('data send')
            navigate("/login")
        }else{
            console.log("data not send")
        }
    } catch (error) {
        console.log("function not call")
    }
}




  return (
    <div>
      <style>{`
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #6a11cb, #ffffffff);
          font-family: Arial, sans-serif;
        }
        .register-box {
          background: #fff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          width: 350px;
          animation: fadeIn 0.8s ease-in-out;
        }
        .register-box h2 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 26px;
          color: #333;
        }
        .register-box input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 15px;
          transition: 0.3s;
        }
        .register-box input:focus {
          border-color: #2575fc;
          outline: none;
          box-shadow: 0 0 8px rgba(37,117,252,0.3);
        }
        .register-box button {
          width: 100%;
          padding: 12px;
          margin-top: 15px;
          background: #2575fc;
          border: none;
          color: white;
          font-size: 16px;
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
        }
        .register-box button:hover {
          background: #1a5ed9;
        }
        .register-footer {
          margin-top: 15px;
          text-align: center;
          font-size: 14px;
        }
        .register-footer a {
          color: #2575fc;
          text-decoration: none;
          font-weight: bold;
        }
        .register-footer a:hover {
          text-decoration: underline;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="register-container">
        <div className="register-box">
          <h2>Create Account</h2>
          <form>
            <input type="text" placeholder="Full Name" required onChange={(e) => setname(e.target.value)} />
            <input type="email" placeholder="Email Address" required onChange={(e) => setemail(e.target.value)} />
            <input type="password" placeholder="Password" required onChange={(e) => setpassword(e.target.value)} />

            <button type="submit" onClick={submit}>Register</button>
          </form>
          <div className="register-footer">
            Already have an account?   <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
