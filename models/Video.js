import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    videoUrl: {
      type: String, // URL to the uploaded video file
      required: true,
    },
    thumbnailUrl: {
      type: String, // Optional: URL to the video's thumbnail
    },
    uploader: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the user who uploaded the video
      ref: "User",
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    duration: {
      type: String, // Duration in "mm:ss" or "hh:mm:ss" format
    },
    uploadDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  }
);

const Video = mongoose.model("Video", videoSchema);
export default Video;
