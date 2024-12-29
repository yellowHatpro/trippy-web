import { MenuIcon, SearchIcon, UserIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Navbar() {
  const theme = useTheme();
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        {theme.theme === "dark" ? (
          <Image
            src="/trippy-dark.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-10 h-10"
          />
        ) : (
          <Image
            src="/trippy-light.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-10 h-10"
          />
        )}
      </div>
      <div>
        <div className="flex items-center gap-4 justify-center">
          <button className="text-lg hover:bg-gray-300 p-2 rounded-full">
            Stays
          </button>
          <button className="text-lg hover:bg-gray-300 p-2 rounded-full">
            Experiences
          </button>
        </div>
        <div className="flex items-center gap-4 flex-row rounded-full border border-[#2f6693] shadow-md p-2">
          <div className="border-r border-[#2f6693] pl-4 pr-24">
            <h1>Where</h1>
            <h1>Search destinations</h1>
          </div>
          <div className="border-r border-[#2f6693] pl-4 pr-24">
            <h1>Check in</h1>
            <h1>Add dates</h1>
          </div>
          <div className="border-r border-[#2f6693] pl-4 pr-24">
            <h1>Check out</h1>
            <h1>Add dates</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col pl-4 pr-24">
              <h1>Who</h1>
              <h1>Add guests</h1>
            </div>
            <button className="bg-[#3B6ECC] text-white p-4 rounded-full">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-full border border-gray-300 p-2 hover:shadow-md">
        <MenuIcon />
        <button className="flex items-center gap-2 bg-gray-800 p-2 rounded-full">
          <UserIcon className="text-white" />
        </button>
      </div>
    </div>
  );
}
