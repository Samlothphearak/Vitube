import { Search, Bell, Upload, Settings, LogOut, User } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();

  const handleNotificationClick = (notificationId: string) => {
    console.log('Notification clicked:', notificationId);
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
  };

  const handleUploadClick = () => {
    navigate('/upload');
  };

  const handleLogout = () => {
    navigate('/signin');
  };

  const handleSettings = () => {
    console.log('Settings clicked');
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get('search');
    console.log('Search query:', searchQuery);
  };

  const notifications = [
    {
      id: '1',
      title: 'New subscriber',
      message: 'John Doe just subscribed to your channel',
      time: '5m ago'
    },
    {
      id: '2',
      title: 'Video processed',
      message: 'Your latest video is now ready',
      time: '1h ago'
    },
    {
      id: '3',
      title: 'New comment',
      message: 'Someone commented on your video',
      time: '2h ago'
    }
  ];

  return (
    <header className="fixed top-0 right-0 left-64 h-14 bg-[#0f0f0f] border-b border-white/10 flex items-center px-6 z-10">
      <div className="flex-1 max-w-2xl mx-auto flex items-center gap-4">
        <form onSubmit={handleSearch} className="flex-1 relative">
          <Input
            name="search"
            placeholder="Search videos..."
            className="w-full bg-[#121212] border-[#303030] focus:border-[#1c62b9] pl-10 h-10 rounded-full"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#909090]" size={18} />
        </form>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-full hover:bg-[#272727]"
          onClick={handleUploadClick}
        >
          <Upload size={20} className="text-[#f1f1f1]" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="relative w-10 h-10 rounded-full hover:bg-[#272727]"
            >
              <Bell size={20} className="text-[#f1f1f1]" />
              {notifications.length > 0 && (
                <Badge 
                  variant="secondary"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-600 text-white border-2 border-[#0f0f0f] text-xs rounded-full"
                >
                  {notifications.length}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 bg-[#282828] border-[#404040] text-[#f1f1f1] rounded-xl mt-2">
            <DropdownMenuLabel className="py-3 px-4 text-[15px] font-normal border-b border-[#404040]">Notifications</DropdownMenuLabel>
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                onClick={() => handleNotificationClick(notification.id)}
                className="flex flex-col items-start gap-1 p-4 hover:bg-[#3f3f3f] cursor-pointer border-b border-[#404040] last:border-0"
              >
                <div className="font-medium text-[14px]">{notification.title}</div>
                <div className="text-[13px] text-[#aaa]">{notification.message}</div>
                <div className="text-[12px] text-[#aaa]">{notification.time}</div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar 
              className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-[#3f3f3f] transition-all rounded-full"
            >
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-[#282828] border-[#404040] text-[#f1f1f1] rounded-xl mt-2">
            <DropdownMenuLabel className="py-3 px-4 text-[15px] font-normal border-b border-[#404040]">My Account</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleProfileClick} className="py-3 px-4 gap-3 hover:bg-[#3f3f3f] cursor-pointer">
              <User className="h-5 w-5" />
              <span className="text-[14px]">Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSettings} className="py-3 px-4 gap-3 hover:bg-[#3f3f3f] cursor-pointer">
              <Settings className="h-5 w-5" />
              <span className="text-[14px]">Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#404040]" />
            <DropdownMenuItem onClick={handleLogout} className="py-3 px-4 gap-3 hover:bg-[#3f3f3f] cursor-pointer text-[#f44336]">
              <LogOut className="h-5 w-5" />
              <span className="text-[14px]">Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;