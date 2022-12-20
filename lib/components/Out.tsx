import { usePortals } from "hooks/use-portal-hook";
import type { FC } from "react";
import { PortalComponentProps } from "types/component-types";

export const Out: FC<PortalComponentProps> = ({ portalKey }) => {
  const { portals } = usePortals();
  return <>{portals?.[portalKey]}</>;
};
