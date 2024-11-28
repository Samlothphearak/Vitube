import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import VideoCard from "@/components/VideoCard";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const Watch = () => {
  const { id } = useParams();
  const [showSidebar, setShowSidebar] = useState(true);
  const [commentText, setCommentText] = useState("");

  // Mock data for suggested videos
  const suggestedVideos = [
    {
      id: "1",
      title: "Amazing Sunset Time Lapse",
      thumbnail: "https://picsum.photos/seed/1/360/200",
      channel: "Nature Channel",
      views: "120K",
      duration: "4:30",
      channelImage: "https://picsum.photos/seed/user1/40/40",
    },
    {
      id: "2",
      title: "Learn React in 30 Minutes",
      thumbnail: "https://picsum.photos/seed/2/360/200",
      channel: "Code Masters",
      views: "250K",
      duration: "30:00",
      channelImage: "https://picsum.photos/seed/user2/40/40",
    },
    {
      id: "3",
      title: "Street Food Adventures",
      thumbnail: "https://picsum.photos/seed/3/360/200",
      channel: "Food Explorer",
      views: "85K",
      duration: "12:45",
      channelImage: "https://picsum.photos/seed/user3/40/40",
    },
  ];

  // Mock data for comments
  const comments = [
    {
      id: 1,
      user: "John Doe",
      avatar: "https://picsum.photos/seed/user4/40/40",
      text: "This is an amazing video! Thanks for sharing.",
      likes: 245,
      timestamp: "2 days ago"
    },
    {
      id: 2,
      user: "Jane Smith",
      avatar: "https://picsum.photos/seed/user5/40/40",
      text: "Very informative content, keep it up!",
      likes: 123,
      timestamp: "1 day ago"
    }
  ];

  const handleCommentSubmit = () => {
    console.log("Comment submitted:", commentText);
    setCommentText("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className={`transition-all duration-300 ease-in-out ${showSidebar ? 'ml-64' : 'ml-0'}`}>
        <Sidebar className={`transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`} />
        <div className="pt-24 px-4 lg:px-8">
          <div className="max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Video Player */}
                <div className="aspect-video bg-zinc-800 rounded-xl">
                  <div className="w-full h-full flex items-center justify-center text-zinc-400">
                    Video ID: {id}
                  </div>
                </div>

                {/* Video Info */}
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold">Video Title</h1>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Channel Name</h3>
                        <p className="text-sm text-muted-foreground">1M subscribers</p>
                      </div>
                    </div>
                    <Button variant="secondary">Subscribe</Button>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Comments Section */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Comments</h2>
                  
                  {/* Comment Input */}
                  <div className="flex gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div className="flex-1 space-y-4">
                      <Textarea 
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="min-h-[80px]"
                      />
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" onClick={() => setCommentText("")}>Cancel</Button>
                        <Button onClick={handleCommentSubmit}>Comment</Button>
                      </div>
                    </div>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-6">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={comment.avatar} />
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{comment.user}</span>
                            <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
                          </div>
                          <p className="mt-1">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Suggested Videos */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Suggested Videos</h2>
                <div className="space-y-4">
                  {suggestedVideos.map((video) => (
                    <VideoCard key={video.id} {...video} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;