import { Key, useCallback } from "react";

import { titlesHeaders } from "../utils/titles";
import { videos } from "../data";

export const useTableTwo = () => {
  type Video = (typeof videos)[0];

  const renderCell = useCallback((video: Video, columnkey: Key) => {
    const cellValue = video[columnkey as keyof Video];

    switch (columnkey) {
      case "id":
        return <p>{video.id}</p>;
      case "name":
        return <p>{video.name}</p>;
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