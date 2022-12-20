import { usePortals } from "hooks/use-portal-hook";
import { FC, PropsWithChildren, useEffect } from "react";
import { PortalComponentProps } from "types/component-types";

export const In: FC<PropsWithChildren<PortalComponentProps>> = ({
  children,
  portalKey,
}) => {
  const { mountPortal, dismountPortal } = usePortals();

  useEffect(() => {
    mountPortal(portalKey, children);
    return () => dismountPortal(portalKey);
  }, [children]);

  return <></>;
};
