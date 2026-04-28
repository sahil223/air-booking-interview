
import { set } from 'mongoose'
import React, { useEffect, useState } from 'react'

const Sbooking = () => {
    const [pic,setpic]=useState()
    const [destinationone,setdestinationone]=useState()
    const [destinationtwo,setdestinationtwo]=useState()
    const [price,setprice]=useState()
    const [startdate,setStartdate]=useState("")
    const [enddate,setEnddate]=useState()
    const [economy,setEconomy]=useState()

const [fetchData,setFetchData]=useState([])
const [oldpic,setoldpic]=useState("")
const [id,setid]=useState("")
    
    const submit = async()=>{
        const formdata = new FormData()
        formdata.append('pic',pic)
        formdata.append('destinationone',destinationone)
        formdata.append('destinationtwo',destinationtwo)
        formdata.append('price',price)
        formdata.append('economy',economy)
        formdata.append('startdate',startdate)
        formdata.append('enddate',enddate)
    

        if(!pic || !destinationone || !destinationtwo || !price || !economy || !startdate || !enddate){
            alert("please fill all the field")
            return
        }

        try {
            const result = await  fetch("https://air-booking-backend.vercel.app/sbooking",{
                method: "post",
                body: formdata,
            })
            const res = await result.json()
            if(res.statuscode===1){
                alert("data send")
                setpic("")
                setdestinationone("")
                setdestinationtwo("")
                setprice("")
                setdestinationone("")
                setEconomy("")
                setStartdate("")
                setEnddate("")
               
            }
            else{
                console.log("data not send")
            }
        } catch (error) {
            console.log("function not call")
        }
    }
    
    useEffect(()=>{
        show();
    },[])
    const show = async()=>{
        try {
            const result = await fetch("https://air-booking-backend.vercel.app/GetSbooking",{
                method: "GET",
            });
            const res = await result.json();
            setFetchData(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const deleteItem = async(id)=>{
        try {
            const result = await fetch(`https://air-booking-backend.vercel.app/deletesbooking/${id}`,{
                method: "DELETE",
            });
            const res = await result.json();
            if(res.statuscode===1){
                alert("data deleted")
                show()
            }
            else{
                console.log("data not deleted")
            }
        } catch (error) {
            console.log("function not call")
        }
    }


    const ci = (b)=>{
        setpic(b.Pic)
        setdestinationone(b.Destinationone)
        setdestinationtwo(b.Destinationtwo)
        setprice(b.Price)
        setStartdate(b.StartDate)
        setEnddate(b.EndDate)
        setEconomy(b.Economy)
        setoldpic(b.Pic)
        setid(b._id)
    }

    const updateItem = async () => {
        const formdata = new FormData();
        formdata.append('pic', pic);
        formdata.append('destinationone', destinationone);
        formdata.append('destinationtwo', destinationtwo);
        formdata.append('price', price);
        formdata.append('economy', economy);
        formdata.append('startdate', startdate);
        formdata.append('enddate', enddate);
        formdata.append('oldpic', oldpic);
        formdata.append('id', id);

        try {
            const result = await fetch("https://air-booking-backend.vercel.app/updatesbooking", {
                method: "PUT",
                body: formdata,
            });
            const res = await result.json();
            if (res.statuscode === 1) {
                alert("data updated");
                setpic("");
                setdestinationone("");
                setdestinationtwo("");
                setprice("");
                setEconomy("");
                setStartdate("");
                setEnddate("");
                setoldpic("");
                setid("");
                show(); 
            } else {
                console.log("data not updated");
            }
        } catch (error) {
            console.log("function not call");
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
              onChange={(e) => setpic(e.target.files[0])}
            />
     
        </div>

        <div style={styles.formGroup}>
          <input 
            type='text' 
            placeholder='Destination one' 
            value={destinationone} 
            onChange={(e) => setdestinationone(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input 
            type='text' 
            placeholder='Destination Two' 
            value={destinationtwo} 
            onChange={(e) => setdestinationtwo(e.target.value)}
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
            onChange={(e) => setprice(e.target.value)}
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

        <button onClick={updateItem} style={styles.button}>
          New Update
        </button>
        {/* <button  style={{...styles.button, marginTop: '10px'}} onClick={upd}>
          Update
        </button> */}
      </div>


    </div>


 <>
      {/* Internal CSS */}
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

      <div className="booking-wrapper">
        {fetchData.map((item, index) => (
          <div key={index} className="booking-card">
            <a href="booking-details.html">
              <img src={`uploads/${item.Pic}`} alt="" />
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
               <button onClick={()=>deleteItem(item._id)} style={styles.button}>
          Delete
        </button>

                <button  onClick={() => ci(item)} style={styles.button}>
          Update
        </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>





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
{/* 
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
            </div> */}

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
    marginTop: '10px',
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
    

export default Sbooking
