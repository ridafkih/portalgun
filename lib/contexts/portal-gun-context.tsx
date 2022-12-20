import { createContext, FC, PropsWithChildren, useState } from "react";

type PortalMap = Record<string, React.ReactNode>;

type PortalGunContextProps = {
  portals: PortalMap;
  setPortals: React.Dispatch<React.SetStateAction<PortalMap>>;
} | null;

export const PortalGunContext = createContext<PortalGunContextProps>(null);

export const PortalGunProvider: FC<PropsWithChildren> = ({ children }) => {
  const [portals, setPortals] = useState<PortalMap>({});

  return (
    <PortalGunContext.Provider value={{ portals, setPortals }}>
      {children}
    </PortalGunContext.Provider>
  );
};
