import express from "express";
import multer from "multer";
import { Video } from "../models/Video.js";

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});
const upload = multer({ storage });

// Upload video route
router.post("/upload", upload.single("video"), async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newVideo = new Video({
      title,
      description,
      videoPath: req.file.path,
    });

    await newVideo.save();

    res.status(201).json({ message: "Video uploaded successfully", video: newVideo });
  } catch (error) {
    console.error("Error uploading video:", error);
    res.status(500).json({ message: "Failed to upload video", error: error.message });
  }
});

export default router;