import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "./context";

const Mainflightbooking = () => {
  const [flight, setflight] = useState("");
  const [date, setdate] = useState("");
  const [passengername, setpassengernames] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [contactnumber, setcontactnumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setpincode] = useState("");
  const [meal, setmeal] = useState("");

const Navigate=useNavigate()


  // 🔹 Function to handle form submission
  const handleSubmit = async (e, id) => {
    e.preventDefault(); // Page reload rokta hai




// if(!flight.trim()||!date.trim()||!passengername.trim()||!age||!gender||!contactnumber||!email||!address||!city||!pincode||!meal){
//   alert("fill the blocks")
//   return;
// }
  

    const bookingData = {
      flight,
      date,
      passengername,
      age,
      gender,
      contactnumber,
      email,
      address,
      city,
      pincode,
      meal,
    };

    try {
      const response = await axios.post(
        `https://air-booking-backend.vercel.app/mainbookingdetail/${id}`, // 👉 apna backend URL yahan likho
        bookingData,
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );


    if (response.data.statuscode === 1) {
        alert("✅ Booking saved successfully!");
Navigate("/mainconfermationslip")

      } else {
        alert("❌ Failed to save booking!");
      }

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div>
      <style>
        {`
        body {
          font-family: 'Poppins', sans-serif;
          background-color: #f5f6fa;
        }
        .booking-container {
          max-width: 700px;
          background: #fff;
          padding: 30px;
          margin: 40px auto;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        h2.title {
          text-align: center;
          color: #2d3748;
          margin-bottom: 25px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
        }
        .input-group label {
          font-weight: 600;
          margin-bottom: 5px;
          color: #333;
        }
        .input-group input,
        .input-group select {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 15px;
          outline: none;
          transition: all 0.2s ease-in-out;
        }
        .input-group input:focus,
        .input-group select:focus {
          border-color: #007bff;
          box-shadow: 0 0 4px rgba(0,123,255,0.4);
        }
        .btn-submit {
          background: #007bff;
          color: #fff;
          border: none;
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .btn-submit:hover {
          background: #0056b3;
        }
        @media (max-width: 600px) {
          .booking-container {
            padding: 20px;
            margin: 20px;
          }
        }
      `}
      </style>

      <section className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="breadcrumb-content text-center">
                <h2 className="title">Traveller Details</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Booking Form */}
      <form className="booking-container" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Flight</label>
          <input
            type="text"
            placeholder="Enter Flight Name"
            onChange={(e) => setflight(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Date</label>
          <input type="date" onChange={(e) => setdate(e.target.value)} />
        </div>
   

        <div className="input-group">
          <label>Passenger Name</label>
          <input
            type="text"
            placeholder="Enter Passenger Name"
            onChange={(e) => setpassengernames(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            onChange={(e) => setage(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Gender</label>
          <input
            type="text"
            placeholder="Enter Gender"
            onChange={(e) => setgender(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Contact Number</label>
          <input
            type="text"
            placeholder="Enter Contact Number"
            onChange={(e) => setcontactnumber(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            onChange={(e) => setaddress(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>City</label>
          <input
            type="text"
            placeholder="Enter City"
            onChange={(e) => setcity(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Pincode</label>
          <input
            type="text"
            placeholder="Enter Pincode"
            onChange={(e) => setpincode(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Meal Preference</label>
          <select onChange={(e) => setmeal(e.target.value)}>
            <option value="">Select Meal</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
            <option value="Vegan">Vegan</option>
            <option value="Gluten-Free">Gluten-Free</option>
          </select>
        </div>

<button className="btn-submit" type="submit"  onClick={handleSubmit}>
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default Mainflightbooking;
