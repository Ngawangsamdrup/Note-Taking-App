import {Redis} from "@upstash/redis"; // loads the the upstash libary
import {Ratelimit} from "@upstash/ratelimit"; // {Redis} and {Rate limit} are exported names ,means that the name cannot to be changed, check for exported names in the README file -> node_modules -> @upstash
import dotenv from "dotenv"; // loads the .env files

dotenv.config(); // process the .env 

const ratelimit = new Ratelimit ({
    redis: Redis.fromEnv(), // reads the the redis enviorment variables from the .env file , "Redis.fromEnv();" can you only read the .env file with the same key names as shown in the .env file.
    limiter: Ratelimit.slidingWindow(100, "60 s"), // rate limit for 100 request , in 60 seconds 
});

// redis and limiter like dictionary wih key and value , with the redis and limiter being fixed names

export default ratelimit;
// Other files can export this  function