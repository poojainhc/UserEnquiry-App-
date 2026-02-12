let express=require('express');
let mongoose=require('mongoose');
let cors=require('cors');

const enquiryRoutes = require('./Routes/web/enquiryRoute');
require('dotenv').config();

let app=express();
 app.use(cors());
app.use(express.json());

app.use('/web/api/', enquiryRoutes);
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
});