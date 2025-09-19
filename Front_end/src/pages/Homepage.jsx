import Navbar from "../components/Navbar.jsx";
import {useEffect, useState} from "react"; // "useEffect" runs the updated code, "useState" updates and refresh the page
import axios from "axios"; // used to call the backend vai HTPP request
import RateLimitUI from "../components/RateLimitUI.jsx";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard.jsx";

const Homepage = () => {
  const[IsRateLimit, SetRateLimit] = useState(false); // set the RateLimit as false , "SetRateLimit" update the the Ratelimit boleen value
  const[Notes, SetNotes] = useState([]); // empty array
  const[loading, SetLoading] = useState(true);
  
  useEffect(() =>{ // used for runing the code 
    const fetchNote = async () => {
      try{
        const res = await axios.get("http://localhost:2000/api/notes"); // calling the backend code
        console.log(res.data);
        SetNotes(res.data);
        SetRateLimit(false);
      }catch(error){
        console.log("Fetching Error!");
        console.log(error);
        if (error.response?.status === 429){
              SetRateLimit(true)
        }else{
              toast.error("Failed to load notes")
        }

      } finally {
        SetLoading(false);
      }
    };
    fetchNote();
  },[]); // '[]' - means only run this code componets loads

  return (
    <div className='min-h-screen'>
        <Navbar/>
        {IsRateLimit && <RateLimitUI/>}
        <div className ="max-w-7xl mx-auto p-4 mt-6">
            {loading && <div className="text-center text-primary py-10">loading Notes .....</div>}
            {Notes.length > 0 && !IsRateLimit && (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Notes.map((notes) =>(
                <div key={notes._id}>
                  <NoteCard note={notes}/>
                </div>
              ))}
            </div>
            )}
        </div>
    </div>
  )
}
export default Homepage;

