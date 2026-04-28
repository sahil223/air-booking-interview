import React, { use, useEffect, useState } from "react";

const AddFlights = () => {
    const [airlinename, setairlinename] = useState("");
    const [airlinelogo, setairlinelogo] = useState("");
    const [fetchData, setFetchData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("airlinename", airlinename);
        formData.append("airlinelogo", airlinelogo);

        try {
            const response = await fetch("https://air-booking-backend.vercel.app/add-flights-brands", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok && data.statuscode === 1) {
                console.log("✅ Flight added successfully:", data);
                show()
                setairlinename("");
                setairlinelogo("");
            } else {
                console.error("❌ Error adding flight:", data.message || data.error);
            }
        } catch (error) {
            console.error("🚨 Network error adding flight:", error);
        }
    };


    useEffect(() => {
        show();
    }, []);

    const show = async () => {
        try {
            const result = await fetch("https://air-booking-backend.vercel.app/get-flights-brands", {
                method: 'GET'
            });
            const res = await result.json();
            if (res.statuscode === 1) {
                setFetchData(res.data);

            } else {
                console.log("Failed to fetch data");
            }

        } catch (error) {
            console.error("🚨 Network error fetching offers:", error);
        }
    };


    const deleteflight = async (id) => {

        const userResponse = window.confirm("Are you sure you want to delete this data?");

        if (!userResponse) {
            console.log("User cancelled the deletion.");
            return;
        }
        const result = await fetch(`https://air-booking-backend.vercel.app/delete-flight-brands/${id}`, {
            method: 'DELETE'
        });
        try {

            const res = await result.json();
            if (res.statuscode === 1) {
                console.log("✅ Flight deleted successfully:", res);
                show();
            } else {
                console.error("❌ Error deleting flight:", res.message || res.error);
            }
        } catch (error) {
            console.error("🚨 Network error deleting flight:", error);
        }
    };

    return (
        <div>
            {/* Breadcrumb Section */}
            <section
                className="breadcrumb-area breadcrumb-bg"
                style={{ textAlign: "center" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="breadcrumb-content text-center">
                                <h2 className="title">Add Flights</h2>
                                <nav aria-label="breadcrumb">
                                    <ol
                                        className="breadcrumb"
                                        style={{ justifyContent: "center" }}
                                    >
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Flights</a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Add Flights
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <div className="form-container">
                <form className="flight-form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <label>Airline Name</label>
                    <input
                        type="text"
                        placeholder="Enter Airline Name"
                        value={airlinename}
                        onChange={(e) => setairlinename(e.target.value)}
                        required
                    />

                    <label>Airline Logo</label>
                    <input
                        type="file"
                        onChange={(e) => setairlinelogo(e.target.files[0])}
                        required
                    />

                    <button type="submit">Add Flight</button>
                </form>
            </div>




           <div>
  {fetchData.map((d) => (
    <div className="booking-list-item" key={d._id}>
      <div
        className="booking-list-item-inner"
        style={{
          padding: "10px",
          height: "auto",
          marginBottom: "10px",
          backgroundColor: "#e3e3e3ff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="flight-airway" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div className="flight-logo">
            <img
              src={`uploads/${d.Airlinelogo}`}
              alt=""
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "8px",
                objectFit: "contain", 
              }}
            />
          </div>
          <span style={{ fontSize: "16px", fontWeight: "600" }}>{d.Airlinename}</span>
        </div>

        <button
          onClick={() => deleteflight(d._id)}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>



            {/* Internal CSS */}
            <style>{`
      .form-container {
        display: flex;
        justify-content: center;
        margin-top: 40px;
        padding: 20px;
      }

      .flight-form {
        width: 100%;
        max-width: 400px;
        background: #fff;
        padding: 25px 30px;
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .flight-form label {
        font-weight: 600;
        color: #2c3e50;
        text-align: left;
      }

      .flight-form input[type="text"],
      .flight-form input[type="file"] {
        padding: 10px 12px;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: 14px;
        outline: none;
        transition: border-color 0.3s;
      }

      .flight-form input[type="text"]:focus,
      .flight-form input[type="file"]:focus {
        border-color: #3498db;
      }

      .flight-form button {
        padding: 12px;
        background: #3498db;
        color: white;
        font-size: 16px;
        font-weight: 600;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.3s;
      }

      .flight-form button:hover {
        background: #2980b9;
      }
        
.delete-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.delete-btn:hover {
  background: #c0392b;
}

/* Responsive fix */
@media (max-width: 600px) {
  .booking-list-item-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .delete-btn {
    align-self: flex-end; /* 👈 chhoti screen pe button neeche right me rahega */
  }
}

    `}</style>
        </div>
    );

};

export default AddFlights