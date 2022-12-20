import { PortalGunContext } from "contexts/portal-gun-context";
import { useContext } from "react";

export const usePortals = () => {
  const { portals, setPortals } = useContext(PortalGunContext) ?? {};

  const addPortal = (portalKey: string, children: React.ReactNode) => {
    setPortals?.((oldPortals) => ({ ...oldPortals, [portalKey]: children }));
  };

  const removePortal = (portalKey: string) => {
    setPortals?.(({ ...oldPortals }) => {
      delete oldPortals[portalKey];
      return oldPortals;
    });
  };

  return { portals, addPortal, removePortal };
};
