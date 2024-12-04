const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const helmet = require('helmet');

const UserRoute=require("./routes/UserRoute");

const UserFetchRoute=require("./routes/UserFetchRoute");
const UpdateRouter=require("./routes/UpdateRouter");
const DeleteRoute=require("./routes/DeleteRoute");

require("dotenv").config({path:'./.env'});

const path =require("path")

const Db_Connection =require("./config/Db");



const app =express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/user',UserRoute);
app.use('/api/fetch',UserFetchRoute);
// Mount the router with '/api' prefix
app.use('/api', UpdateRouter);
app.use('/api/deleteuser', DeleteRoute);
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            fontSrc: ["'self'", 'https://fonts.gstatic.com'], // Allow fonts from Google Fonts
            scriptSrc: ["'self'", "'unsafe-inline'", "https://www.google-analytics.com"], // Example for Google Analytics
            styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"], // Allow Google Fonts CSS
            // Add other directives as necessary
        }
    }
}));

/* if(process.env.NODE_ENV==='production'){
    const dirPath=path.resolve();
    app.use(express.static("client/dist"));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(dirPath,"client","dist","index.html"));
    })
} */
    if(process.env.NODE_ENV === 'production') {
        const dirPath = path.resolve();
        // Serve the React build output from the 'client/build' folder
        app.use(express.static(path.join(dirPath, 'client', 'build')));
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(dirPath, 'client', 'build', 'index.html'));
        });
    }



app.listen(process.env.PORT,async function(){
    Db_Connection();
    console.log(`Server is running on Port ${process.env.PORT}`);

});


