import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

export const SidebarLayout = () => {
  return (
    <div className="h-[870px] flex flex-row">
      <Sidebar />
      <Outlet />
    </div>
  );
};
