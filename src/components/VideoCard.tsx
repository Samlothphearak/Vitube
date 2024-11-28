import { useNavigate } from "react-router-dom";

interface VideoCardProps {
  id: string;
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  duration: string;
  channelImage?: string;
  verified?: boolean;
}

const VideoCard = ({
  id,
  thumbnail,
  title,
  channel,
  views,
  duration,
  channelImage = "https://github.com/shadcn.png",
  verified = false,
}: VideoCardProps) => {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/watch/${id}`);
  };

  const handleChannelClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/channel/${channel.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div
      onClick={handleVideoClick}
      className="cursor-pointer group transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
        <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs rounded">
          {duration}
        </span>
      </div>
      <div className="mt-3 flex gap-3">
        <div
          className="flex-shrink-0"
          onClick={handleChannelClick}
        >
          <img
            src={channelImage}
            alt={channel}
            className="w-9 h-9 rounded-full object-cover hover:ring-2 hover:ring-secondary"
          />
        </div>
        <div>
          <h3 className="font-semibold line-clamp-2 group-hover:text-blue-500">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
            <p className="hover:text-white">{channel}</p>
            {verified && (
              <svg
                className="w-4 h-4 text-blue-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{views} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;