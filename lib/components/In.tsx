import { type FC, type PropsWithChildren, useEffect } from "react";
import { usePortals } from "hooks/use-portal-hook";
import type { PortalComponentProps } from "types/component-types";

export const In: FC<PropsWithChildren<PortalComponentProps>> = ({
  children,
  portalKey,
  allowDuplicates,
}) => {
  const { mountPortal, dismountPortal } = usePortals();

  useEffect(() => {
    mountPortal(portalKey, children, { allowDuplicates });
    return () => dismountPortal(portalKey);
  }, [children]);

  return <></>;
};
