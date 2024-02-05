import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import assert from "assert"
import noteData from "../db/db.json" with { type: "json" };
import fs from "fs";
import { uuid } from 'uuidv4';

//added assert method 
assert(noteData, 'Failed to load db.json');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/notes", (req, res) => {
    res.json(noteData);
});
router.post("/notes", (req, res) => {
    req.body.id = uuid()
    noteData.push(req.body)
    console.log(noteData)
    console.log(uuid())
fs.writeFile('./db/db.json', JSON.stringify(noteData), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
res.json(req.body);
});

router.delete("/notes/:id", (req,res) => {
    const noteId = req.params.id;
    //find note index with id provided
    const noteIndex = noteData.findIndex(note => note.id === noteId);
    //if found remove from array
    if (noteIndex !== -1) {
        noteData.splice(noteIndex, 1);
    //save update to db.json file
    fs.writeFile('./db/db.json', JSON.stringify(noteData), function (err) {
        if (err) throw err;
        console.log('Note deleted!');
    });
    
     res.json({ message: 'Note deleted successfully' });
    } else {
    res.status(404).json({ message: 'Note not found' });
    }
    });

export default router;