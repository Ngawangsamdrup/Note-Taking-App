import e from "express";
import routes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = e(); // var names - app , PORT is not fixed ,can be any name
const PORT = process.env.PORT || 2000; // read the file from the .env file , if PORT doesn't exist it shift to the defualt value of the 2000
connectDB();

app.use(e.json()); // Analyze any JSON request and puts it in the req.body (controllernote.js)

app.use ("/api/notes",routes);
app.listen(PORT,() => {
    console.log ("listen to PORT 2000");
});



// mongodb+srv://samdrupn566_db_user:3yPFKcpEF6hcna82@cluster0.rjvnfth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
