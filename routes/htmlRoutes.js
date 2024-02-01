import express from "express"
import path from "path"
const router = express.Router()
router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})
export default router 