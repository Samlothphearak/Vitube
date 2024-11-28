import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";

const Index = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/videos");
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <Sidebar />
      <Header />
      <main className="ml-64 pt-24 px-8 pb-8">
        <div className="video-grid">
          {videos.map((video) => (
            <VideoCard key={video._id} {...video} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
