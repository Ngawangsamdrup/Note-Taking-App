import e from "express";
import {getNotes,createNotes,deleteNotes,updateNote,getNotesById} from "../controllers/controllernote.js";
const router = e.Router();

router.get("/",getNotes);

router.get("/:id",getNotesById);

router.post("/",createNotes);

router.put("/:id",updateNote)

router.delete ("/:id",deleteNotes);



export default router;
