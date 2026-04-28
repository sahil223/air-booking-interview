const express = require('express');
const cors = require('cors');
const monsoose= require("mongoose");
const multer = require('multer');
const { default: mongoose } = require('mongoose');

const fs = require ('fs');


const app = express();
app.use(express.json());
app.use(cors());

app.listen(9000,(req,res)=>{
    console.log("Server is running on port 9000");
});

monsoose.connect("mongodb://127.0.0.1:27017/travelproject")
.then(()=>{
    console.log("Database connected successfully");
})
.catch((error)=>{
    console.log("Database connection failed");
    console.log(error);
});



let picname
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    picname = Date.now() + file.originalname
    cb(null, picname)
  }
})

const upload = multer({ storage: storage })


const offerdealSchema= new mongoose.Schema({
    Pic: String,
    City: String,
    Economy: String,
    Price: String,
    Startdate:String,
    Enddate:String,

})
const offerdealModel= mongoose.model("offerdeal",offerdealSchema,'offerdeals');

app.post('/offer',upload.single('pic'),async(req,res)=>{
const result = await new  offerdealModel({
    Pic:picname,
    City:req.body.city,
    Economy:req.body.economy,
    Price:req.body.price,
    Startdate:req.body.startdate,
    Enddate:req.body.enddate,
})   
const rr= await result.save() 
if(rr){
    res.send({statuscode:1})
}else{
    res.send({statuscode:0})
}
})


app.get('/getoffer',async(req,res)=>{
    const data = await offerdealModel.find();
    if(data){
        res.send({statuscode:1,data})
    }else{
        res.send({statuscode:0})
    }
})

app.get('/Dettail',async(req,res)=>{
    const data = await offerdealModel.findOne();
    if(data){
        res.send({statuscode:1,data})
    }else{
        res.send({statuscode:0})
    }
})

app.delete('/delete/:id', async (req, res) => {
const result = await offerdealModel.findOneAndDelete({ _id: req.params.id });
if (result) {
    res.send({ statuscode: 1 });
} else {
    res.send({ statuscode: 0 });
}
})



app.put('/update',upload.single('pic'), async (req, res) => {
 if(!req.carpic){
  picname = req.body.picname
 }else{
fs.unlink("./public/uploads"+ req.body.oldpic,(err)=>{
  if(!err){
    console.log('crt')
  }else{
    console.log("not crt")
  }
})
 }


    const result = await offerdealModel.updateOne({_id:req.body.iid},{$set:{
        Pic:picname,
        City:req.body.city,
        Economy:req.body.economy,
        Price:req.body.price,
        Startdate:req.body.startdate,
        Enddate:req.body.enddate,

}})
    if (result) {
        res.send({ statuscode: 1 })
    } else {
        res.send({ statuscode: 0 })
    }
})


const bookingschema = mongoose.Schema({
    passengerCount: Number,
    passengers: [{
        category: String,
        name: String,
        surname: String,
        gender: String,
        nationality: String,
        number: String,
        dob: String,
        pincode: String,
        email: String,
        flyerNumber: String,
        meal: String,
        wheelchair: String
    }],
    Tprice: String,
    bookingId:String,
})

const BookingModel = mongoose.model("booking", bookingschema, 'bookings');

app.post('/addbooking', async (req, res) => {
    try {
        const result = await new BookingModel({
            passengerCount: req.body.passengerCount,
            passengers: req.body.passengers,
            Tprice: req.body.Tprice,
            bookingId:req.body.bookingId
            
        }).save();
        
        if (result) {
            res.send({ statuscode: 1 });
        } else {
            res.send({ statuscode: 0 });
        }
    } catch (error) {
        console.error(error);
        res.send({ statuscode: 0, error: error.message });
    }
});


app.get("/paymentslip/:id", async (req, res) => {
  try {
    const data = await BookingModel.findOne({ bookingId: req.params.id });
    if (data) {
      res.send({ statuscode: 1, data });
    } else {
      res.send({ statuscode: 0 });
    }
  } catch (err) {
    res.send({ statuscode: 0, error: err.message });
  }
});








const SbookingSchema = mongoose.Schema({
    Pic:String,
    StartDate:String,
    EndDate:String,
    Price:String,
    Destinationone:String,
    Destinationtwo:String,
    Economy:String,
  

})

const SecondbookingModel =  mongoose.model("Second booking",SbookingSchema,"Second booking")
app.post("/sbooking",upload.single('pic'),async(req,res)=>{
    const result = await new SecondbookingModel({
        Pic:picname,
        StartDate:req.body.startdate,
        EndDate:req.body.enddate,
        Price:req.body.price,
        Destinationone:req.body.destinationone,
        Destinationtwo:req.body.destinationtwo,
        Economy:req.body.economy,
  

    })
    const rr = await result.save()
    if(rr){
        res.send({statuscode:1})
    }else{
        res.send({statuscode:0})
    }
    
})

app.get('/GetSbooking',async(req,res)=>{
    const result = await SecondbookingModel.find();
    if(result){
        res.send({statuscode:1,data:result})
    }else{
        res.send({statuscode:0})
    }
})

app.get('/GetSbooking2',async(req,res)=>{
    const result = await SecondbookingModel.findOne();
    if(result){
        res.send({statuscode:1,data:result})
    }else{
        res.send({statuscode:0})
    }
})


app.delete('/deletesbooking/:id', async (req, res) => {
    const result = await SecondbookingModel.findOneAndDelete({ _id: req.params.id });
    if (result) {
        res.send({ statuscode: 1 });
    } else {
        res.send({ statuscode: 0 });
    }
});




app.put('/updatesbooking',upload.single('pic'), async (req, res) => {
    if(!req.carpic){
     picname = req.body.picname
    }else{
        fs.unlink("./public/uploads"+ req.body.oldpic,(err)=>{
            if(!err){
                console.log('crt')
            }else{
                console.log("not crt")
            }
        })
    }

    const result = await SecondbookingModel.updateOne({_id:req.body.id},{$set:{
        Pic:picname,
        StartDate:req.body.startdate,
        EndDate:req.body.enddate,
        Price:req.body.price,
        Destinationone:req.body.destinationone,
        Destinationtwo:req.body.destinationtwo,
        Economy:req.body.economy,
    }})
    if (result) {
        res.send({ statuscode: 1 })
    } else {
        res.send({ statuscode: 0 })
    }
})




const Secondbookingschema = mongoose.Schema({
    passengerCount: Number,
    passengers: [{
        category: String,
        name: String,
        surname: String,
        gender: String,
        nationality: String,
        number: String,
        dob: String,
        pincode: String,
        email: String,
        flyerNumber: String,
        meal: String,
        wheelchair: String
    }],
    Tprice: String,
    bookingId:String,
})

const SbookingModel = mongoose.model("Second booking detail",Secondbookingschema, 'Second booking detail');

app.post('/sbookiingdetails', async (req, res) => {
    try {
        const result = await new SbookingModel({
            passengerCount: req.body.passengerCount,
            passengers: req.body.passengers,
            Tprice: req.body.Tprice,
            bookingId:req.body.bookingId2
            
        }).save();
        
        if (result) {
            res.send({ statuscode: 1 });
        } else {
            res.send({ statuscode: 0 });
        }
    } catch (error) {
        console.error(error);
        res.send({ statuscode: 0, error: error.message });
    }
});





app.get("/Spaymentslip/:id", async (req, res) => {
  try {
    const data = await SbookingModel.findOne({ bookingId: req.params.id });
    if (data) {
      res.send({ statuscode: 1, data });
    } else {
      res.send({ statuscode: 0 });
    }
  } catch (err) {
    res.send({ statuscode: 0, error: err.message });
  }
});




app.post("/login",async(req,res)=>{
  const result = await  regmodel.findOne({Email:req.body.email})
  if(!result){
    res.send({statuscode:0})
  }else if(result.Password===req.body.password){
    if(result.utype ==="user"){
      res.send({statuscode:1, utype:'user', memberdata: result})
    }else{
      res.send({statuscode:1, utype:'admin', memberdata:result})
    }
  }
})




const registerschema = mongoose.Schema({
  Name:String,
  Email:String,
  Password:String,
  utype: String,
})
 
regmodel = mongoose.model("Sinup", registerschema,"Sinup")

app.post("/sinup",async(req,res)=>{
const result = await new regmodel({
  Name:req.body.name,
  Email:req.body.email,
  Password:req.body.password,
  utype:"user"
})
const rr = await result.save()
if(rr){
  res.send({statuscode:1})
}else{
  res.send({statuscode:0})
}
})





const flgtSchema = mongoose.Schema({
   formData: [{
    Airline:String,
    From: String,
    To: String,
    Trip: String,
    Depart: String,
    Return: String,
    Passengers: Number,
    ClassType: String,
    Price: Number,
    }],
})

const FlightModel = mongoose.model("Addflights", flgtSchema, 'Addflights');

app.post('/addflights', async (req, res) => {
    try {
        const result = await new FlightModel({
          formData: req.body.formData
            
        }).save();
        
        if (result) {
            res.send({ statuscode: 1 });
        } else {
            res.send({ statuscode: 0 });
        }
    } catch (error) {
        console.error(error);
        res.send({ statuscode: 0, error: error.message });
    }
});






app.get("/all-users", async (req, res) => {
  try {
    const users = await regmodel.find();
    res.send({ statuscode: 1, data: users });
  } catch (error) {
    res.send({ statuscode: 0, error: error.message });
  }
});








app.post("/update-role/:id", async (req, res) => {
  try {
    const { role } = req.body; 
    const result = await regmodel.findByIdAndUpdate(
      req.params.id,
      { utype: role },
      { new: true }
    );

    if (result) {
      res.send({ statuscode: 1, message: "Role updated", data: result });
    } else {
      res.send({ statuscode: 0, message: "Update failed" });
    }
  } catch (error) {
    res.send({ statuscode: 0, error: error.message });
  }
});



const addflightsschema = mongoose.Schema({
   Airlinelogo:String,
  Airlinename:String,
})
const AddflightModel = mongoose.model("Addflight",addflightsschema,'Addflight');    



app.post("/add-flights-brands", upload.single("airlinelogo"), async (req, res) => {
  try {
   
    const airlinelogo = req.file ? picname : null;
    const airlinename = req.body.airlinename;

    if (!airlinename || !airlinelogo) {
      return res.status(400).json({
        statuscode: 0,
        message: "Airline name and logo are required",
      });
    }

    const saved = await AddflightModel.create({
       Airlinelogo: airlinelogo,
      Airlinename: airlinename,
    });

    res.status(201).json({
      statuscode: 1,
      message: "Flight added successfully",
      data: saved,
    });
  } catch (error) {
    console.error("Error in /add-flights:", error);
    res.status(500).json({
      statuscode: 0,
      error: error.message,
    });
  }
});


app.get("/get-flights-brands", async (req, res) => {
    const result = await AddflightModel.find();
    if (result) {
      res.send({ statuscode: 1, data: result });
    } else {
      res.send({ statuscode: 0 });
    }
});


app.delete("/delete-flight-brands/:id", async(req,res)=>{
    const result = await AddflightModel.findOneAndDelete({_id:req.params.id})
    if(result){
        res.send({statuscode:1})
    }else{
        res.send({statuscode:0})
    }
})






const flightSchema = new mongoose.Schema({
  date: String,
  departuretime: String,
  arrivaltime: String,
  durationhourse: String,
  city1: String,
  city2: String,
  price: Number,
  flightname: String,
  flightnumber: String,
  stops: String,
  airlinelogo: String, 
  airlines:String,
  selectedAirline:String,
  
});

const addFlightModel = mongoose.model("Flight", flightSchema,"Flight");


app.post("/add-flight-details", async (req, res) => {
  try {
    const flight = new addFlightModel(req.body);
    await flight.save();

    res.status(201).json({
      statuscode: 1,
      message: "✈️ Flight details added successfully",
      data: flight,
    });
  } catch (error) {
    console.error("❌ Error adding flight:", error);
    res.status(500).json({
      statuscode: 0,
      message: "Error adding flight",
      error: error.message,
    });
  }
});



app.get("/get-flight-details", async (req, res) => {
  try {
    const flights = await addFlightModel.find();
    res.send({ statuscode: 1, data: flights });
  } catch (error) {
    res.send({ statuscode: 0, error: error.message });
  }
});



app.delete("/delete-flight/:id", async (req, res) => {
  try {
    const result = await addFlightModel.findByIdAndDelete(req.params.id);
    if (result) {
      res.send({ statuscode: 1, message: "Flight deleted successfully" });
    } else {
      res.send({ statuscode: 0, message: "Flight not found" });
    }
  } catch (error) {
    res.send({ statuscode: 0, error: error.message });
  }
});








const mainbookingSchema = new mongoose.Schema({
  Flight:String,
  Date:String,
  Passengername:String,
  Age:String,
  Contact:String,
Email:String,
Address:String,
City:String,
Pincode:String,
Meal:String,
Gender:String,
})

const MBookingmodel = mongoose.model("main Flight data", mainbookingSchema,"main flight data")

app.post("/mainbookingdetail/:id",async(req,res)=>{
const result =  new MBookingmodel({
    Flight:req.body.flight,
    Date:req.body.date,
    Passengername:req.body.passengername,
    Age:req.body.age,
    Contact:req.body.contactnumber,
    Email:req.body.email,
    Address:req.body.address,
    City:req.body.city,
    Pincode:req.body.pincode,
    Meal:req.body.meal,
    Gender:req.body.gender,
})
const rr = await result.save()
if(rr){
  res.send({statuscode:1})
}else{
  res.send({statuscode:0})
}
})


app.get("/getmainbookingdetail/:id",async(req,res)=>{
  const result = await MBookingmodel.find({_id:req.params.id});
  if(result){
    res.send({statuscode:1,data:result})  
}else{  
    res.send({statuscode:0})  
}
})  
