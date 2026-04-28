import React, {  useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./context";


const Showsbooking = () => {
  const [fetchData, setFetchData] = useState([]);


  const { setbookingId2, setcountry2, setcountry3 } = useContext(UserContext);
  const navigate = useNavigate();




  useEffect(() => {
    show();
  }, []);

  const show = async () => {
    try {
      const result = await fetch("https://air-booking-backend.vercel.app/GetSbooking", {
        method: "GET",
      });
      const res = await result.json();
      setFetchData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  

  const send = (c, d) => {
    var a = Math.random(10, 100)
    setbookingId2(a)
setcountry2(c)
setcountry3(d)
    navigate("/sbookingdetails")
    }

  return (
    <>
 
      <style>{`
        .booking-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
        .booking-card {
          width: 250px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .booking-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }
        .booking-card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }
        .booking-content {
          padding: 12px;
          text-align: center;
        }
        .booking-price {
          color: #2563eb;
          font-weight: bold;
          font-size: 18px;
        }
      `}</style>

      <div className="booking-wrapper" >
        {fetchData.map((item, index) => (
          <div key={index} className="booking-card">
            <a>
              <img src={`uploads/${item.Pic}`} onClick={() => { send(item.Destinationone, item.Destinationtwo) }} alt="" />
            </a>
            <div className="booking-content">
              <span>
                {item.StartDate} - {item.EndDate}
              </span>
              <h4>{item.Destinationone}</h4>
              <a href="#" class="exchange-btn"><i class="flaticon-exchange-1"></i></a>
              <h4>{item.Destinationtwo}</h4>

              <div class="content-bottom">
                <p>{item.Economy} from</p>
                <h4 className="booking-price">{item.Price}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Showsbooking;
