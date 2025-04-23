import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Player from "./Player";
import TopBar from "./TopBar";

function Layout() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-spotify-dark-grey to-spotify-black overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="flex-shrink-0 h-full overflow-y-auto">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top navigation bar */}
          <TopBar />

          {/* Content area - scrollable */}
          <div className="flex-1 overflow-y-auto py-4 px-8 pb-6">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Player controls - fixed at bottom */}
      <div className="flex-shrink-0 z-10">
        <Player />
      </div>
    </div>
  );
}

export default Layout;
