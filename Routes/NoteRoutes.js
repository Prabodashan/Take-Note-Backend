const express = require("express");
const router = express.Router();

const {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
} = require("../Controllers/NoteController");

const { protect } = require("../Middleware/AuthMiddleware");

//note routes

router.route("/").get(protect, getNotes).post(protect, setNote);
router.route("/:id").delete(protect, deleteNote).put(protect, updateNote);

module.exports = router;
