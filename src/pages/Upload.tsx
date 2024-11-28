import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload as UploadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const UploadPage = () => {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const videoFile = formData.get("video");
      if (!videoFile || (videoFile as File).size === 0) {
        toast.error("Please select a valid video file.");
        setUploading(false);
        return;
      }

      // Validate title and description
      const title = formData.get("title");
      const description = formData.get("description");
      if (!title || !description) {
        toast.error("Title and description are required.");
        setUploading(false);
        return;
      }

      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to upload video");
      }

      const result = await response.json();
      toast.success(result.message || "Video uploaded successfully!");
      navigate("/");
    } catch (error: any) {
      console.error("Upload failed:", error);
      toast.error(error.message || "Failed to upload video");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Sidebar />
      <Header />
      <main className="ml-64 pt-24 px-8 pb-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Upload Video</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
              <input
                type="file"
                name="video"
                accept="video/*"
                className="hidden"
                id="video-upload"
                required
              />
              <label
                htmlFor="video-upload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <div className="h-12 w-12 text-gray-400">
                  <UploadIcon />
                </div>
                <p className="text-lg">Click to upload video</p>
                <p className="text-sm text-gray-400">MP4, WebM, or OGG (Max 2GB)</p>
              </label>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  Title
                </label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter video title"
                  required
                  maxLength={100}
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Description
                </label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter video description"
                  required
                  className="min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload Video"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UploadPage;