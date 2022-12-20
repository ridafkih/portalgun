import type { PropsWithChildren } from "react";
import { In } from "components/In";
import { Out } from "components/Out";

interface PortalPair {
  Out: React.FC;
  In: React.FC<PropsWithChildren>;
}

export const createPortal = (portalKey: string) => {
  const pair: PortalPair = {
    In: ({ children }) => <In portalKey={portalKey} children={children} />,
    Out: () => <Out portalKey={portalKey} />,
  };

  return pair;
};
