import type { FC, PropsWithChildren } from "react";
import { In } from "components/In";
import { Out } from "components/Out";
import type { PortalOptions } from "types/options-types";

interface PortalPair {
  Out: FC;
  In: FC<PropsWithChildren>;
}

export const createPortal = (portalKey: string, options?: PortalOptions) => {
  const pair: PortalPair = {
    In: ({ children }) => (
      <In
        portalKey={portalKey}
        allowDuplicates={options?.allowDuplicates}
        children={children}
      />
    ),
    Out: () => <Out portalKey={portalKey} />,
  };

  return pair;
};
