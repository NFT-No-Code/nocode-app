import { create, IPFS } from "ipfs-core";
import { useEffect, useState } from "react";

let ipfs: IPFS | null = null;

export const useIpfs = () => {
  const [ipfsError, setIpfsError] = useState<null | Error>(null);
  const [isIpfsReady, setIsIpfsReady] = useState(Boolean(ipfs));

  useEffect(() => {
    initIpfs();

    return () => {
      if (ipfs) {
        ipfs.stop().catch((error) => console.error(error));
        ipfs = null;
        setIsIpfsReady(false);
      }
    };
  }, []);

  const initIpfs = async () => {
    if (!ipfs) {
      try {
        ipfs = await create({ repo: String(Date.now() + Math.random()) });
      } catch (error) {
        if (error instanceof Error) {
          ipfs = null;
          setIpfsError(error);
        }
      }
    }
    setIsIpfsReady(Boolean(ipfs));
  };

  return { ipfs, ipfsError, isIpfsReady };
};
