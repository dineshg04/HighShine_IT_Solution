const express = require('express');
const app = express();
const cors = require('cors');
const connectDb = require('./src/config/db');
const visitorRoutes = require('./src/routes/visitorRoutes');
require('dotenv').config();




app.use(cors());

app.use(express.json());

app.use("/api", visitorRoutes);


const PORT = process.env.PORT  || 5000 ;
 
connectDb();
app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`);
});
