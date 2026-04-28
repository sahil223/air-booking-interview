import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import UserContext from './context'
const Mainbording = () => {
const [flight, setflight]=useState("")
const [name, setname]=useState("")
const [age, setage]=useState("")
const [date, setdate]=useState("")
const [gender, setgender]=useState("")
const [contactnumber, setcontactnumber]=useState("")
const [email, setemail]=useState("")
const [address, setaddress]=useState("")
const [city, setcity]=useState("")
const [pincode, setpincode]=useState("")
const [meal, setmeal]=useState("")


const [params]=useSearchParams()
const id=params.get("id")


const {maincountrys, maincountry2, uniqueId}=useContext(UserContext)

useEffect(() => {
    show()
}, [])

const show=async()=>{
    try {
        const result = await fetch(`https://air-booking-backend.vercel.app/getmainbookingdetail/${id}`,{
    method:"get"
})
const res = await result.json()
if(res.statuscode===1){
    console.log("fetch data", res.data)
    setflight(res.data.Flight)
    setname(res.data.passengername)
    setage(res.data.Age)
    setdate(res.data.Date)
    setgender(res.data.Gender)
    setcontactnumber(res.data.Contact)
    setemail(res.data.Email)
    setaddress(res.data.Address)
    setcity(res.data.City)
    setpincode(res.data.Pincode)
    setmeal(res.data.Meal)
    
}else{

}


}
    catch (error) {
        console.log("error fetching data",error)
    }

 }
  return (
    
    <div>
             <section class="breadcrumb-area breadcrumb-bg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="breadcrumb-content text-center">
                                <h2 class="title">Passenger Details</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Flight Details</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    <div style={styles.container}>
      <div style={styles.ticket}>
        {/* Airline Header */}
        <div style={styles.airlineHeader}>
          <h2 style={styles.airlineName}>SKYJET AIRLINES</h2>
          <div style={styles.boardingPass}>BOARDING PASS</div>
        </div>
        
        {/* Flight Information */}
        <div style={styles.flightInfo}>
          <div style={styles.infoSection}>
            <div style={styles.infoLabel}>FLIGHT</div>
            <div style={styles.infoValue}>{flight}</div>
          </div>
          <div style={styles.infoSection}>
            <div style={styles.infoLabel}>DATE</div>
            <div style={styles.infoValue}>{date}</div>
          </div>
          <div style={styles.infoSection}>
            <div style={styles.infoLabel}>TIME</div>
            <div style={styles.infoValue}>14:25</div>
          </div>
          <div style={styles.infoSection}>
            <div style={styles.infoLabel}>GATE</div>
            <div style={styles.infoValue}>B12</div>
          </div>
          <div style={styles.infoSection}>
            <div style={styles.infoLabel}>SEAT</div>
            <div style={styles.infoValue}>23A</div>
          </div>
        </div>
        
    
        <div style={styles.route}>
          <div style={styles.airport}>
            <div style={styles.airportCode}>{maincountrys}</div>
            <div style={styles.airportName}></div>
          </div>
          <div style={styles.airplaneIcon}>✈</div>
          <div style={styles.airport}>
            <div style={styles.airportCode}>{maincountry2}</div>
            <div style={styles.airportName}></div>
          </div>
        </div>
        
        {/* Passenger Information */}
        <div style={styles.passengerSection}>
          <h3 style={styles.sectionTitle}>PASSENGER DETAILS</h3>
          <div style={styles.passengerGrid}>
            <div style={styles.passengerField}>
              <span style={styles.fieldLabel}>Name:</span>
              <span style={styles.fieldValue}>{name} </span>
            </div>
            <div style={styles.passengerField}>
              <span style={styles.fieldLabel}>Gender:</span>
              <span style={styles.fieldValue}>{gender}</span>
            </div>
        
            <div style={styles.passengerField}>
              <span style={styles.fieldLabel}>Age:</span>
              <span style={styles.fieldValue}>{age}</span>
            </div>
        
        
            <div style={styles.passengerField}>
              <span style={styles.fieldLabel}>Contact:</span>
              <span style={styles.fieldValue}>{contactnumber}</span>
            </div>
            <div style={styles.passengerField}>
              <span style={styles.fieldLabel}>Address:</span>
              <span style={styles.fieldValue}>{address}</span>
            </div>
            <div style={styles.passengerField}>
              <span style={styles.fieldLabel}>City:</span>
              <span style={styles.fieldValue}>{city}</span>
            </div>
            <div style={styles.passengerField}>
              <span style={styles.fieldLabel}>Email:</span>
              <span style={styles.fieldValue}>{email}</span>
            </div>
            <div style={styles.passengerField}>
              <span style={styles.fieldLabel}>Pincode:</span>
              <span style={styles.fieldValue}>{pincode}</span>
            </div>
            <div style={styles.passengerField}>
              <span style={styles.fieldLabel}>Meal Preference:</span>
              <span style={styles.fieldValue}>{meal}</span>
            </div>
           
            <div style={styles.passengerField}>
              <span style={styles.fieldLabel}>Booking ID:</span>
              <span style={styles.fieldValue}>{uniqueId}</span>
            </div>
          </div>
        </div>
        
        {/* Barcode */}
        <div style={styles.barcodeContainer}>
          <div style={styles.barcode}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>
          <div style={styles.barcodeNumber}>{uniqueId}</div>
        </div>
        
        {/* Terms and Conditions */}
        <div style={styles.terms}>
          <p style={styles.termsText}>Please be at the gate at least 30 minutes before departure</p>
        </div>
      </div>
    </div>
    </div>
  )
}
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    padding: '20px',
    marginTop:"90px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  ticket: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    border: '1px solid #ddd'
  },
  airlineHeader: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    position: 'relative'
  },
  airlineName: {
    margin: '0 0 10px 0',
    fontSize: '24px',
    fontWeight: 'bold',
    color:'white'
  },
  boardingPass: {
    fontSize: '16px',
    letterSpacing: '2px'
  },
  flightInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    borderBottom: '1px dashed #ddd',
    flexWrap: 'wrap'
  },
  infoSection: {
    textAlign: 'center',
    margin: '0 5px 10px'
  },
  infoLabel: {
    fontSize: '12px',
    color: '#7f8c8d',
    marginBottom: '5px',
    fontWeight: 'bold'
  },
  infoValue: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  route: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    backgroundColor: '#ecf0f1',
    borderBottom: '1px dashed #ddd'
  },
  airport: {
    textAlign: 'center'
  },
  airportCode: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '5px'
  },
  airportName: {
    fontSize: '14px',
    color: '#7f8c8d'
  },
  airplaneIcon: {
    fontSize: '24px',
    color: '#3498db'
  },
  passengerSection: {
    padding: '20px',
    borderBottom: '1px dashed #ddd'
  },
  sectionTitle: {
    margin: '0 0 15px 0',
    color: '#2c3e50',
    fontSize: '18px',
    borderBottom: '2px solid #3498db',
    paddingBottom: '5px'
  },
  passengerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '12px'
  },
  passengerField: {
    display: 'flex',
    flexDirection: 'column'
  },
  fieldLabel: {
    fontSize: '12px',
    color: '#7f8c8d',
    fontWeight: 'bold',
    marginBottom: '3px'
  },
  fieldValue: {
    fontSize: '14px',
    color: '#2c3e50',
    fontWeight: '500'
  },
  barcodeContainer: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  },
  barcode: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
    height: '60px'
  },
  bar: {
    height: '40px',
    width: '4px',
    backgroundColor: '#2c3e50',
    margin: '0 2px'
  },
  barcodeNumber: {
    fontSize: '14px',
    letterSpacing: '4px',
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  terms: {
    padding: '15px 20px',
    backgroundColor: '#f4f6f7',
    textAlign: 'center'
  },
  termsText: {
    margin: '0',
    fontSize: '12px',
    color: '#7f8c8d',
    lineHeight: '1.4'
  }
}

export default Mainbording










