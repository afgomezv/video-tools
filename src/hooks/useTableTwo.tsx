import { Key, useCallback } from "react";

import { titlesHeaders } from "../utils/titles";
import { videos } from "../data";
import { LuPlayCircle } from "react-icons/lu";

export const useTableTwo = () => {
  type Video = (typeof videos)[0];

  const renderCell = useCallback((video: Video, columnkey: Key) => {
    const cellValue = video[columnkey as keyof Video];

    switch (columnkey) {
      case "id":
        return <p>{video.id}</p>;
      case "name":
        return (
          <div className="flex">
            <div className="flex justify-start items-center">
              <LuPlayCircle size={23} className="text-secondary mr-4" />
            </div>
            <p className="text-black text-sm">{video.name}</p>
          </div>
        );
      case "highFile":
        return <p>{video.highFile}</p>;
      case "duration":
        return <p>{video.duration}</p>;
      case "updatedDate":
        return <p>{video.updatedDate}</p>;
      default:
        return cellValue;
    }
  }, []);

  return {
    renderCell,
    titlesHeaders,
    videos,
  };
};
