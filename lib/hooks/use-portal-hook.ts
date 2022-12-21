import { PortalGunContext } from "contexts/portal-gun-context";
import { useContext } from "react";

export const usePortals = () => {
  const { portals, setPortals } = useContext(PortalGunContext) ?? {};

  const mountPortal = (portalKey: string, children: React.ReactNode) => {
    setPortals?.((oldPortals) => {
      return { ...oldPortals, [portalKey]: children };
    });
  };

  const dismountPortal = (portalKey: string) => {
    setPortals?.(({ ...oldPortals }) => {
      delete oldPortals[portalKey];
      return oldPortals;
    });
  };

  return { portals, mountPortal, dismountPortal };
};
