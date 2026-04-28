import { useEffect, useState } from "react";
import UserContext from "./Air ticket/context";
import Footer from "./Air ticket/Footer";
import Header from "./Air ticket/Header"; 
import Globalheader from "./Air ticket/Globalheader";
import ClientHeader from "./Air ticket/ClientHeader"; 
import Siteroutes from "./Air ticket/siteroutes";
import "./App.css";
import Popuplogin from "./Air ticket/poplogin";

function App() {
  const [bookingId, setbookingId] = useState();
  const [pri, setpri] = useState("");
  const [country, setcountry] = useState("");
  const [bookingId2, setbookingId2] = useState();

  const [country2, setcountry2] = useState("");
  const [country3, setcountry3] = useState("");

  const [maincountrys, setmaincountrys] = useState("");
  const [maincountry2, setmaincountry2] = useState("");


  const [uniqueId, setuniqueId] = useState("");

  const [price,setprice]=useState("")

  const[stops, setstops]=useState(" ")
  // for login
  // Initialize flag from localStorage if available

  const [flag, setflag] = useState(() => localStorage.getItem("flag")); 

  
  useEffect(() => {
    if (flag) {
      localStorage.setItem("flag", flag);
    } else {
      localStorage.removeItem("flag"); 
    }
  }, [flag]);

  
  const logout = () => {
    setflag(null);
    localStorage.removeItem("flag"); 
  };

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          pri,
          setpri,
          bookingId,
          setbookingId,
          country,
          setcountry,
          bookingId2,
          setbookingId2,
          flag,
          setflag,
          logout, 
          country2,
          setcountry2,
          country3,
          setcountry3,

maincountrys,
setmaincountrys,

          maincountry2,
          setmaincountry2,
price,
setprice,

stops,
setstops,

uniqueId,
setuniqueId,

        }}
      >
       
        {!flag ? (
          <Globalheader />
        ) : flag === "admin" ? (
          <Header />
        ) : (
          <ClientHeader />
        )}

        <Siteroutes />
        <Popuplogin />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
