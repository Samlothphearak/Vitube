import { Home, TrendingUp, Gamepad, Music, Film, History, Library, ThumbsUp, Settings, Newspaper, Clock, PlaySquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const Sidebar = ({ className }: { className?: string }) => {
  const mainMenuItems = [
    { icon: <Home size={20} />, label: "Home", path: "/" },
    { icon: <Newspaper size={20} />, label: "Shorts", path: "/shorts" },
    { icon: <PlaySquare size={20} />, label: "Subscriptions", path: "/subscriptions" },
  ];

  const secondaryMenuItems = [
    { icon: <Library size={20} />, label: "Library", path: "/library" },
    { icon: <History size={20} />, label: "History", path: "/history" },
    { icon: <Clock size={20} />, label: "Watch Later", path: "/watch-later" },
    { icon: <ThumbsUp size={20} />, label: "Liked Videos", path: "/liked" },
  ];

  const exploreItems = [
    { icon: <TrendingUp size={20} />, label: "Trending", path: "/trending" },
    { icon: <Music size={20} />, label: "Music", path: "/music" },
    { icon: <Film size={20} />, label: "Movies", path: "/movies" },
    { icon: <Gamepad size={20} />, label: "Gaming", path: "/gaming" },
  ];

  const handleNavigation = (path: string) => {
    console.log('Navigating to:', path);
  };

  return (
    <div className={cn(
      "w-64 h-screen fixed left-0 top-0 bg-[#0f0f0f] flex flex-col overflow-y-auto pb-4",
      "scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent",
      className
    )}>
      <div className="flex items-center gap-2 p-4 mb-2">
        <Film className="text-white" size={24} />
        <span className="text-xl font-bold text-white">VideoShare</span>
      </div>

      <Separator className="mb-2 bg-zinc-800" />

      <div className="px-2 space-y-1">
        {mainMenuItems.map((item) => (
          <a
            key={item.label}
            onClick={() => handleNavigation(item.path)}
            className="flex items-center gap-6 px-3 py-2 text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors duration-200"
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </a>
        ))}
      </div>

      <Separator className="my-3 bg-zinc-800" />

      <div className="px-2 space-y-1">
        {secondaryMenuItems.map((item) => (
          <a
            key={item.label}
            onClick={() => handleNavigation(item.path)}
            className="flex items-center gap-6 px-3 py-2 text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors duration-200"
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </a>
        ))}
      </div>

      <Separator className="my-3 bg-zinc-800" />

      <div className="px-2">
        <p className="text-sm font-semibold text-zinc-400 px-3 mb-2">Explore</p>
        <div className="space-y-1">
          {exploreItems.map((item) => (
            <a
              key={item.label}
              onClick={() => handleNavigation(item.path)}
              className="flex items-center gap-6 px-3 py-2 text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors duration-200"
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <Separator className="my-3 bg-zinc-800" />

      <div className="mt-auto px-2">
        <a 
          onClick={() => handleNavigation("/settings")}
          className="flex items-center gap-6 px-3 py-2 text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors duration-200"
        >
          <Settings size={20} />
          <span className="text-sm">Settings</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;