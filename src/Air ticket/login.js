import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setflag } = useContext(UserContext);

  const navigate = useNavigate();

  const lg = async () => {
    const data = { email, password };

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const result = await fetch("http://localhost:9000/login", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; Charset=UTF-8",
        },
      });
      const res = await result.json();
      if (res.statuscode === 1) {
        console.log("password match");

        setflag(res.utype);
        localStorage.setItem("flag", res.utype);
        navigate("/"); 
      } else {
        alert("password mismatch");
      }
    } catch (error) {
      console.log("function not call", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <form style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        
          <button type="button" style={styles.button} onClick={lg}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    transition: "0.3s",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#4a90e2",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Login;
