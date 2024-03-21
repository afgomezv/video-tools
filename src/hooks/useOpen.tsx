import { useContext } from "react";
import { openContext } from "../context/openContext";

export const useOpen = () => {
  const context = useContext(openContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};
