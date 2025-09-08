import e from "express";
import routes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import ratelimiter from "./middleware/ratelimiter.js";
import dotenv from "dotenv";

dotenv.config();
const app = e(); // var names - app , PORT is not fixed ,can be any name
const PORT = process.env.PORT || 2000; // read the file from the .env file , if PORT doesn't exist it shift to the defualt value of the 2000


app.use(e.json()); // Analyze any JSON request and puts it in the req.body (controllernote.js) / Middle ware

app.use(ratelimiter);

// // costume middle ware  shows the method -GET,PUT,POST and File path. 
// app.use((req,res,next) => {
//     console.log(`Req method ${req.method} and Req URL ${req.url} `);
//     next(); //next() means move on  to the next middle ware , so it doesn't hang.
// });


app.use ("/api/notes",routes);

connectDB ().then ( () => { // Good production practice first connectd to database (mongoDB) , then start the appication
    app.listen(PORT, () =>{
        console.log ("Listen to PORT 2000");
    });
});



// mongodb+srv://samdrupn566_db_user:3yPFKcpEF6hcna82@cluster0.rjvnfth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
