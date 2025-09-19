import {Route, Routes} from "react-router"; // java Script library to show different URL , with out refreshing the page
import CreatePage from "./pages/CreatePage.jsx";  // loads the page componets for the front end - CreatePage,Homepage and NoteDetailPage
import HomePage from "./pages/HomePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import toast from "react-hot-toast"; // funcation 'toast' , used  for calling the react-hot-toast

const App = () => { // defines the main componet of UI - App , with arrow function '() =>'
  return (  
    <div className="relative h-full w-full"> {/* div is HTML container that stores everything and returns one vaule */}   
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]"/>
      <Routes> {/* Routes - container that store Route */}
        <Route path="/" element={<HomePage/>}/> {/* Route provides direct path, eg- http://localhost:3000/ */}
        <Route path="/create" element= {<CreatePage/>}/> 
        <Route path ="/note/:id" element={<NoteDetailPage/>}/>
      </Routes>
    </div>
  );
};

export default App;

