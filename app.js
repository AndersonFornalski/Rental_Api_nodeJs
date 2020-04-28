const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const config  =  require("./src/config/dev");
const Rental = require("./src/models/rental");
const FakeDb = require("./src/models/fake-db");

const rentalRoutes = require("./src/routes/rentals"),
      userRoutes = require("./src/routes/users");

mongoose.connect(config.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(()=>{
        console.log("conectado no mongooDb-Atlas...!!!")
        const fakeDb = new FakeDb();
        //fakeDb.seeDb();    
});

const app = express();

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(bodyParser.json());

app.use("/api/v1/rentals", rentalRoutes);
app.use("/api/v1/users", userRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Servidor logado na port 3000")
});







