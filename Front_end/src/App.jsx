import {Route, Routes} from "react-router"; // java Script library to show different URL , with out refreshing the page
import CreatePage from "./pages/CreatePage.jsx";  // loads the page componets for the front end - CreatePage,Homepage and NoteDetailPage
import Homepage from "./pages/HomePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast"; // funcation 'toast' , used  for calling the react-hot-toast

const App = () => { // defines the main componet of UI - App , with arrow function '() =>'
  return (  
    <div data-theme = "forest"> {/* div is HTML container that stores everything and returns one vaule */}   
      <Routes> {/* Routes - container that store Route */}
        <Route path="/" element={<Homepage/>}/> {/* Route provides direct path, eg- http://localhost:3000/ */}
        <Route path="/create" element= {<CreatePage/>}/> 
        <Route path ="/note/:id" element={<NoteDetailPage/>}/>
      </Routes>
    </div>
  );
};

export default App;

