import { FC, ReactNode, createContext, useState } from "react";

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

  return (
    <openContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </openContext.Provider>
  );
};
