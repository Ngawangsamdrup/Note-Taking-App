import { StrictMode } from 'react' // react helper that runs extra checks in the dev to , to catch any mistakes
import { createRoot } from 'react-dom/client' // tell react where to show the app(the whole UI) on the page 
import './index.css' // loads the .css Styles that conains the 'fontsize,color, background etc
import App from './App.jsx' // react component where built the UI 
import {BrowserRouter} from "react-router"; //Uses different URl , to show different pages, with out full relaod.
import {Toaster} from "react-hot-toast"; // react libary , shows pop-up notfications

createRoot(document.getElementById('root')).render( // finds the HTML index with id'root' and render (draws)the componenet  '<App />'
  <StrictMode>
    <BrowserRouter>
      <Toaster/> {/*Named export(name is fixed), its like container where the pop-up notfications show up*/}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
