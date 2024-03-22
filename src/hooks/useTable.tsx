import { Key, useCallback } from "react";

import { titles } from "../utils/titles";
import { folders } from "../data";
import { HiOutlineFolder } from "react-icons/hi";
import { Link } from "@nextui-org/react";

export const useTable = () => {
  type Folder = (typeof folders)[0];

  const renderCell = useCallback((folder: Folder, columnkey: Key) => {
    const cellValue = folder[columnkey as keyof Folder];

    switch (columnkey) {
      case "id":
        return <p>{folder.id}</p>;
      case "name":
        return (
          <Link href={`/home/${folder.name}`}>
            <div className="w-[203px] flex justify-start items-center">
              <HiOutlineFolder size={23} className="text-secondary mr-4" />
              <p className="text-black text-sm">{folder.name}</p>
            </div>
          </Link>
        );
      case "video":
        return <p className="text-sm">{folder.videos}</p>;
      case "highFolder":
        return <p className="text-sm">{folder.highFolder}</p>;
      case "updatedDate":
        return <p className="text-sm">{folder.updatedDate}</p>;
      default:
        return cellValue;
    }
  }, []);

  return {
    renderCell,
    titles,
    folders,
  };
};
