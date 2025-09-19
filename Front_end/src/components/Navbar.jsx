import {Link} from "react-router"; // link component is used, can move to other pags like createPage or HomePage etc
import {PlusIcon} from "lucide-react";  // imports the plusIcon (+)

const Navbar = () =>{
  return (
    <header className="bg-base-300 border-b border-base-content/10"> 
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">THINK BOARD</h1>
        <div className="flex items-center gap-4">
          <Link to={"/create"} className="btn btn-primary"> {/*link to the 'createPage'. tailwind/dasiyUi botton styling - className ="btn btn-primary"*/}
            <PlusIcon className="size 5"/> {/*PlusIcon (+) is displayed /adds to the button, with the size*/}
            <span>NEW NOTE </span> {/*Lables the Icon NET NOTE "+"*/}
          </Link>
        </div>
       </div>
      </div>
    </header>
  );
};

export default Navbar;

  //Tailwind CSS class that style the header
  //<header className="bg-base-300 border-b border-base-content/10">
 // bg-base-300: Sets the background color, boder-b: bottom border, border-base-content/10: light colored border
 //<div className="mx-auto max-w-6xl p-4">
 // mx-auto → centers horizontally,max-w-6xl → sets maximum width,p-4 → padding

