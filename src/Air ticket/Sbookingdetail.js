import React, { useContext, useEffect, useState } from 'react'
import UserContext from './context'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const Sbookingdetail = () => {
  const [passengerCount, setPassengerCount] = useState(1)
  const [passengers, setPassengers] = useState([
    {
      category: "",
      name: "",
      surname: "",
      gender: "",
      nationality: "",
      number: "",
      dob: "",
      pincode: "",
      email: "",
      flyerNumber: "",
      meal: "",
      wheelchair: "",
    }
  ])
  const [ff, setff] = useState([])
  const [Tprice, setTprice] = useState(0)
  const [currentPassenger, setCurrentPassenger] = useState(0)
  const [formProgress, setFormProgress] = useState(0)
 
  const {bookingId2}=useContext(UserContext)



const navigate = useNavigate()



  // Calculate form progress
  useEffect(() => {
    let filledFields = 0;
    let totalFields = 0;
    
    passengers.forEach(passenger => {
      Object.values(passenger).forEach(value => {
        totalFields++;
        if (value) filledFields++;
      });
    });
    
    setFormProgress(Math.round((filledFields / totalFields) * 100));
  }, [passengers]);

  // ✅ Validation Function
  const validateForm = () => {
    for (let i = 0; i < passengers.length; i++) {
      const p = passengers[i];
      if (!p.name || !p.surname || !p.gender || !p.category || !p.dob || !p.nationality || !p.pincode || !p.flyerNumber || !p.email || !p.number) {
        alert(`Please fill all required details for Passenger ${i + 1}`);
        setCurrentPassenger(i);
        return false;
      }
    }
    return true;
  };


  const submit = async () => {
    try {
      if (!validateForm()) {
        return;
      }

      const data = {
        passengerCount,
        passengers,
        Tprice,
        bookingId2,
      }
      
      const result = await fetch('https://air-booking-backend.vercel.app/sbookiingdetails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const res = await result.json();
      if (res.statuscode === 1) {
        alert("Booking added successfully");
navigate({
  pathname:("/Spayment-slip"),
  search:`?id=${bookingId2}`
})

      } else {
        alert("Failed to add booking");
      }
    } catch (error) {
      console.error("Error occurred while adding booking:", error);
    }
  }


  useEffect(() => {
    show();
  }, [])

  const show = async () => {
    const result = await fetch('https://air-booking-backend.vercel.app/GetSbooking2', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const res = await result.json();
    if (res.statuscode === 1) {
      setff(res.data);

      if (Array.isArray(res.data) && res.data.length > 0) {
        setTprice(res.data[0].Price * passengerCount);
      } else if (res.data.Price) {
        setTprice(res.data.Price * passengerCount);
      }
    } else {
      alert("Failed to fetch booking");
    }
  }

 
  const handlePassengerChange = (e) => {
    const value = e.target.value;
    let count = 1;
    if (value === "2") count = 2;
    else if (value === "3") count = 3;
    else if (value === "4") count = 4;
    else if (value === "5") count = 5;
    
    setPassengerCount(count);
  
    
    const newPassengers = [...passengers];
    if (count > passengers.length) {

      while (newPassengers.length < count) {
        newPassengers.push({
          category: "",
          name: "",
          surname: "",
          gender: "",
          nationality: "",
          number: "",
          dob: "",
          pincode: "",
          email: "",
          flyerNumber: "",
          meal: "",
          wheelchair: ""
        });
      }
    } else if (count < passengers.length) {

      newPassengers.splice(count);
    }
    
    setPassengers(newPassengers);

    
    if (Array.isArray(ff) && ff.length > 0) {
      setTprice(ff[0].Price * count);
    } else if (ff.Price) {
      setTprice(ff.Price * count);
    }
  }


  const handlePassengerFieldChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  }

  const nextPassenger = () => {
    if (currentPassenger < passengers.length - 1) {
      setCurrentPassenger(currentPassenger + 1);
    }
  }

  const prevPassenger = () => {
    if (currentPassenger > 0) {
      setCurrentPassenger(currentPassenger - 1);
    }
  }

  return (
    <div className="booking-form-container">
      <section className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="breadcrumb-content text-center">
                <h2 className="title">Traveller Details</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Flights</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Passenger Details</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container main-content">
       
        <div className="booking-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{width: `${formProgress}%`}}></div>
          </div>
          <div className="progress-text">{formProgress}% Complete</div>
        </div>

        <div className="booking-card">
          <div className="booking-header">
            <div className="header-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="header-content">
              <h2>Passenger Selection</h2>
              <p>Please provide details for all travelers</p>
            </div>
          </div>

          <div className="booking-body">
            <div className="form-section">
              <div className="section-title">Number of Passengers</div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="passengerCount">Passengers</label>
                  <select
                    id="passengerCount"
                    name="passengerCount"
                    className="form-control"
                    onChange={handlePassengerChange}
                    value={passengerCount}
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5">5 Passengers</option>
                  </select>
                </div>
              </div>
            </div>

        
            {passengers.length > 1 && (
              <div className="passenger-navigation">
                <button 
                  className="nav-btn prev" 
                  onClick={prevPassenger}
                  disabled={currentPassenger === 0}
                >
                  <i className="fas fa-chevron-left"></i> Previous
                </button>
                
                <div className="passenger-dots">
                  {passengers.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${currentPassenger === index ? 'active' : ''}`}
                      onClick={() => setCurrentPassenger(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                
                <button 
                  className="nav-btn next"
                  onClick={nextPassenger}
                  disabled={currentPassenger === passengers.length - 1}
                >
                  Next <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            )}

        
            <div className="passenger-forms">
              {passengers.map((passenger, index) => (
                <div 
                  className={`passenger-form ${currentPassenger === index ? 'active' : ''}`} 
                  key={index}
                >
                  <div className="form-section">
                    <div className="section-title">
                      <i className="fas fa-user"></i>
                      Passenger {index + 1} {index === 0 && "(Primary Contact)"}
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor={`name-${index}`}>First Name *</label>
                        <input 
                          type="text" 
                          id={`name-${index}`} 
                          value={passenger.name}
                          onChange={(e) => handlePassengerFieldChange(index, 'name', e.target.value)} 
                          required
                          placeholder="Enter first name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor={`surname-${index}`}>Last Name *</label>
                        <input 
                          type="text" 
                          id={`surname-${index}`} 
                          value={passenger.surname}
                          onChange={(e) => handlePassengerFieldChange(index, 'surname', e.target.value)} 
                          required
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor={`gender-${index}`}>Gender *</label>
                        <select 
                          id={`gender-${index}`} 
                          value={passenger.gender}
                          onChange={(e) => handlePassengerFieldChange(index, 'gender', e.target.value)}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor={`category-${index}`}>Travel Class *</label>
                        <select 
                          id={`category-${index}`} 
                          value={passenger.category}
                          onChange={(e) => handlePassengerFieldChange(index, 'category', e.target.value)}
                          required
                        >
                          <option value="">Select Class</option>
                          <option value="Economy">Economy</option>
                          <option value="Premium">Premium Economy</option>
                          <option value="Business">Business</option>
                          <option value="First">First Class</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor={`dob-${index}`}>Date of Birth *</label>
                        <input 
                          type="date" 
                          id={`dob-${index}`} 
                          value={passenger.dob}
                          onChange={(e) => handlePassengerFieldChange(index, 'dob', e.target.value)} 
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor={`nationality-${index}`}>Nationality *</label>
                        <input 
                          type="text" 
                          id={`nationality-${index}`} 
                          value={passenger.nationality}
                          onChange={(e) => handlePassengerFieldChange(index, 'nationality', e.target.value)} 
                          required
                          placeholder="e.g., Indian, American"
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor={`pincode-${index}`}>Postal Code *</label>
                        <input 
                          type="text" 
                          id={`pincode-${index}`} 
                          value={passenger.pincode}
                          onChange={(e) => handlePassengerFieldChange(index, 'pincode', e.target.value)} 
                          required
                          placeholder="e.g., 400001"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor={`passport-${index}`}>Passport Number *</label>
                        <input 
                          type="text" 
                          id={`passport-${index}`} 
                          value={passenger.flyerNumber}
                          onChange={(e) => handlePassengerFieldChange(index, 'flyerNumber', e.target.value)} 
                          required
                          placeholder="Enter passport number"
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor={`email-${index}`}>Email Address *</label>
                        <input 
                          type="email" 
                          id={`email-${index}`} 
                          value={passenger.email}
                          onChange={(e) => handlePassengerFieldChange(index, 'email', e.target.value)} 
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor={`phone-${index}`}>Phone Number *</label>
                        <input 
                          type="tel" 
                          id={`phone-${index}`} 
                          value={passenger.number}
                          onChange={(e) => handlePassengerFieldChange(index, 'number', e.target.value)} 
                          required
                          placeholder="+91 1234567890"
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor={`meal-${index}`}>Meal Preference</label>
                        <select 
                          id={`meal-${index}`} 
                          value={passenger.meal}
                          onChange={(e) => handlePassengerFieldChange(index, 'meal', e.target.value)}
                        >
                          <option value="">Select Meal Preference</option>
                          <option value="Vegetarian">Vegetarian</option>
                          <option value="Non-Vegetarian">Non-Vegetarian</option>
                          <option value="Vegan">Vegan</option>
                          <option value="Gluten-Free">Gluten-Free</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor={`wheelchair-${index}`}>Wheelchair Assistance</label>
                        <select 
                          id={`wheelchair-${index}`} 
                          value={passenger.wheelchair}
                          onChange={(e) => handlePassengerFieldChange(index, 'wheelchair', e.target.value)}
                        >
                          <option value="">Select Option</option>
                          <option value="Yes">Yes, I require assistance</option>
                          <option value="No">No, thank you</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="summary-card">
          <div className="summary-header">
            <h3>Booking Summary</h3>
          </div>
          <div className="summary-body">
            <div className="summary-item">
              <span>Passengers</span>
              <span>{passengerCount} {passengerCount > 1 ? 'Travelers' : 'Traveler'}</span>
            </div>
            <div className="summary-item">
              <span>Base Fare</span>
              <span>₹{Tprice ? Tprice / passengerCount : 0} x {passengerCount}</span>
            </div>
            <div className="summary-item">
              <span>Taxes & Fees</span>
              <span>₹{Tprice ? Tprice * 0.18 : 0}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-total">
              <span>Total Amount</span>
              <span>₹{Tprice ? Tprice + (Tprice * 0.18) : 0}</span>
            </div>
          </div>
          <div className="summary-footer">
            <button className="btn-secondary">
              <i className="fas fa-download"></i> Save & Continue Later
            </button>
            <button className="btn-primary" onClick={submit}>
              <i className="fas fa-lock"></i> Confirm Booking - ₹{Tprice ? Tprice + (Tprice * 0.18) : 0}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .booking-form-container {
    
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f7fa;
          min-height: 100vh;
          padding-bottom: 50px;
       
        }
        
        .breadcrumb-area {
          margin-top: 20px;
          background: linear-gradient(135deg, #1a237e 0%, #3949ab 100%);
          padding: 50px 0;
          color: white;
          margin-bottom: 30px;
        }
        
        .breadcrumb {
          background: transparent;
          justify-content: center;
          margin-bottom: 0;
        }
        
        .breadcrumb-item a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
        }
        
        .breadcrumb-item.active {
          color: white;
        }
        
        .main-content {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 25px;
        }
        
        .booking-progress {
          grid-column: 1 / -1;
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          margin-bottom: 20px;
        }
        
        .progress-bar {
          height: 10px;
          background: #eef2f7;
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 10px;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4caf50 0%, #8bc34a 100%);
          border-radius: 5px;
          transition: width 0.5s ease;
        }
        
        .progress-text {
          text-align: center;
          font-weight: 600;
          color: #4caf50;
        }
        
        .booking-card, .summary-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        
        .booking-header {
          display: flex;
          align-items: center;
          padding: 20px 25px;
          border-bottom: 1px solid #eef2f7;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
        }
        
        .header-icon {
          width: 50px;
          height: 50px;
          background: #3949ab;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          color: white;
          font-size: 20px;
        }
        
        .header-content h2 {
          margin: 0;
          font-size: 22px;
          color: #1a237e;
        }
        
        .header-content p {
          margin: 5px 0 0;
          color: #666;
          font-size: 14px;
        }
        
        .booking-body {
          padding: 25px;
        }
        
        .form-section {
          margin-bottom: 30px;
        }
        
        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a237e;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
        }
        
        .section-title i {
          margin-right: 10px;
          color: #3949ab;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .form-group {
          margin-bottom: 15px;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #333;
        }
        
        .form-control, input, select {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 15px;
          transition: all 0.3s;
        }
        
        .form-control:focus, input:focus, select:focus {
          outline: none;
          border-color: #3949ab;
          box-shadow: 0 0 0 3px rgba(57, 73, 171, 0.1);
        }
        
        .passenger-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 30px 0;
          padding: 15px 0;
          border-top: 1px solid #eef2f7;
          border-bottom: 1px solid #eef2f7;
        }
        
        .nav-btn {
          display: flex;
          align-items: center;
          padding: 10px 20px;
          background: #f5f7fa;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .nav-btn:hover:not(:disabled) {
          background: #e4e8f0;
        }
        
        .nav-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .passenger-dots {
          display: flex;
          gap: 10px;
        }
        
        .dot {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #ddd;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .dot.active {
          background: #3949ab;
          color: white;
          border-color: #3949ab;
        }
        
        .passenger-forms {
          position: relative;
        }
        
        .passenger-form {
          display: none;
        }
        
        .passenger-form.active {
          display: block;
        }
        
        .summary-card {
          align-self: start;
          position: sticky;
          top: 20px;
        }
        
        .summary-header {
          padding: 20px;
          background: linear-gradient(135deg, #1a237e 0%, #3949ab 100%);
          color: white;
          text-align: center;
        }
        
        .summary-header h3 {
          margin: 0;
          font-size: 20px;
        }
        
        .summary-body {
          padding: 20px;
        }
        
        .summary-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }
        
        .summary-divider {
          height: 1px;
          background: #eef2f7;
          margin: 15px 0;
        }
        
        .summary-total {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          font-size: 18px;
          color: #1a237e;
        }
        
        .summary-footer {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          border-top: 1px solid #eef2f7;
        }
        
        .btn-primary, .btn-secondary {
          padding: 15px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #4caf50 0%, #8bc34a 100%);
          color: white;
          border: none;
        }
        
        .btn-primary:hover {
          background: linear-gradient(135deg, #43a047 0%, #7cb342 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(76, 175, 80, 0.3);
        }
        
        .btn-secondary {
          background: white;
          color: #3949ab;
          border: 1px solid #3949ab;
        }
        
        .btn-secondary:hover {
          background: #f5f7fa;
        }
        
        @media (max-width: 992px) {
          .main-content {
            grid-template-columns: 1fr;
          }
          
          .summary-card {
            position: static;
            margin-top: 30px;
          }
        }
        
        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .passenger-navigation {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>
    </div>
  )
}

export default Sbookingdetail