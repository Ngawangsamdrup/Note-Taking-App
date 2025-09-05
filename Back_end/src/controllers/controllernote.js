import Note from "../models/Note.js";

export async function  getNotes (req,res){ // defines the function , funcation name is -getallnotes
   try {                                      // async is  allows the use of await which waits until the procces is complete
        const notes = await Note.find().sort({createdAt: -1});  // finds all Notes  and storts the notes from newest - oldest 
        res.status(200).json(notes)
   } catch (error){
       console.error("GetNote error",error);
       res.status(500).json({message:"error"});
   }
}

export async function getNotesById(req,res){
    try{
    
        getNotesById = await Note.findById(req.params.id ); // req.body is not used in GET and DELETE cuase its either just reading or deleteing note . Use req.body when creating or updating Note like in POST.
        if (!getNotesById) return res.status(404).json({message:"Note note found"});
        res.status(200).json(getNotesById);
    } catch (error){
        console.error("getNotesById error",error);
        res.status(500).json({message:"Internal sever error"});
    }
}

export async function  createNotes (req,res){ // create/ defin an funcation , so can be exported to other files 
    try {                                     // async  waits  promise (end results)
      const{title ,content} = req.body;         // pulls the title/ content from the json body . 'app.use(express.json())'
      const note = new Note ({title,content});   // creates new note, using the schema from the Note in the import file at the top
      const savedNote = await note.save(); // save the note schema , in the mangoDB
      res.status(200).json(savedNote)
    }catch(error){
        console.error("CreateNote error",error);
        res.status(500).json({message:"error"});
    }

}

export async function updateNote(req,res){
    try{
        const {title,content} = req.body;
        const updateNotes = await Note.findByIdAndUpdate ( // 'findByIdAndUpdate' fixed mongoose method to find the Id and update the note
            req.params.id,  //req.params.id  places the real Id from the place holder id at the NotesRoutes.js code file, file path
            {title,content}, // update the fileds
            {new:true}, // return the updated fileds 
        );
        if(!updateNote) return res.status(404).json({message:"Note not found!"}); // check if the wrong ID
        res.status(200).json(updateNotes);
        // res.status(200).json ({message : "Done"});
    }catch (error){
        console.error("UpdateNote error",error);
        res.status(500).json({message:"internal sever error"});
    }
}

export async function deleteNotes(req,res){
try {
    // const{title,content} = req.body - because we don't need the body , instead we are deleting where the id is enough.
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) return res.status(404).json({message:"Note not found"});
    res.status(200).json({message:"Note deleted!"});
}catch(error){
    console.error("Delete Note error",error);
    res.status(500).json({message:"internal sever error"});
}
}
