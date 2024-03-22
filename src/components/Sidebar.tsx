//* Componentes
import { PlannerComp, SidebarItem } from "../components";

//* Iconos
import { LuLayoutDashboard, LuPlayCircle } from "react-icons/lu";
import { HiOutlineFolder } from "react-icons/hi";
import { IoBarChartOutline, IoInformationCircleSharp } from "react-icons/io5";
import { AiOutlineSetting } from "react-icons/ai";

//* Custom-Hook
import { useOpen } from "../hooks/useOpen";

export const Sidebar = () => {
  const { isOpen, setIsOpen } = useOpen();

  return (
    <nav
      className={`h-auto border  bg-white rounded-2xl p-3   ${
        isOpen ? "w-60" : "w-16"
      } `}
    >
      <div
        className="w-full h-40 flex justify-center items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className="bg-secondary rounded-2xl"
          src="/src/assets/logo.svg"
          alt="logo"
          width={60}
          height={60}
        />
      </div>
      <div className={`flex-1 mb-36 ${!isOpen ? "px-0" : "px-3"}`}>
        <SidebarItem icon={<LuLayoutDashboard size={20} />} text="dashboard" />
        <SidebarItem icon={<HiOutlineFolder size={20} />} text="videos" />
        <SidebarItem icon={<LuPlayCircle size={20} />} text="player" />
        <SidebarItem icon={<IoBarChartOutline size={20} />} text="analytics" />
        <SidebarItem
          icon={<AiOutlineSetting size={20} />}
          text="configuraciones"
        />
      </div>
      <>
        {!isOpen ? (
          <div onClick={() => setIsOpen(!isOpen)}>
            <SidebarItem
              icon={<IoInformationCircleSharp size={20} />}
              text="información"
            />
          </div>
        ) : (
          <PlannerComp />
        )}
      </>
    </nav>
  );
};
