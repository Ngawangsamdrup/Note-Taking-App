import mong from "mongoose";

export const  connectDB = async () => { // () => is arrow function  () used for arguements eg- (req,res)
    try { 
        await mong.connect(process.env.MONGO_URI); // async allows the use of await inside the funcation which waits fro each promise(endresults) to be completed
        console.log("Connected");
    } catch (error){
        console.error("connection failed",error);
        process.exit(1);// if there is error , .exit(1) shuts the whole node.js program / restart
    }
};
