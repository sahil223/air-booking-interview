import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usercontext from './context';

const Popuplogin = () => {
    const [show, setShow] = useState(false);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const { setflag, flag } = useContext(usercontext);

    const navigate = useNavigate();

    const handleClose = () => setShow(false);


    useEffect(() => {
        if (!flag) {
            const interval = setInterval(() => {
                setShow(true);
            }, 10000);

            return () => clearInterval(interval);
        }
    }, [flag]);

    const nextpage = () => {
        navigate("/register");
        setShow(false);
    };

    const lg = async () => {
        const data = { email, password };

        try {
            const result = await fetch("http://localhost:9000/login", {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; Charset=UTF-8'
                }
            });

            const res = await result.json();
            if (res.statuscode === 1) {
                console.log("password match");

                setflag(res.utype);
                localStorage.setItem('flag', res.utype);
                navigate("/");
                setShow(false);

            } else {
                console.log("password not match");
            }
        } catch (error) {
            console.log("error in login", error);
        }
    };

    return (
        <>
            {show && !flag && (
                <div style={styles.overlay}>
                    <style>{`
            .popup-login {
              background: #727272ff;
              padding: 30px 40px;
              border-radius: 12px;
              width: 90%;
              max-width: 400px;
              position: relative;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
              animation: fadeIn 0.3s ease-in-out;
            }
            .popup-login h2 { margin-bottom: 20px; font-size: 24px; font-weight: 600; color: #333; }
            .form-group { margin-bottom: 16px; }
            .form-group label { display: block; font-weight: 500; margin-bottom: 5px; color: #555; }
            .form-group input {
              width: 100%; padding: 10px 12px; border: 1px solid #ccc;
              border-radius: 8px; font-size: 14px; transition: border-color 0.3s;
            }
            .form-group input:focus { border-color: #007bff; outline: none; }
            .login-btn, .Signup-btn {
              width: 100%; background: #007bff; border: none; color: white;
              padding: 12px; border-radius: 8px; font-size: 16px;
              cursor: pointer; font-weight: 600; transition: background 0.3s;
            }
            .Signup-btn { margin-top:10px; }
            .login-btn:hover, .Signup-btn:hover { background: #0056b3; }
            .close-btn {
              position: absolute; top: 12px; right: 16px; background: transparent;
              border: none; font-size: 22px; cursor: pointer; color: #888;
            }
            @keyframes fadeIn { from {opacity: 0; transform: translateY(-20px);} to {opacity: 1; transform: translateY(0);} }
          `}</style>

                    <div className="popup-login">
                        <button className="close-btn" onClick={handleClose}>×</button>
                        <h2>Login First</h2>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <button className="login-btn" onClick={lg}>Login</button>
                        <button onClick={nextpage} className="Signup-btn">Signup</button>
                    </div>
                </div>
            )}
        </>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999
    }
};

export default Popuplogin;
