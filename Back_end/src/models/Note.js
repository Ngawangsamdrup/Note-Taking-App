import mongoose from "mongoose"; // loads the mongoose libary so it can connect to the mongoDB

const notes_S = new mongoose.Schema ( // creates mongoose schema  and define
    {
        title: {
            type : String,    
            required : true, // means the fileds have to be present
        },
        content :{
            type : String,
            required :true,
        },
    },
    {timestamps : true} // auto adds and auto updates , when ever the change
);

const Note  = mongoose.model ("Note", notes_S); // create model named Note and use the schema created notes_S as blue print
export default Note; // so other files can export the Note mode - ./models/Note.js