import type { FC, PropsWithChildren } from "react";
import { In } from "components/In";
import { Out } from "components/Out";

interface PortalPair {
  Out: FC;
  In: FC<PropsWithChildren<{ open?: boolean }>>;
}

export const createPortal = (portalKey: string) => {
  const pair: PortalPair = {
    In: ({ children, open = true }) => {
      if (!open) return null;
      return <In portalKey={portalKey} children={children} />;
    },
    Out: () => <Out portalKey={portalKey} />,
  };

  return pair;
};
