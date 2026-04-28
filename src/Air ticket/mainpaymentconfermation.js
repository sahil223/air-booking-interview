import React, { useContext, useEffect, useState } from "react";
import UserContext from "./context";
import { useNavigate } from "react-router-dom";

const Mainpaymentconfermation = () => {
  const [totalprice, setTotalprice] = useState(0);
  const navigate = useNavigate();
  const { maincountrys, maincountry2, stops, price, setuniqueId  } = useContext(UserContext);

  // ✅ Calculate total when price changes
  useEffect(() => {
    const total = price + 500 + 200 - 300;
    setTotalprice(total);
  }, [price]);

  // ✅ Confirm button logic
  const handleConfirm = () => {
    alert("✅ Your booking is confirmed!");
   ; send();
  };

  // ✅ Cancel button logic
  const handleCancel = () => {
    alert("❌ Your booking has been cancelled.");
    navigate("/"); // Go back to home (or wherever you want)
  };




  const send=()=>{
    var e=Math.random(10,100)
    setuniqueId(e)
 navigate("/mainbording")
  }
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Confirm Your Booking</h1>

        <div style={styles.sections}>
          {/* Left Section */}
          <div style={styles.leftSection}>
            <h3 style={styles.subHeading}>Flight Details</h3>
            <ul style={styles.list}>
              <li>
                <strong>From:</strong> {maincountrys}
              </li>
              <li>
                <strong>To:</strong> {maincountry2}
              </li>
              <li>
                <strong>Stops:</strong> {stops}
              </li>
            
            </ul>
          </div>

          {/* Right Section */}
          <div style={styles.rightSection}>
            <h3 style={styles.subHeading}>Price Breakdown</h3>
            <ul style={styles.list}>
              <li>
                <strong>Base Price:</strong> ₹{price}
              </li>
              <li>
                <strong>Taxes:</strong> ₹500
              </li>
              <li>
                <strong>Service Fee:</strong> ₹200
              </li>
              <li>
                <strong>Discount:</strong> -₹300
              </li>
              <li style={styles.total}>
                <strong>Total Price:</strong> ₹{totalprice}
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.buttonContainer}>
          <button
            style={{ ...styles.button, ...styles.confirmBtn }}
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            style={{ ...styles.button, ...styles.cancelBtn }}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #eef2f3, #8e9eab)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "700px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    transition: "transform 0.3s ease",
  },
  heading: {
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: "25px",
  },
  sections: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
  },
  leftSection: {
    flex: "1",
    minWidth: "250px",
  },
  rightSection: {
    flex: "1",
    minWidth: "250px",
  },
  subHeading: {
    marginBottom: "10px",
    color: "#34495e",
    borderBottom: "2px solid #2980b9",
    display: "inline-block",
    paddingBottom: "5px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    color: "#555",
    lineHeight: "1.8",
  },
  total: {
    fontWeight: "bold",
    color: "#2c3e50",
    borderTop: "1px solid #ddd",
    marginTop: "10px",
    paddingTop: "8px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "30px",
  },
  button: {
    padding: "12px 28px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
  confirmBtn: {
    backgroundColor: "#27ae60",
    color: "#fff",
  },
  cancelBtn: {
    backgroundColor: "#c0392b",
    color: "#fff",
  },
};

export default Mainpaymentconfermation;
