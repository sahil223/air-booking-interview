import React, { useEffect, useState } from 'react'
import { Link,} from 'react-router-dom';

const Addofferdeal = () => {
  const [pic, setPic] = useState("");
  const [city, setCity] = useState("");
  const [economy, setEconomy] = useState("");
  const [price, setPrice] = useState("");
  const [startdate,setStartdate]=useState("")
  const [enddate,setEnddate]=useState("")




  const [oldpic,setoldpic] = useState("")
  const [iid,setiid] = useState("") 


const [fetchData, setFetchData] = useState([]);


  const submit = async () => {
    const formdata = new FormData()
    formdata.append('pic', pic)
    formdata.append('city', city)
    formdata.append('economy', economy)
    formdata.append('price', price)
    formdata.append('startdate',startdate)
    formdata.append('enddate',enddate)

    if (!pic || !city || !economy || !price) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const result = await fetch('http://localhost:9000/offer', {
        method: 'POST',
        body: formdata
      });
      const res = await result.json();
      if (res.statuscode === 1) {
        alert("Data sent successfully!");
        // Reset form
        setPic("");
        setCity("");
        setEconomy("");
        setPrice("");
        setStartdate("");
        setEnddate("")

      } else {
     
        alert("Failed to send data. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please check your connection.");
    }
  };



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
      } else {
        console.log("Failed to fetch data");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }



const del=async(id)=>{

    const userResponse = window.confirm("Are you sure you want to delete this data?");
  
  if (!userResponse) {
    console.log("User cancelled the deletion.");
    return; 
  }

            const result=await fetch(`http://localhost:9000/delete/${id}`,{
method:'Delete'
        })
    try {
        const res=await result.json()
        if(res.statuscode===1){
           alert("Data Deleted")
           show()

        }else{
            console.log("data not deleted")
        }
    } catch (error) {
        console.log("error")
    }
}
  
const ci = (f)=>{
setCity(f.City)
setEconomy(f.Economy)
setPrice(f.Price)
setStartdate(f.Startdate)
setEnddate(f.Enddate)
setoldpic(f.Pic)
setiid(f._id)
}


const upd = async() => {
const formdata = new FormData()
formdata.append('pic',pic)
formdata.append('city',city)
formdata.append('economy',economy)
formdata.append('price',price)
formdata.append('startdate',startdate)
formdata.append('enddate',enddate)
formdata.append('oldpic',oldpic)
formdata.append('iid',iid)

try {
  const result = await fetch('http://localhost:9000/update',{
    method: 'PUT',
    body: formdata  
  })
  const res = await result.json()
  if(res.statuscode===1){
    alert("Data Updated")
    setCity("")
    setEconomy("")
    setPrice("")
    setStartdate("")
    setEnddate("")
    setoldpic("")
    setiid("")
    show()

  } else{
    console.log("Failed to update data");
  }
}catch (error) {
    console.error("Error updating data:", error);
  }
}
  return (


<div>
    

            {/* <!-- breadcrumb-area --> */}
            <section class="breadcrumb-area breadcrumb-bg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="breadcrumb-content text-center">
                                <h2 class="title">Add Offer Deal</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Booking Details</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumb-area-end --> */}




    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Add New Offer Deal</h2>
        
        <div style={styles.formGroup}>
            <input 
              id="pic"
              type="file" 
              accept="image/*"
              style={styles.fileInput}
              onChange={(e) => setPic(e.target.files[0])}
            />
     
        </div>

        <div style={styles.formGroup}>
          <input 
            type='text' 
            placeholder='City' 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <input 
            type='text' 
            placeholder='Category' 
            value={economy} 
            onChange={(e) => setEconomy(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <input 
            type='text' 
            placeholder='Price' 
            value={price} 
            onChange={(e) => setPrice(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input 
            type='text' 
            placeholder='Start Date' 
            value={startdate} 
            onChange={(e) => setStartdate(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input 
            type='text' 
            placeholder='End Date' 
            value={enddate} 
            onChange={(e) => setEnddate(e.target.value)}
            style={styles.input}
          />
        </div>

        <button onClick={submit} style={styles.button}>
          Submit
        </button>
        <button  style={{...styles.button, marginTop: '10px'}} onClick={upd}>
          Update
        </button>
      </div>


    </div>

      <div>
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

 <div class="col-lg-6 col-md-10" style={{ marginTop: '50px' }}>
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
                          <Link to='/booking-details' class="btn">Booking Now</Link>
                          <a class="discover">Discover</a>


                          <button style={styles.button } onClick={()=>del(d._id)}>Delete</button>
                          <button style={{ ...styles.button, marginTop: '10px' }} onClick={()=>ci(d)}>Update</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
    backgroundColor: '#f5f7fa',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    padding: '30px',
    width: '100%',
    maxWidth: '450px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },
  title: {
    textAlign: 'center',
    color: '#2d3436',
    marginBottom: '25px',
    fontSize: '24px',
    fontWeight: '600'
  },
  formGroup: {
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
    outline: 'none',
    ':focus': {
      borderColor: '#3498db',
      boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.2)'
    }
  },
  fileInputLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed #ddd',
    borderRadius: '8px',
    padding: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    backgroundColor: '#fafafa',
    minHeight: '150px',
    ':hover': {
      borderColor: '#3498db',
      backgroundColor: '#f0f8ff'
    }
  },
  filePlaceholder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#7f8c8d'
  },
  uploadIcon: {
    fontSize: '32px',
    marginBottom: '10px'
  },
  imagePreview: {
    position: 'relative',
    width: '100%',
    height: '150px'
  },
  previewImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '6px'
  },
  changeText: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '12px'
  },
  fileInput: {
     display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed #ddd',
    borderRadius: '8px',
    padding: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    backgroundColor: '#fafafa',
    minHeight: '150px',
    ':hover': {
      borderColor: '#3498db',
      backgroundColor: '#f0f8ff'
    }
  },
  button: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(52, 152, 219, 0.2)',
    ':hover': {
      backgroundColor: '#2980b9',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 12px rgba(52, 152, 219, 0.3)'
    },
    ':active': {
      transform: 'translateY(0)'
    }
  }
};

// Add hover effects using JavaScript since inline CSS doesn't support pseudo-classes
Object.assign(styles.input, {
  ':focus': {
    borderColor: '#3498db',
    boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.2)'
  }
});

Object.assign(styles.fileInputLabel, {
  ':hover': {
    borderColor: '#3498db',
    backgroundColor: '#f0f8ff'
  }
});

Object.assign(styles.button, {
  ':hover': {
    backgroundColor: '#2980b9',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(52, 152, 219, 0.3)'
  },
  ':active': {
    transform: 'translateY(0)'
  }
});

export default Addofferdeal
