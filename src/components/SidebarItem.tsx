import { FC, ReactNode } from "react";
import { useOpen } from "../hooks/useOpen";

interface Props {
  icon: ReactNode;
  text: string;
}

export const SidebarItem: FC<Props> = ({ text, icon }) => {
  const { isOpen } = useOpen();
  return (
    <li
      className={`group relative flex items-center py-2 my-4 rounded-md cursor-pointer  hover:bg-secondary hover:text-white ${
        !isOpen ? "px-[10px]" : "px-3"
      } `}
    >
      <div>{icon}</div>
      <h2
        className={`capitalize ml-6 duration-500 ${
          !isOpen && "opacity-0 translate-x-28 overflow-hidden"
        }`}
      >
        {text}
      </h2>
      <h2
        className={`${
          isOpen && "hidden"
        } absolute z-10 left-48 bg-blue-200 font-semibold capitalize whitespace-pre text-gray-500 p-0 w-0 overflow-hidden rounded-md drop-shadow group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
      >
        {text}
      </h2>
    </li>
  );
};

export default SidebarItem;
