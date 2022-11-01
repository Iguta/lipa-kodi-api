const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

//routes
const tenantsRoute = require("./routes/tenants");                         
const housesRoute = require("./routes/houses");                         

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB connection successful"))
.catch(err => console.log(err));

app.use(express.json());
app.use("/tenant", tenantsRoute);
app.use("/landlord", housesRoute);
app.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`);
})