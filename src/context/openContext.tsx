import { FC, ReactNode, createContext, useEffect, useState } from "react";

interface IOpenContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children: ReactNode;
}

export const openContext = createContext<IOpenContext>({} as IOpenContext);

export const OpenProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <openContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </openContext.Provider>
  );
};
