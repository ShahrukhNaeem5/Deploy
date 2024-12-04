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
app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", "*"],  // Allow all sources (not recommended)
    }
  }));

/* if(process.env.NODE_ENV==='production'){
    const dirPath=path.resolve();
    app.use(express.static("client/dist"));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(dirPath,"client","dist","index.html"));
    })
} */
    if (process.env.NODE_ENV === 'production') {
        // Make sure the path points to the correct build folder
        const buildPath = path.join(__dirname, 'client', 'build');
        app.use(express.static(buildPath));
    
        // This will handle all routes and serve index.html for non-API routes
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(buildPath, 'index.html'));
        });
    }
      



app.listen(process.env.PORT,async function(){
    Db_Connection();
    console.log(`Server is running on Port ${process.env.PORT}`);

});


