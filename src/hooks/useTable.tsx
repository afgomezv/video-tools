import { Key, useCallback } from "react";

import { titles } from "../utils/titles";
import { folders } from "../data";

export const useTable = () => {
  type Folder = (typeof folders)[0];

  const renderCell = useCallback((folder: Folder, columnkey: Key) => {
    const cellValue = folder[columnkey as keyof Folder];

    switch (columnkey) {
      case "id":
        return <p>{folder.id}</p>;
      case "name":
        return <p>{folder.name}</p>;
      case "video":
        return <p>{folder.videos}</p>;
      case "highFolder":
        return <p>{folder.highFolder}</p>;
      case "updatedDate":
        return <p>{folder.updatedDate}</p>;
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
