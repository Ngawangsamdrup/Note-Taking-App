import ratelimit from "../config/upstash.js"; // load the   funcation from the following file mention 

const ratelimiter = async (req,res,next) => { // paremerter  names not fixed but the order is fixed-
                                              // 1) req : incoming request , 2) res: response send back, 3) next : move on to the next handler
    try{
    const {success} = await ratelimit.limit ("My_limit_key"); // succes is boolen proptery returned  by the .limit
                                                      // success TRUE not too many request
    if (!success){
        return res.status(429).json({message: "Too many request"}); // Con- put all the user requestion into bucket, if one user missues the API then all user request gets timed out.
    }
    next();
    }catch(error){
        console.error("Rate limit  error",error);
        next (error);
    }
};

export default ratelimiter;