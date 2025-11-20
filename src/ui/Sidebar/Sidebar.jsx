import SidebarNav from "./SidebarNav";

function Sidebar() {
  return (
    <div className="flex h-screen w-[50px] justify-center border-r border-gray-300 shadow-md transition-all duration-300 ease-linear [@media(min-width:1200px)]:w-[300px]">
      <SidebarNav />
    </div>
  );
}

export default Sidebar;
