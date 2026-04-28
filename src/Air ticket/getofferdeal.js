import React, {  useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import UserContext from './context';
import pic from "../Air ticket/flight.png"


const Getofferdeal = () => {

  const [fetchData, setFetchData] = useState([]);

 const {setbookingId,setcountry}=useContext(UserContext)




 const navigate = useNavigate()

  useEffect(() => {
    show();
  }, [])



  const show = async () => {
    try {
      const result = await fetch("http://localhost:9000/getoffer", {
        method: 'GET'
      });
      const res = await result.json();
      if (res.statuscode === 1) {
        setFetchData(res.data);
        // setcountry(res.data.city)
       } else {
        console.log("Failed to fetch data");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }



  const send = (c) => {
    var a = Math.random(10, 100)
    setbookingId(a)
setcountry(c)
    navigate("/booking-details")
    }

  return (
    <div>
      {/* Internal CSS */}
      <style>{`
      
        /* Two Items per Row */
        .map-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .map-grid .col-sm-6 {
          flex: 0 0 calc(50% - 20px);
        }

        @media (max-width: 768px) {
          .map-grid .col-sm-6 {
            flex: 0 0 100%;
          }
        }
      `}</style>

      {/* <!-- flight-offer-area --> */}
      <section class="flight-offer-area">
        <div class="container">
          <div class="row align-items-center mb-35">
            <div class="col-md-8">
              <div class="section-title">
                <span class="sub-title">Offer Deals</span>
                <h2 class="title">Flight Offer Deals</h2>
              </div>
            </div>
            <div class="col-md-4">
              <div class="best-price text-end">
                <a href="booking-list.html">Best Price Guarantee <i class="flaticon-check"></i></a>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            {/* ✅ Static section (untouched) */}
            <div class="col-lg-6 col-md-10">
              <div >
                <div class="flight-offer-thumb">
                  <img src={pic} alt=""  style={{ height: '680px', width:"300vh", borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}/>
                </div>
              </div>
            </div>

            {/* ✅ Dynamic section (map loop styled) */}
            <div class="col-lg-6 col-md-10">
              <div class="map-grid">
                {fetchData.map((d) =>
                  <div class="col-sm-6">
                    <div class="flight-offer-item offer-item-two">
                      <div class="flight-offer-thumb">
                        <img src={`uploads/${d.Pic}`} alt="" />
                      </div>
                      <div class="flight-offer-content">
                        <h2 class="title">{d.City}</h2>
                        <span>{d.Startdate} - {d.Enddate}</span>
                        <p>{d.Economy}</p>
                        <h4 class="price">{d.Price}</h4>
                      </div>
                      <div class="overlay-content">
                        <h2 class="title">{d.City}</h2>
                        <span>{d.Startdate} - {d.Enddate}</span>
                        <p>{d.Economy}</p>
                        <h4 class="price">{d.Price}</h4>
                        <div class="content-bottom">
                          <a onClick={()=>send(d.City)} class="btn">Booking Now</a>
                          <a class="discover">Discover</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- flight-offer-area-end --> */}
    </div>
  )
}

export default Getofferdeal
