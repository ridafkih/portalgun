import { type FC, type PropsWithChildren, useEffect } from "react";
import { usePortals } from "hooks/use-portal-hook";
import type { PortalComponentProps } from "types/component-types";

export const In: FC<PropsWithChildren<PortalComponentProps>> = ({
  children,
  portalKey,
}) => {
  const { mountPortal, dismountPortal } = usePortals();

  useEffect(() => {
    mountPortal(portalKey, children);

    return () => {
      if (!children) dismountPortal(portalKey);
    };
  }, [children]);

  return <></>;
};
