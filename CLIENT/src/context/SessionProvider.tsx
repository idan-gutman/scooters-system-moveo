import useLocalStorage from 'hooks/useLocalStorage';
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

interface ISessionContext {
  isLightTheme: boolean;
  isCelsius: boolean;
  setIsLightTheme?: Dispatch<SetStateAction<boolean>>;
  setIsCelsius?: Dispatch<SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen?: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
  openSearchBar: boolean;
  setOpenSearchBar?: Dispatch<SetStateAction<boolean>>;
  isMap: boolean;
  setIsMap?: Dispatch<SetStateAction<boolean>>;
}

const initialState = {
  isLightTheme: true,
  isCelsius: false,
  isMobileMenuOpen: false,
  isModalOpen: false,
  openSearchBar: false,
  isMap: false,
};

const SessionContext = createContext<ISessionContext>(initialState);

export const SessionProvider: FC = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useLocalStorage('light-mode', true);
  const [isCelsius, setIsCelsius] = useLocalStorage('is-celsius', true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [isMap, setIsMap] = useState(false);

  const value = useMemo(
    () => ({
      isLightTheme,
      setIsLightTheme,
      isCelsius,
      setIsCelsius,
      isMobileMenuOpen,
      setIsMobileMenuOpen,
      isModalOpen,
      setIsModalOpen,
      openSearchBar,
      setOpenSearchBar,
      isMap,
      setIsMap,
    }),
    [
      isCelsius,
      isLightTheme,
      setIsCelsius,
      setIsLightTheme,
      isMobileMenuOpen,
      setIsMobileMenuOpen,
      isModalOpen,
      setIsModalOpen,
      openSearchBar,
      setOpenSearchBar,
      isMap,
      setIsMap,
    ]
  );

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export default SessionContext;
