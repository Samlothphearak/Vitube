import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";

const Index = () => {
  const videos = [
    {
      id: "video1",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Building a Modern Website with React and Tailwind CSS",
      channel: "Tech Tutorials",
      views: "125K",
      duration: "15:30",
      channelImage: "https://github.com/shadcn.png",
      verified: true
    },
    {
      id: "video2",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title: "Complete Guide to Web Development in 2024",
      channel: "CodeMaster",
      views: "89K",
      duration: "22:15",
      channelImage: "https://github.com/shadcn.png",
      verified: true
    },
    {
      id: "video3",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Learn Python Programming From Scratch",
      channel: "Programming Hub",
      views: "250K",
      duration: "18:45",
      channelImage: "https://github.com/shadcn.png",
      verified: false
    },
    {
      id: "video4",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: "The Future of Artificial Intelligence",
      channel: "Tech Insights",
      views: "180K",
      duration: "12:20",
      channelImage: "https://github.com/shadcn.png",
      verified: true
    },
    {
      id: "video5",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "10 Must-Know JavaScript Tips",
      channel: "JS Mastery",
      views: "95K",
      duration: "10:15",
      channelImage: "https://github.com/shadcn.png",
      verified: false
    },
    {
      id: "video6",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      title: "Understanding Data Structures",
      channel: "CS Fundamentals",
      views: "150K",
      duration: "20:30",
      channelImage: "https://github.com/shadcn.png",
      verified: true
    },
  ];

  return (
    <div className="min-h-screen">
      <Sidebar />
      <Header />
      <main className="ml-64 pt-24 px-8 pb-8">
        <h2 className="text-2xl font-bold mb-6">Trending Videos</h2>
        <div className="video-grid">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;