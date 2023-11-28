// Create web server

// Import express
const express = require("express");

// Import router
const router = express.Router();

// Import controller
const commentsController = require("../controllers/commentsController");

// Import middleware
const auth = require("../middleware/auth");

// Create routes
router.post("/", auth, commentsController.addComment);
router.get("/", commentsController.getComments);
router.put("/:id", auth, commentsController.updateComment);
router.delete("/:id", auth, commentsController.deleteComment);
router.get("/:id", commentsController.getComment);

// Export module
module.exports = router;