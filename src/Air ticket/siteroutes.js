import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addofferdeal from './Addofferdeal'
import Mainstructure from './mainstructure'
import Detail from './Booking detail'
// import Paymentdetail from './Paymentdetail'
// import Flights from './Flights'
import Sbooking from './Sbooking'
import Sbookingdetail from './Sbookingdetail'
import PaymentSlip from './PaymentSlip'
import Login from './login'
import Register from './Register'
import SpaymentSlip from './Spaymentslip'
import ProtectedRoutes from './protextedRoutes'
// import Popuplogin from './poplogin'
import Blogpage from './blogpage'
import Showflights from './Showflights'
import AddFlights from './AddFlights'
import ManageUsers from './ManageUser'
import Addflightdetails from './addflightdetails'
import Mainflightbooking from './mainflightbooking'
import Mainpaymentconfermation from './mainpaymentconfermation'
import Mainbording from './mainbording'

// import AddFlights from './AddFlights'

const Siteroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainstructure />} />
        <Route path="/add-offer-deal" element={<Addofferdeal />} />
        <Route 
          path="/booking-details" 
          element={
            <ProtectedRoutes>
              <Detail />
            </ProtectedRoutes>
          } 
        />
        {/* <Route path="/payment-details" element={<Paymentdetail />} /> */}
        <Route path="/Flight" element={<Showflights />} />
        <Route path="/Sbooking" element={<Sbooking />} />

        <Route 
          path="/sbookingdetails" 
          element={
            <ProtectedRoutes>
              <Sbookingdetail />
            </ProtectedRoutes>
          } 
        />

        <Route 
          path="/payment-slip" 
          element={
            <ProtectedRoutes>
              <PaymentSlip />
            </ProtectedRoutes>
          } 
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route 
          path="/Spayment-slip" 
          element={
            <ProtectedRoutes>
              <SpaymentSlip />
            </ProtectedRoutes>
          } 
        />

        <Route path='/blog' element={<Blogpage/>}/>

        <Route path="/addflights" element={<AddFlights />} />



        <Route path="/manageuser" element={<ManageUsers/>} />

        <Route path='addflightdetails' element={<Addflightdetails/>}/>

        <Route path='/mainflightbooking' element={<ProtectedRoutes><Mainflightbooking/> </ProtectedRoutes>}/>
        
        <Route path='/mainconfermationslip'  element={<ProtectedRoutes><Mainpaymentconfermation/> </ProtectedRoutes>}/>

        <Route path='/mainbording' element={<ProtectedRoutes><Mainbording/> </ProtectedRoutes>}/>
      </Routes>
    </div>
  )
}

export default Siteroutes
