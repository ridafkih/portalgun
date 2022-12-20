import { PortalGunContext } from "contexts/portal-gun-context";
import { useContext } from "react";
import type { PortalOptions } from "types/options-types";

export const usePortals = () => {
  const { portals, setPortals } = useContext(PortalGunContext) ?? {};

  const mountPortal = (
    portalKey: string,
    children: React.ReactNode,
    options: PortalOptions
  ) => {
    setPortals?.((oldPortals) => {
      if (oldPortals[portalKey] && !options?.allowDuplicates)
        throw Error(`Duplicate portal with key ${portalKey}`);

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
