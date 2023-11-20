import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";
import { FcLikePlaceholder } from "react-icons/fc";

export const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-950 border-b border-gray-700">
      <nav className="container flex items-center justify-between py-1 lg:py-5">
        <span className="p-2">
          <FcLikePlaceholder />
        </span>
        <MobileNav />
        <DesktopNav />
      </nav>
    </div>
  );
};
