import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

export const SidebarLayout = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Outlet />
    </div>
  );
};
